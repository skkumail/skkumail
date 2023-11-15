import Topbar from "@/components/bar/Topbar";
import Button from "@/components/button/Button";
import PortalContainer from "@/components/container/Container";
import Textarea from "@/components/textarea/Textarea";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #ffeb00;
  width: 85px;
  height: 44px;
`;
const Div = styled.div`
  position: absolute;
  top: 6px;
  left: 5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 32px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 42px;
  left: 553px;
  width: 85px;
  height: 44px;
  display: none;
`;
const Div1 = styled.div`
  position: relative;
`;
const Label = styled.div`
  align-self: stretch;
  position: relative;
`;
const Placehoder = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  color: #abafb1;
`;
const InputContent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Input = styled.div`
  border-radius: 8px;
  border: 1px solid #cfd3d4;
  box-sizing: border-box;
  width: 375px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
`;
const Label4 = styled.div`
  flex: 1;
  position: relative;
`;
const Component6 = styled.div`
  border-radius: 12px;
  background-color: #88a788;
  width: 375px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  color: #fff;
`;
const Innerformcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const ControlChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 6px;
  background-color: #5570f1;
  width: 20px;
  height: 20px;
`;
const FicheckIcon = styled.img`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  overflow: hidden;
`;
const Control = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
`;
const Controlscheckboxonnononon = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid #6d7dcd;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const IHerebyAccept = styled.span``;
const Tc = styled.span`
  color: #5570f1;
`;
const Controlscheckboxonnonorig = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  text-align: right;
  font-size: 14px;
  color: #2b2f32;
`;
const Inputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 44px;
  font-size: 12px;
  color: #5e6366;
`;
const Innercontainer = styled.div`
  height: 628px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
const Formcontainer = styled.div`
  position: absolute;
  top: 146px;
  left: 694px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  height: 787px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  text-align: left;
  font-size: 24px;
  color: #2b2f32;
  font-family: Inter;
`;
const SignupPageRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Droid Sans";
`;

const SignupPage: FunctionComponent = () => {

  const router = useRouter();
  const [id, setId] = useState("");
  const handleChangeId = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setId(e.target.value);
  }

  const [password, setPassword] = useState("");
  const handleChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  }

  const [passwordAgain, setPasswordAgain] = useState("");
  const handleChangePasswordAgain = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPasswordAgain(e.target.value);
  }

  const [email, setEmail] = useState("");
  const handleChangeEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  }

  const [verification, setVerification] = useState('')
  const onClickVerification = (e: any) => {
    console.log('인증 번호 전송');

  }

  const onClickSignUp = (e: any) => {
    console.log('계정 생성');
  }

  return (
    <PortalContainer layoutClassName="mx-auto mb-[100px] mt-[200px] flex items-center justify-center w-full" topbar={<Topbar isLogin={true} />}>
      <div className="flex flex-col border-[1px] rounded-[10px] border-gray bg-white justify-center items-start w-fit p-[20px]">
        <div className="text-black text-[20px] font-medium mb-[20px]">회원가입 하세요.</div>
        <div className="flex flex-col space-y-[15px]">
          <Textarea name={'id'} value={id} setValue={setId} placeholder="아이디를 입력하세요." rows={1} />
          <Textarea name={'email'} value={id} setValue={setEmail} placeholder="이메일을 입력하세요." rows={1} />
          <Textarea name={'password'} value={id} setValue={setPassword} placeholder="비밀번호를 입력하세요." rows={1} />
          <Textarea name={'passwordAgain'} value={id} setValue={setPasswordAgain} placeholder="비밀번호를 재입력하세요." rows={1} />
          <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
            onClick={onClickVerification}>
            <span className='font-bold text-white'>인증 번호 전송</span>
          </Button>
          <Textarea name={'verification'} value={verification} setValue={setVerification} placeholder="인증번호를 입력하세요." rows={1} />
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
