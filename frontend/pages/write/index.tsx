import Topbar from "@/components/bar/Topbar";
import Button from "@/components/button/Button";
import PortalContainer from "@/components/container/Container";
import Popup from "@/components/popup/Popup";
import Textarea from "@/components/textarea/Textarea";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const NewIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
`;
const Div = styled.div`
  position: absolute;
  top: 116px;
  left: 45px;
  display: inline-block;
  width: 408px;
  height: 48px;
`;
const Placehoder = styled.div`
  align-self: stretch;
  position: relative;
`;
const InputContent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Top1 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(239, 241, 249, 0.6);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  box-sizing: border-box;
`;
const Input = styled.div`
  width: 510.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Label = styled.div`
  position: relative;
`;
const Bottom = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 4px;
`;
const FichevronDownIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const InputContent2 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const Top2 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(239, 241, 249, 0.6);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 16px;
  color: #abafb1;
`;
const BottomParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Select = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: #5e6366;
`;
const Formcontainer = styled.div`
  position: absolute;
  top: 189px;
  left: 45px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  gap: 10px;
  font-size: 16px;
  color: #abafb1;
`;
const Select1 = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Formcontainer1 = styled.div`
  position: absolute;
  top: 335px;
  left: 45px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  font-size: 12px;
  color: #5e6366;
`;
const Label2 = styled.div`
  flex: 1;
  position: relative;
`;
const Component8 = styled.div`
  position: absolute;
  top: 969px;
  left: 1679px;
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  text-align: center;
  font-size: 20px;
  color: #88a788;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Valid = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  color: #5e6366;
`;
const CheckIcon = styled.img`
  position: relative;
  border-radius: 500px;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Content = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 16px 0px 0px;
  gap: 10px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 7.9px;
  background-color: #cfd3d4;
  width: 1px;
  height: 13.4px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 5.2px;
  left: 7.3px;
  background-color: #cfd3d4;
  width: 1px;
  height: 6.2px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 7.8px;
  left: 8.3px;
  background-color: #cfd3d4;
  width: 1px;
  height: 2.3px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 9.1px;
  height: 11.5px;
`;
const ContentParent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const Input2 = styled.div`
  border-radius: 8px;
  border: 1px solid #32936f;
  box-sizing: border-box;
  width: 1681px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 2px 2px 16px;
  font-size: 12px;
  color: #32936f;
`;
const Innercontainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
const Formcontainer2 = styled.div`
  position: absolute;
  top: 510px;
  left: 56px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 346px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 31px 43px 201px;
  font-size: 24px;
  color: #2b2f32;
`;
const WriteHomeRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
`;

const WriteHome = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [relation, setRelation] = useState('')
  const [style, setStyle] = useState('')
  const [content, setContent] = useState('')

  // GPT API 부르고 그 결과 값을 바탕으로 팝업 띄우기
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const [generatedEmail, setGeneratedEmail] = useState('')

  const api = axios.create({
    baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
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
  const handleSendButton = () => {
    setIsPopup(false)
    // 메일 전송 API 부르기
    router.push('/write/write_complete')
  }


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
