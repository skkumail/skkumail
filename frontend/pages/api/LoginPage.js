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
const Download1Icon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 83.94rem;
  height: 67.5rem;
  object-fit: cover;
`;
const Adress = styled.input`
  position: absolute;
  top: 25.06rem;
  left: 91.20rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 22.00rem;
  height: 3.06rem;
  overflow: hidden;
`;
const Div1 = styled.div`
  position: absolute;
  top: 29.31rem;
  left: 90.98rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Div2 = styled.div`
  position: absolute;
  top: 36.25rem;
  left: 94.75rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Div3 = styled.div`
  position: absolute;
  top: 22.81rem;
  left: 90.98rem;
  display: flex;
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const Adress1 = styled.input`
  position: absolute;
  top: 32.25rem;
  left: 91.20rem;
  border-radius: var(--br-mini);
  border: 1px solid var(--color-midnightblue);
  box-sizing: border-box;
  width: 22.00rem;
  height: 3.06rem;
  overflow: hidden;
`;
const ToggleOffIcon = styled.img`
  position: absolute;
  top: 35.94rem;
  left: 91.38rem;
  width: 2.75rem;
  height: 2.88rem;
  overflow: hidden;
`;
const B = styled.b`
  position: absolute;
  height: 2.22%;
  width: 8.33%;
  top: 29.81%;
  left: 76.15%;
  font-size: var(--font-size-base);
  line-height: 100%;
  display: flex;
  font-family: var(--font-roboto);
  align-items: center;
`;
const Div5 = styled.div`
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
const Div4 = styled.div`
  position: absolute;
  top: 39.44rem;
  left: 91.38rem;
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
  cursor: pointer;
`;
const B1 = styled.b`
  position: absolute;
  top: 39.81rem;
  left: 100.5rem;
  display: flex;
  color: var(--color-white);
  align-items: center;
  width: 9.13rem;
  height: 2.25rem;
`;
const B2 = styled.b`
  position: absolute;
  top: 15.81rem;
  left: 98.88rem;
  font-size: var(--font-size-5xl);
  display: flex;
  align-items: center;
  width: 10.19rem;
  height: 2.44rem;
`;

const B3 = styled.b`
  position: absolute;
  top: 19.20rem;
  left: 98.88rem;
  font-size: var(--font-size-2sm);
  font-weight: normal;
  display: flex;
  align-items: center;
  width: 10.19rem;
  height: 2.44rem;
`;

const Div6 = styled.div`
  position: absolute;
  top: 48.31rem;
  left: 94.25rem;
  display: flex;
  align-items: center;
  width: 19.19rem;
  height: 2.19rem;
`;

const LoginPageChild = styled.div`
  position: absolute;
  top: 45.16rem;
  left: 90.40rem;
  border-top: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 24.00rem;
  height: 0.06rem;
`;
const Span1 = styled.span``;
const Span = styled.span`
  text-decoration: underline;
  color: #211de4;
  cursor : pointer;
`;
const Txt = styled.span`
  line-break: anywhere;
  width: 100%;
`;

const LoginPageRoot = styled.div`
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


const LoginPage = () => {
  const [id, setId] = useState("");
  const handleChangeId = (e) => {
    setId(e.target.value);
  }

  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  const onContainer1Click = async(e) => {
    try {
      const response = await api.post('/api/login/', {
        username : id,
        password : password,
      });


      navigate("/write_home", {state : {username : id}});
    } catch (error) {
      alert("로그인 실패!");
    } 
  };

  const onContainer2Click = (e) => {
    navigate("/signup");
  }
    

  return (
    <LoginPageRoot>
      <RectangleParent>
        <GroupChild />
        <Div>로그인</Div>
      </RectangleParent>
      <Download1Icon alt="" src="/download-1@2x.png" />
      <Adress type='text' value={id} onChange={handleChangeId} placeholder='  아이디를 입력하세요.'/>
      <Div1>비밀번호</Div1>
      <Div2>로그인 유지하기</Div2>
      <Div3>이메일</Div3>
      <Adress1 type='password' value={password} onChange={handleChangePassword} placeholder='  비밀번호를 입력하세요'/>
      <ToggleOffIcon alt="" src="/toggle-off.svg" />
      <Div4 onClick={onContainer1Click}>
        <Div5>로그인</Div5>
        <PIcon alt="" src="/3p3.svg" />
      </Div4>
      <B1>로그인</B1>
          <B2>Mail-GPT</B2>
          <B3>로그인 하세요.</B3>
      <LoginPageChild />
      <Div6>
        <Txt>
          <Span1>{`회원이 아니신가요? `}</Span1>
          <Span onClick={onContainer2Click}>회원 가입</Span>
        </Txt>
      </Div6>
    </LoginPageRoot>
  );
};

export default LoginPage;
