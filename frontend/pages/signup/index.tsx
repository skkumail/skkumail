import Topbar from "@/components/bar/Topbar";
import Button from "@/components/button/Button";
import PortalContainer from "@/components/container/Container";
import Input from "@/components/input/Input";
import Textarea from "@/components/textarea/Textarea";
import axios from "axios";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const SignupPage: FunctionComponent = () => {

  const router = useRouter();
  const [id, setId] = useState("");
  

  const [password, setPassword] = useState("");
  

  const [passwordAgain, setPasswordAgain] = useState("");
  

  const [email, setEmail] = useState("");
  

  const [verification, setVerification] = useState('')
  

  // api
  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`  // 백엔드 서버의 주소와 포트를 baseURL로 설정
  });

  //register test
  const onClickSignUp = async (e: any) => {
    try {
      const response = await api.post('/register', {
        username: id,
        password: password,
        password_config: password,
        gmail_id: email,
        gmail_key: verification
      });

      console.log(response);
      alert('계정 생성에 성공하였습니다!')
      router.push('/')
    } catch (error) {
      alert('실패!');
    }
  };


  return (
    <PortalContainer layoutClassName="mx-auto mb-[100px] mt-[200px] flex items-center justify-center w-full" topbar={<Topbar isLogin={true} />}>
      <div className="flex flex-col border-[1px] rounded-[10px] border-gray bg-white justify-center items-start w-fit p-[20px]">
        <div className="text-black text-[20px] font-medium mb-[20px]">회원가입 하세요.</div>
        <div className="flex flex-col space-y-[15px]">
          <Input name={'id'} value={id} setValue={setId} placeholder="아이디를 입력하세요." rows={1} />
          <Input name={'email'} value={email} setValue={setEmail} placeholder="이메일을 입력하세요." rows={1} />
          <Input type="password" name={'password'} value={password} setValue={setPassword} placeholder="비밀번호를 입력하세요." rows={1} />
          <Input type="password" name={'passwordAgain'} value={passwordAgain} setValue={setPasswordAgain} placeholder="비밀번호를 재입력하세요." rows={1} />

          <Input name={'verification'} value={verification} setValue={setVerification} placeholder="2단계 인증키를 입력하세요." rows={1} />
        </div>
        <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500 mt-[50px] w-full'
          onClick={onClickSignUp}>
          <span className='font-bold text-white'>계정 생성</span>
        </Button>
      </div>
    </PortalContainer>
  );
};

export default SignupPage;
