import styled from "styled-components";
import axios from 'axios';
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/components/button/Button";
import { baseURL } from "../api/axiosConfig";
import PortalContainer from "@/components/container/Container";
import Textarea from "@/components/textarea/Textarea";

const api = axios.create({
  //baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
  baseURL: baseURL
});


const LoginPage = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const handleChangeId = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setId(e.target.value);
  }

  const [password, setPassword] = useState("");
  const handleChangePassword = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  }

  const onClickLogin = async () => {
    try {
      // const response = await api.post('/api/login/', {
      //   username: id,
      //   password: password,
      // });


      router.push("/email");
    } catch (error) {
      alert("로그인 실패!");
    }
  };

  const onClickSignUp = () => {
    router.push("/signup");
  }


  return (
    <>
      <div className="flex flex-col border-[1px] rounded-[10px] border-gray bg-white justify-center items-center w-fit p-[20px]">
        <div className="text-black text-[20px] font-medium mb-[20px]">로그인 하세요.</div>
        <div className="flex flex-col space-y-[15px]">
          <Textarea name={'id'} value={id} setValue={setId} placeholder="아이디 또는 이메일을 입력하세요." rows={1} />
          <Textarea name={'password'} value={password} setValue={setPassword} placeholder="비밀번호를 입력하세요." rows={1} />
          <Button className='rounded-[7px] py-[12px] px-[28px] border-[2px] border-green-500 bg-green-500'
            onClick={onClickLogin}>
            <span className='font-bold text-white'>로그인</span>
          </Button>
        </div>
        <div
          style={{ height: 1 }}
          className='my-10 bg-gray w-full'
        ></div>
        <div className="flex items-center justify-center space-x-[10px]">
          <div className="text-gray text-[10px]">회원이 아니신가요?</div>
          <div onClick={onClickSignUp} className="text-blue text-[10px] cursor-pointer">
            회원가입
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
