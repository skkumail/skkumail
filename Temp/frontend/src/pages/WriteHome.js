import { useCallback } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

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
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  display: inline-block;
  width: 408px;
  height: 48px;
`;
const Placehoder = styled.div`
  align-self: stretch;
  position: relative;
`;
const InputContent = styled.input`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Top1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--input-defaultbackground);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
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
  padding: 0px var(--padding-9xs);
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
  gap: var(--gap-base);
`;
const Top2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--input-defaultbackground);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  box-sizing: border-box;
  font-size: var(--input-placeholder-size);
  color: var(--black-2);
`;
const BottomParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Select = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--input-label-size);
  color: var(--black-4);
`;
const Formcontainer2 = styled.div`
  position: absolute;
  top: 189px;
  left: 45px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  border: 1px solid var(--grey);
  box-sizing: border-box;
  width: 1767px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl) var(--padding-24xl);
  gap: var(--gap-3xs);
  font-size: var(--input-placeholder-size);
  color: var(--black-2);
`;
const Select1 = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Formcontainer11 = styled.div`
  position: absolute;
  top: 335px;
  left: 45px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  border: 1px solid var(--grey);
  box-sizing: border-box;
  width: 1767px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl) var(--padding-24xl);
  font-size: var(--input-label-size);
  color: var(--black-4);
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-5xl);
  color: var(--black-5);
`;
const Valid = styled.textarea`
  align-self: stretch;
  position: relative;
  font-size: var(--input-placeholder-size);
  color: var(--black-4);
  height: 40px;
  width: 1500px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
`;

const Valid1 = styled.textarea`
  align-self: stretch;
  position: relative;
  font-size: var(--input-placeholder-size);
  color: var(--black-4);
  height: 150px;
  width: 1500px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
`;

const CheckIcon = styled.img`
  position: relative;
  border-radius: var(--br-481xl);
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px 0px;
  gap: var(--gap-3xs);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 7.88px;
  background-color: var(--black-1);
  width: 1px;
  height: 13.43px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 5.23px;
  left: 7.3px;
  background-color: var(--black-1);
  width: 1px;
  height: 6.17px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 7.8px;
  left: 8.25px;
  background-color: var(--black-1);
  width: 1px;
  height: 2.31px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 9.06px;
  height: 11.46px;
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
  border-radius: var(--br-5xs);
  border: 1px solid var(--green);
  box-sizing: border-box;
  width: 1681px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-11xs) var(--padding-11xs)
    var(--padding-base);
`;
const Input3 = styled.div`
  border-radius: var(--br-5xs);
  border: 1px solid var(--green);
  box-sizing: border-box;
  width: 1681px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-11xs) var(--padding-11xs)
    var(--padding-base);
`;
const Innercontainer = styled.div`
  flex: 1;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
const Formcontainer21 = styled.div`
  position: absolute;
  top: 509px;
  left: 45px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  border: 1px solid var(--grey);
  box-sizing: border-box;
  width: 1767px;
  height: 451px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 31px var(--padding-24xl) 201px;
  font-size: var(--input-label-size);
  color: var(--green);
`;
const Label4 = styled.div`
  flex: 1;
  position: relative;
  cursor : pointer;
`;
const Component8 = styled.div`
  position: absolute;
  top: 967px;
  left: 1490px;
  border-radius: var(--br-xs);
  border: 2px solid var(--color-darkseagreen);
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-base);
  text-align: center;
`;
const Component5 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-darkseagreen);
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-base);
  box-sizing: border-box;
`;
const Buttoncontainer1 = styled.div`
  position: absolute;
  top: 967px;
  left: 1691px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: var(--color-white);
`;
const Component9 = styled.div`
  position: absolute;
  top: 967px;
  left: 1289px;
  border-radius: var(--br-xs);
  border: 2px solid var(--color-darkseagreen);
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mid) var(--padding-base);
  text-align: center;
`;
const WriteHomeRoot = styled.div`
  width: 1920px;
  height: 1080px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-darkseagreen);
  font-family: var(--input-placeholder);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});

