import Topbar from "@/components/bar/Topbar";
import Button from "@/components/button/Button";
import PortalContainer from "@/components/container/Container";
import Popup from "@/components/popup/Popup";
import Textarea from "@/components/textarea/Textarea";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const WriteHome = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [relation, setRelation] = useState('')
  const [style, setStyle] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  // GPT API 부르고 그 결과 값을 바탕으로 팝업 띄우기
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const [generatedEmail, setGeneratedEmail] = useState('')

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`  // 백엔드 서버의 주소와 포트를 baseURL로 설정
  });
  const handleSendRequestButton = async () => {
    // GPT API call 
    try {
      const response = await api.post('/chatgpt', {
        username: "soo", // test user name
        send_address: email,
        contents: content,
        style: style,
        name: name,
        relation: relation,
      });

      console.log(response);

      // 성공 시 setGeneratedEmail 하고 팝업 띄우기
      setGeneratedEmail(response.data.data)
      setIsPopup(true)

    } catch (error) {
      alert('실패!');
    }
  }

  // 전송 버튼
  const handleSendButton = async () => {
    try {
      const response = await api.post('/sendmail', {
        username: name, // 여기 username 이 뭔지
        head: title,
        text: generatedEmail,
        address: email,
        prompt: ""
      });

      console.log(response);

      setIsPopup(false)
      router.push('/write/write_complete')
    } catch (error) {
      alert('실패!');
    }
  };


  return (
    <PortalContainer layoutClassName="m-20" topbar={<Topbar />}>
      <div className="text-black text-[20px] font-medium mb-[20px]">메일을 전송해보세요.</div>
      <div className="flex border-[1px] rounded-[10px] border-gray bg-white justify-start items-start w-full p-[20px] space-x-[10px] mb-10">
        <Textarea name={'name'} value={name} setValue={setName} placeholder="수신인을 입력하세요." rows={1} />
        <Textarea name={'email'} value={email} setValue={setEmail} placeholder="수신인 이메일을 입력하세요." rows={1} />
        <Textarea name={'relation'} value={relation} setValue={setRelation} placeholder="수신인과의 관계를 입력하세요." rows={1} />
      </div>
      <div className="flex border-[1px] rounded-[10px] border-gray bg-white justify-start items-start w-full p-[20px] space-x-[10px] mb-10">
        <Textarea name={'style'} value={style} setValue={setStyle} placeholder="메일 작성 스타일을 입력하세요." rows={1} />
      </div>
      <div className="flex border-[1px] rounded-[10px] border-gray bg-white justify-start items-start w-full p-[20px] space-x-[10px] mb-10">
        <Textarea customTextClassName="w-[800px]" name={'content'} value={content} setValue={setContent} placeholder="핵심 내용을 입력하세요." rows={5} />
      </div>
      <div className="flex justify-end">
        <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
          onClick={handleSendRequestButton}>
          <span className='font-bold text-white'>작성 요청</span>
        </Button>
      </div>
      {isPopup && (
        <Popup title={"GPT 가 작성한 이메일을 확인하세요."} onClose={() => setIsPopup(false)}>
          {generatedEmail ? (
            <div className="flex flex-col w-full space-y-[10px]">
              <Textarea customTextClassName="" name={'generatedEmail'} value={generatedEmail} setValue={setGeneratedEmail} placeholder="작성한 내용을 확인하세요" rows={8} />
              <div className="flex justify-end space-x-[10px]">
                <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-white'
                  onClick={() => setIsPopup(false)}>
                  <span className='font-bold text-green-500'>취소</span>
                </Button>
                <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
                  onClick={handleSendButton}>
                  <span className='font-bold text-white'>전송</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex w-full text-black">
              메일을 생성 중입니다.
            </div>
          )}
        </Popup>
      )}
    </PortalContainer>
  );
};

export default WriteHome;
