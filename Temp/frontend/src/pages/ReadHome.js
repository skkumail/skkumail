import { useCallback } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const NewIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 120rem;
  height: 67.5rem;
`;
const Div = styled.div`
  position: absolute;
  top: 13.19rem;
  left: 5.88rem;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  display: inline-block;
  width: 25.5rem;
  height: 3rem;
`;
const Iconlylightsearch = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;
const Placehoder = styled.input`
  align-self: stretch;
  position: relative;
`;
const InputContent1 = styled.input`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const InputContent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Search = styled.div`
  position: absolute;
  top: 7.88rem;
  left: 5rem;
  border-radius: var(--br-5xs);
  border: 1px solid var(--black-1);
  box-sizing: border-box;
  width: 65.75rem;
  height: 2.81rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  font-size: var(--input-placeholder-size);
  color: var(--black-2);
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
  padding: 0rem var(--padding-9xs);
`;
const FichevronDownIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Top1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  border: 1px solid var(--black-1);
  box-sizing: border-box;
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
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
  position: absolute;
  top: 7.88rem;
  left: 92.5rem;
  width: 23.44rem;
  height: 2.81rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--input-label-size);
  color: var(--black-4);
`;
const Div1 = styled.div`
  position: absolute;
  top: 16.19rem;
  left: 5.88rem;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  display: inline-block;
  width: 18.94rem;
  height: 2.56rem;
`;
const Group261 = styled.img`
  position: relative;
  width: 3.13rem;
  height: 3.13rem;
  object-fit: cover;
`;
const Group261Wrapper = styled.div`
  align-self: stretch;
  width: 3.13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Avatars = styled.div`
  height: 3.13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Overline = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
`;
const Title = styled.b`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  color: var(--dark);
`;
const Subtitle = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  color: var(--gray);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const ItemParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-21xl);
  background-color: var(--gray);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 2rem;
  height: 1.13rem;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0.06rem;
  left: 0.06rem;
  border-radius: 50%;
  background-color: var(--white);
  width: 1rem;
  height: 1rem;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 2rem;
  height: 1.13rem;
`;
const Switch1 = styled.div`
  align-self: stretch;
  height: 1.13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Switch = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Item1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const List = styled.div`
  position: absolute;
  top: 20.25rem;
  left: 5.88rem;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 110.06rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-5xs);
`;
const List1 = styled.div`
  position: absolute;
  top: 35.5rem;
  left: 5.88rem;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 110.06rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-5xs);
`;
const List2 = styled.div`
  position: absolute;
  top: 27.88rem;
  left: 5.88rem;
  border-radius: var(--br-9xs);
  background-color: var(--white);
  border: 1px solid var(--color-darkgray-100);
  box-sizing: border-box;
  width: 110.06rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-5xs);
`;
const ReadHomeRoot = styled.div`
  position: relative;
  width: 100%;
  height: 67.5rem;
  text-align: left;
  font-size: var(--font-size-5xs);
  color: var(--primary-light);
  font-family: var(--input-placeholder);
`;

const api = axios.create({
  baseURL: 'http://localhost:8000'  // 백엔드 서버의 주소와 포트를 baseURL로 설정
});


const ReadHome = () => {
  const user_temp_data = useLocation();
  const username = user_temp_data.state.username;
  const [target_content, setTargetContent] = useState("");
  const handleChangeTargetContent = (e) => {
    setTargetContent(e.target.value);
  };
  const [target_id, setTargetID] = useState("");
  const handleChangeTargetID = (e) => {
    setTargetID(e.target.value);
  };



  return (
    <ReadHomeRoot>
      <NewIcon alt="" src="/new1.svg" />
      <Div>{`메일 목록을 확인하세요. `}</Div>
      <Search>
        <InputContent>
          <Iconlylightsearch alt="" src="/iconlylightsearch2.svg" />
          <InputContent1 type='text' value={target_content} onChange={handleChangeTargetContent} placeholder='메일 내용을 검색하세요.'/>
        </InputContent>
      </Search>
      <Select>
        <BottomParent>
          <Bottom>
            <Label>Label</Label>
          </Bottom>
          <Top1>
            <InputContent>
              <InputContent1 type='text' value={target_id} onChange={handleChangeTargetID} placeholder='발신인을 검색하세요.'/>
              <FichevronDownIcon alt="" src="/fichevrondown.svg" />
            </InputContent>
          </Top1>
        </BottomParent>
      </Select>
      <Div1>{`현재 {수신인별} 기준으로 조회 되고 있습니다.`}</Div1>
      <List>
        <ItemParent>
          <Item>
            <Avatars>
              <Group261Wrapper>
                <Group261 alt="" src="/group-26-1@2x.png" />
              </Group261Wrapper>
            </Avatars>
          </Item>
          <Content>
            <Overline>수신인</Overline>
            <Title>Vanessa Lee</Title>
            <Subtitle>vnsl@gmail.com</Subtitle>
          </Content>
        </ItemParent>
        <Item1>
          <Switch>
            <Switch1>
              <RectangleParent>
                <GroupChild />
                <GroupItem />
              </RectangleParent>
            </Switch1>
          </Switch>
        </Item1>
        <Item2>
          <FichevronDownIcon alt="" src="/icons1.svg" />
        </Item2>
      </List>
      <List1>
        <ItemParent>
          <Item>
            <Avatars>
              <Group261Wrapper>
                <Group261 alt="" src="/group-26-1@2x.png" />
              </Group261Wrapper>
            </Avatars>
          </Item>
          <Content>
            <Overline>수신인</Overline>
            <Title>Vanessa Lee</Title>
            <Subtitle>vnsl@gmail.com</Subtitle>
          </Content>
        </ItemParent>
        <Item1>
          <Switch>
            <Switch1>
              <RectangleParent>
                <GroupChild />
                <GroupItem />
              </RectangleParent>
            </Switch1>
          </Switch>
        </Item1>
        <Item2>
          <FichevronDownIcon alt="" src="/icons1.svg" />
        </Item2>
      </List1>
      <List2>
        <ItemParent>
          <Item>
            <Avatars>
              <Group261Wrapper>
                <Group261 alt="" src="/group-26-1@2x.png" />
              </Group261Wrapper>
            </Avatars>
          </Item>
          <Content>
            <Overline>수신인</Overline>
            <Title>Vanessa Lee</Title>
            <Subtitle>vnsl@gmail.com</Subtitle>
          </Content>
        </ItemParent>
        <Item1>
          <Switch>
            <Switch1>
              <RectangleParent>
                <GroupChild />
                <GroupItem />
              </RectangleParent>
            </Switch1>
          </Switch>
        </Item1>
        <Item2>
          <FichevronDownIcon alt="" src="/icons1.svg" />
        </Item2>
      </List2>
    </ReadHomeRoot>
  );
};

export default ReadHome;
