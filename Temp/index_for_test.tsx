import Topbar from '@/components/bar/Topbar';
import Button from '@/components/button/Button';
import PortalContainer from '@/components/container/Container';
import { COLORS } from '@/modules/var';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginPage from './login';
import axios from 'axios';


export default function Home() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  // localhost:8000 test
  const api = axios.create({
    baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
  });

  //register test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/register', {
  //       username : "user_id",
  //       password : "password",
  //       password_config : "password",
  //       gmail_id : "user_id@gmail.com",
  //       gmail_key : "gmail_password_key"
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  // login test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/login', {
  //       username : "12345",
  //       password : "12345555"
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };
  

  // ChatGPT writing test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/chatgpt', {
  //       username : "12345",
  //       send_address : "adfasdf",
  //       contents : "about attendance score",
  //       style : "formal",
  //       name : "ChulSu",
  //       relation : "professor and student",
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };



  // send email test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/sendmail', {
  //       username : "user_id",
  //       head : "hi hi hi",
  //       text : "for test test test test testing testing testing",
  //       address : "user_id@gmail.com",
  //       prompt : "test"
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  // summary email test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/summarize', {
  //       username : 'user_id',
  //       sender : 'sender_email',
  //       num : 2
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  // show mail test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/showmail', {
  //       username : 'user_id'
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  // keyword extract test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/extract_keywords', {
  //       username : 'user_id',
  //       sender : 'sender_email',
  //       num : 2
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  // translate test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/translate', {
  //       contents : "Deep Neural Networks (DNNs) trained on one dataset (source domain) do not perform well on another set of data (target domain), which is different but has similar properties as the source domain. Domain Adaptation (DA) strives to alleviate this problem and has great potential in its application in practical settings, real-world scenarios, industrial applications and many data domains. Various DA methods aimed at individual data domains have been reported in the last few years; however, there is no comprehensive survey that encompasses all these data domains, focuses on the datasets available, the methods relevant to each domain, and importantly the applications and challenges. To that end, this survey paper discusses how DA can help DNNs work efficiently in these settings by reviewing DA methods and techniques. We have considered five data domains: computer vision, natural language processing, speech, time-series, and multi-modal data. We present a comprehensive taxonomy, including the methods, datasets, challenges, and applications corresponding to each domain. Our goal is to discuss industrial use cases and DA implementation for those. Our final aim is to provide future research directions based on evolving methods and results, the datasets used, and industrial applications."
  //     });
      
  //     console.log(response);
  //   } catch (error) {
  //     alert('실패!');
  //   } 
  // };


  

  useEffect(() => {
    Test();
  }, []);


  

  const handleButtonClick = () => {
    // Use router.push to navigate to the desired page
    router.push('/email');
  };

  return (
    <PortalContainer layoutClassName="mx-auto mb-[120px] mt-[60px] w-full">
      <LoginPage />
    </PortalContainer>
  );
}

