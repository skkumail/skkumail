import styled from "styled-components";
import axios from 'axios';
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  background-color: var(--color-yellow);
  width: 5.31rem;
  height: 2.75rem;
`;
const Div = styled.div`
  position: absolute;
  top: 0.38rem;
  left: 0.31rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.69rem;
  height: 2rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 2.63rem;
  left: 34.56rem;
  width: 5.31rem;
  height: 2.75rem;
  display: none;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-family: var(--font-droid-sans);
`;
const B = styled.b`
  position: absolute;
  top: 10.5rem;
  left: 54.44rem;
  font-size: var(--font-size-13xl);
  display: flex;
  align-items: center;
  width: 10.19rem;
  height: 2.44rem;
`;
const Adress = styled.input`
  position: absolute;
  top: 18.5rem;
  left: 48.56rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 21.88rem;
  height: 3.06rem;
  overflow: hidden;
`;
const Div1 = styled.div`
  position: absolute;
  top: 22.75rem;
  left: 48.56rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Div2 = styled.div`
  position: absolute;
  top: 29.94rem;
  left: 48.56rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;

const Div22 = styled.div`
  position: absolute;
  top: 36.94rem;
  left: 48.56rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Div3 = styled.div`
  position: absolute;
  top: 16.25rem;
  left: 48.56rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Div4 = styled.div`
  position: absolute;
  top: 44.56rem;
  left: 49.06rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Adress1 = styled.input`
  position: absolute;
  top: 25.69rem;
  left: 48.56rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 21.88rem;
  height: 3.06rem;
  overflow: hidden;
`;
const Adress2 = styled.input`
  position: absolute;
  top: 48.13rem;
  left: 49.06rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 21.88rem;
  height: 3.06rem;
  overflow: hidden;
`;
const Adress3 = styled.input`
  position: absolute;
  top: 32.88rem;
  left: 48.56rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 21.88rem;
  height: 3.06rem;
  overflow: hidden;
`;

const Adress4 = styled.input`
  position: absolute;
  top: 39.88rem;
  left: 48.56rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 21.88rem;
  height: 3.06rem;
  overflow: hidden;
`;

const SignupPageChild = styled.div`
  position: absolute;
  top: 43.16rem;
  left: 48.28rem;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 23.44rem;
  height: 0.06rem;
`;
const Div6 = styled.div`
  position: relative;
  line-height: 100%;
  display: none;
  z-index: 0;
`;
const PIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 0.44rem;
  left: 4.25rem;
  width: 1.38rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  z-index: 1;
`;
const Div5 = styled.div`
  position: absolute;
  top: 38rem;
  left: 48.56rem;
  border-radius: var(--br-980xl);
  background-color: var(--color-darkseagreen);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 21.88rem;
  height: 3.06rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  text-align: center;
  font-size: var(--font-size-smi);
  color: var(--color-white);
  font-family: var(--font-roboto);
`;
const Div7 = styled.div`
  position: absolute;
  top: 53.25rem;
  left: 49.06rem;
  border-radius: var(--br-980xl);
  background-color: var(--color-darkseagreen);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 21.88rem;
  height: 3.06rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  text-align: center;
  font-size: var(--font-size-smi);
  color: var(--color-white);
  font-family: var(--font-roboto);
  cursor : pointer;
`;
const B1 = styled.b`
  position: absolute;
  top: 38.44rem;
  left: 56.19rem;
  display: flex;
  color: var(--color-white);
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const B2 = styled.b`
  position: absolute;
  top: 53.69rem;
  left: 55.5rem;
  display: flex;
  color: var(--color-white);
  align-items: center;
  width: 12.25rem;
  height: 2.25rem;
`;
const SignupPageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 67.5rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-black);
  font-family: var(--font-inter);
`;


const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const SignupPage = () => {

  const [id, setId] = useState("");
  const handleChangeId = (e) => {
    setId(e.target.value);
  }

  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const [passwordcheck, setPasswordCheck] = useState("");
  const handleChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  }

  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const [key, setKey] = useState("");
  const handleChangeKey = (e) => {
    setKey(e.target.value);
  }
  const navigate = useNavigate();

  const onContainer1Click = async(e) => {
    try {
      const response = await api.post('/api/register/', {
        username : id,
        password : password,
        password_config : passwordcheck,
        gmail_id : email,
        gmail_key : key,
      });
      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert('회원가입 실패!');
    } 
  };


  return (
    <SignupPageRoot>
      <RectangleParent>
        <GroupChild />
        <Div>로그인</Div>
      </RectangleParent>
      <B>서비스 이름</B>
      <Adress type='text' value={id} onChange={handleChangeId} placeholder='아이디'/>
      <Div1>비밀번호</Div1>
      <Div2>비밀번호 확인</Div2>
      <Div22>Gmail 아이디</Div22>
      <Div3>이메일</Div3>
      <Div4>인증 번호 입력</Div4>
      <Adress1 type='password' value={password} onChange={handleChangePassword} placeholder='비밀번호'/>
      <Adress3 type='password' value={passwordcheck} onChange={handleChangePasswordCheck} placeholder='비밀번호 확인'/>
      <Adress4 type='text' value={email} onChange={handleChangeEmail} placeholder='Gmail 아이디'/>
      <Adress2 type='password' value={key} onChange={handleChangeKey} placeholder='인증번호'/>
      {/* <SignupPageChild /> */}
      {/* <Div5>
        <Div6>로그인</Div6>
        <PIcon alt="" src="/3p2.svg" />
      </Div5> */}
      <Div7 onClick={onContainer1Click}>
        <PIcon alt="" src="/3p2.svg" />
      </Div7>
      {/* <B1>인증 번호 받기</B1> */}
      <B2>{`인증 & 회원가입 완료`}</B2>
    </SignupPageRoot>
  );
};

export default SignupPage;