const WriteHome = () => {
  const user_temp_data = useLocation();
  const username = user_temp_data.state.username;
  const [address, setAddress] = useState("");
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const [name, setName] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const [style, setStyle] = useState("");
  const handleChangeStyle = (e) => {
    setStyle(e.target.value);
  };

  const [relation, setRelation] = useState("");
  const handleChangeRelation = (e) => {
    setRelation(e.target.value);
  };

  const [contents, setContents] = useState("");
  const handleChangeContents = (e) => {
    setContents(e.target.value);
  };

  const [chatgpt, setChatgpt] = useState("");
  const handleChangeChatgpt = (e) => {
    setChatgpt(e.target.value);
  };

  const onSendClick = async(e) => {
    try {
      const dummy_head = "임시 제목 입니다";
      const response = await api.post('/api/sendmail/', {
        username : username,
        head : dummy_head,
        address : address,
        text : chatgpt,
        prompt : contents,
      });
      alert('전송성공!');
    } catch (error) {
      alert('전송실패!');
    } 
  };

  const onContainer1Click = async(e) => {
    try {
      console.log("here?");
      const response = await api.post('/api/chatgpt/', {
        username : username,
        send_address : address,
        contents : contents,
        style : style,
        name : name,
        relation : relation,
      });
      setChatgpt(response.data.data);

    } catch (error) {
      alert('ChatGPT 연결 실패! 다시 시도해주세요.');
    } 
  };


  
  const navigate = useNavigate();
  const onHomeClick = async(e) => {
    navigate("/read_home", {state : {username : username}}); 
  };
  

  return (
    <WriteHomeRoot>
      <NewIcon alt="" src="/new.svg" />
      <Div>메일을 전송해보세요.</Div>
      <Formcontainer2>
        <Input>
          <Top1>
            <InputContent type='text' value={name} onChange={handleChangeName} placeholder='수신인 이름을 입력하세요.'/>
          </Top1>
        </Input>
        <Input>
          <Top1>
            <InputContent type='text' value={address} onChange={handleChangeAddress} placeholder='수신인 이메일을 입력하세요.'/>
          </Top1>
        </Input>
        <Select>
          <BottomParent>
            <Bottom>
              <Label />
            </Bottom>
            <Top2>
              <InputContent2>
                <InputContent type='text' value={relation} onChange={handleChangeRelation} placeholder='수신인과의 관계를 입력하세요.'/>
                <FichevronDownIcon alt="" src="/fichevrondown.svg" />
              </InputContent2>
            </Top2>
          </BottomParent>
        </Select>
      </Formcontainer2>
      <Formcontainer11>
        <Select1>
          <BottomParent>
            <Bottom>
              <Label />
            </Bottom>
            <Top2>
              <InputContent2>
                <InputContent type='text' value={style} onChange={handleChangeStyle} placeholder='메일 작성 스타일을 입력하세요.'/>
                <FichevronDownIcon alt="" src="/fichevrondown.svg" />
              </InputContent2>
            </Top2>
          </BottomParent>
        </Select1>
      </Formcontainer11>
      <Formcontainer21>
        <Innercontainer>
          <Heading>
            <Label>이메일 내용 확인</Label>
          </Heading>
          <Input2>
            <ContentParent>
              <Content>
                <InputContent2>
                  <Placehoder>프롬프트 확인</Placehoder>
                  <Valid type='text' value={contents} onChange={handleChangeContents} placeholder='프롬프트 작성 및 수정'/>
                </InputContent2>
                <CheckIcon alt="" src="/check1.svg" />
              </Content>
              <RectangleParent>
                <GroupChild />
                <GroupItem />
                <GroupInner />
              </RectangleParent>
            </ContentParent>
          </Input2>
          <Input3>
            <ContentParent>
              <Content>
                <InputContent2>
                  <Placehoder>생성된 이메일 확인 및 수정</Placehoder>
                  <Valid1 type='text' value={chatgpt} onChange={handleChangeChatgpt} placeholder='이메일 자동 작성 및 수정'/>
                </InputContent2>
                <CheckIcon alt="" src="/check1.svg" />
              </Content>
              <RectangleParent>
                <GroupChild />
                <GroupItem />
                <GroupInner />
              </RectangleParent>
            </ContentParent>
          </Input3>
        </Innercontainer>
      </Formcontainer21>
      <Component8>
        <Label4 onClick={onContainer1Click}>작성 요청</Label4>
      </Component8>
      <Buttoncontainer1>
        <Component5>
          <Label4 onClick={onSendClick}>전송</Label4>
        </Component5>
      </Buttoncontainer1>
      <Component9>
        <Label4 onClick={onHomeClick}>취소</Label4>
      </Component9>
    </WriteHomeRoot>
  );
};

export default WriteHome;
