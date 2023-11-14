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

  // register test
  // const Test = async(e) => {
  //   try {
  //     const response = await api.post('/register', {
  //       username : "12345",
  //       password : "12345123",
  //       password_config : "12345123",
  //       gmail_id : "12345@1231.123",
  //       gmail_key : "1234566123"
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
  //       username : "tofu7679",
  //       head : "hi hi hi",
  //       text : "for test test test test testing testing testing",
  //       address : "tofu7679@gmail.com",
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
  //       contents : "Hey Bob, We talked a couple weeks back at the chamber of commerce event. (I was the one looking for a summer internship and had a zit on my lip that could have passed for a cold soar. Lol. Whew. It was not. You’re probably like, “uh.. What?” Maybe that helps you recall, maybe not. Not completely important, I suppose. I’d really like to come work for you at your IT business. You seemed like a cool person to work for, I liked ur striped pants. I’m available to start working on Monday, but I am taking my driver’s test in June and have to study and go an hour and half away to take it at an easier place cause I’m not a great driver so I’ll miss a few days. I am also going to the beach with friends for a week in July. Oh, and my grandmother has bad gas (OMG IT’S TERRIBLE) and sometimes I have to take her to the doctor. I’ve attached my resume, it’s the bomb dot com. Let me know if you have a job opening for me. I can’t wait to play on some computers. If I don’t respond to your email, I’m always on FB, snapchat or insta!\nPeace out,\n Gabrielle Mendes"
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

