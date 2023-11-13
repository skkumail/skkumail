import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
`;
const Group261 = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const Group261Wrapper = styled.div`
  align-self: stretch;
  width: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Avatars = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  display: none;
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
  font-size: 14px;
  color: rgba(6, 10, 24, 0.3);
`;
const Subtitle = styled.div`
  position: relative;
  font-size: 10px;
  color: #c3c8dd;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
`;
const ItemParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 40px;
  background-color: #c3c8dd;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 32px;
  height: 18px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 50%;
  background-color: #fff;
  width: 16px;
  height: 16px;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 32px;
  height: 18px;
`;
const Switch1 = styled.div`
  align-self: stretch;
  height: 18px;
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
const Icons = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const List = styled.div`
  position: absolute;
  top: 324px;
  left: 94px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List1 = styled.div`
  position: absolute;
  top: 670px;
  left: 94px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List2 = styled.div`
  position: absolute;
  top: 792px;
  left: 94px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const KeywordSearchItem = styled.img`
  position: absolute;
  top: 817px;
  left: 202.5px;
  width: 1px;
  height: 25.5px;
`;
const List3 = styled.div`
  position: absolute;
  top: 558px;
  left: 94px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List4 = styled.div`
  position: absolute;
  top: 436px;
  left: 94px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const KeywordSearchInner = styled.img`
  position: absolute;
  top: 461px;
  left: 196.5px;
  width: 1px;
  height: 25.5px;
`;
const List5 = styled.div`
  position: absolute;
  top: 324px;
  left: 1005px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const LineIcon = styled.img`
  position: absolute;
  top: 350px;
  left: 1146.5px;
  width: 1px;
  height: 25.5px;
`;
const List6 = styled.div`
  position: absolute;
  top: 670px;
  left: 1005px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List7 = styled.div`
  position: absolute;
  top: 792px;
  left: 1005px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List8 = styled.div`
  position: absolute;
  top: 558px;
  left: 1005px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const List9 = styled.div`
  position: absolute;
  top: 436px;
  left: 1005px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  width: 780px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 8px;
`;
const KeywordSearchChild1 = styled.img`
  position: absolute;
  top: 349px;
  left: 206.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild2 = styled.img`
  position: absolute;
  top: 583px;
  left: 214.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild3 = styled.img`
  position: absolute;
  top: 694px;
  left: 199.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild4 = styled.img`
  position: absolute;
  top: 461px;
  left: 1117.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild5 = styled.img`
  position: absolute;
  top: 584px;
  left: 1134.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild6 = styled.img`
  position: absolute;
  top: 694px;
  left: 1094.5px;
  width: 1px;
  height: 25.5px;
`;
const KeywordSearchChild7 = styled.img`
  position: absolute;
  top: 818px;
  left: 1142.5px;
  width: 1px;
  height: 25.5px;
`;
const Div = styled.div`
  position: absolute;
  top: 207px;
  left: 112px;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 408px;
  height: 48px;
`;
const Iconlylightsearch = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Search1 = styled.div`
  align-self: stretch;
  position: relative;
`;
const InputContent1 = styled.div`
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
  gap: 16px;
`;
const Search = styled.div`
  position: absolute;
  top: 122px;
  left: 98px;
  border-radius: 8px;
  border: 1px solid #cfd3d4;
  box-sizing: border-box;
  width: 1052px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  font-size: 16px;
  color: #abafb1;
`;
const Div1 = styled.div`
  position: absolute;
  top: 255px;
  left: 112px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 303px;
  height: 41px;
`;
const KeywordSearchChild8 = styled.div`
  position: absolute;
  top: 421px;
  left: 712px;
  border-radius: 20px;
  background-color: #fff;
  width: 433px;
  height: 409px;
`;
const CloseIcon = styled.img`
  position: absolute;
  top: 439px;
  left: 1102px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Checkbox = styled.div`
  width: 25px;
  height: 25px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
`;
const Item30 = styled.div`
  height: 25px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Overline10 = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
  display: none;
`;
const Title10 = styled.b`
  align-self: stretch;
  position: relative;
  font-size: 14px;
  color: #060a18;
`;
const ItemParent7 = styled.div`
  width: 308px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const List10 = styled.div`
  position: absolute;
  top: 516px;
  left: 750px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cfd3d4;
  box-sizing: border-box;
  width: 352px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  cursor: pointer;
`;
const List11 = styled.div`
  position: absolute;
  top: 626px;
  left: 750px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cfd3d4;
  box-sizing: border-box;
  width: 352px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;
const List12 = styled.div`
  position: absolute;
  top: 571px;
  left: 750px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #cfd3d4;
  box-sizing: border-box;
  width: 352px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`;
const Meeting = styled.div`
  position: absolute;
  top: 451px;
  left: 737px;
  font-size: 16px;
  color: #000;
  display: inline-block;
  width: 313px;
  height: 41px;
`;
const KeywordSearchRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  text-align: left;
  font-size: 8px;
  color: #2a46a9;
  font-family: Inter;
`;

const KeywordSearch = () => {
  const navigate = useNavigate();

  const onListContainer10Click = useCallback(() => {
    navigate("/read-the-mail");
  }, [navigate]);

  return (
    <KeywordSearchRoot>
      <NewIcon alt="" src="/page-layout.svg" />
      <NewIcon alt="" src="/rectangle-2759.svg" />
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
            <Title>Vanessa Lee Meeting Request for Next Week</Title>
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
          <Icons alt="" src="/icons1.svg" />
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
            <Title>Olivia Miller New Product Launch Announcement</Title>
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
          <Icons alt="" src="/icons1.svg" />
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
            <Title>Isabella Kim Follow-Up on our Recent Conversation</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List2>
      <KeywordSearchItem alt="" src="/line-32.svg" />
      <List3>
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
            <Title>William Smith Feedback Needed for Project Review</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List3>
      <List4>
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
            <Title>Alex Brown Thank you for Partnership</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List4>
      <KeywordSearchInner alt="" src="/line-32.svg" />
      <List5>
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
            <Title>Sophia Anderson Invitation to our Annual Gala Event</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List5>
      <LineIcon alt="" src="/line-34.svg" />
      <List6>
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
            <Title>Sam Park Invoice for Services Rendered</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List6>
      <List7>
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
            <Title>Alexander Harry Upcoming Webinar: Register Now!</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List7>
      <List8>
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
            <Title>Lucas Williams Job Interview Confirmation and Details</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List8>
      <List9>
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
            <Title>Noah Wilson Thank You for Your Recent Purchase</Title>
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
          <Icons alt="" src="/icons1.svg" />
        </Item2>
      </List9>
      <KeywordSearchChild1 alt="" src="/line-32.svg" />
      <KeywordSearchChild2 alt="" src="/line-32.svg" />
      <KeywordSearchChild3 alt="" src="/line-32.svg" />
      <KeywordSearchChild4 alt="" src="/line-34.svg" />
      <KeywordSearchChild5 alt="" src="/line-34.svg" />
      <KeywordSearchChild6 alt="" src="/line-34.svg" />
      <KeywordSearchChild7 alt="" src="/line-34.svg" />
      <Div>{`메일 목록을 확인하세요. `}</Div>
      <Search>
        <InputContent>
          <Iconlylightsearch alt="" src="/iconlylightsearch1.svg" />
          <InputContent1>
            <Search1>메일 내용, 수신인을 검색하세요.</Search1>
          </InputContent1>
        </InputContent>
      </Search>
      <Div1>{`현재 {수신인별} 기준으로 조회 되고 있습니다.`}</Div1>
      <KeywordSearchChild8 />
      <CloseIcon alt="" src="/close.svg" />
      <List10 onClick={onListContainer10Click}>
        <ItemParent7>
          <Item30>
            <Checkbox>
              <Icons alt="" src="/bounds.svg" />
            </Checkbox>
          </Item30>
          <Content>
            <Overline10>overline</Overline10>
            <Title10>Meeting Request for Next Week</Title10>
            <Subtitle>2023.08.28</Subtitle>
          </Content>
        </ItemParent7>
      </List10>
      <List11>
        <ItemParent7>
          <Item30>
            <Checkbox>
              <Icons alt="" src="/bounds.svg" />
            </Checkbox>
          </Item30>
          <Content>
            <Overline10>overline</Overline10>
            <Title10>Head Conference in December 1</Title10>
            <Subtitle>2023.09.01</Subtitle>
          </Content>
        </ItemParent7>
      </List11>
      <List12>
        <ItemParent7>
          <Item30>
            <Checkbox>
              <Icons alt="" src="/bounds.svg" />
            </Checkbox>
          </Item30>
          <Content>
            <Overline10>overline</Overline10>
            <Title10>Spec Issue Notice</Title10>
            <Subtitle>2023.08.29</Subtitle>
          </Content>
        </ItemParent7>
      </List12>
      <Meeting>‘meeting’을 키워드로 하는 메일 목록입니다.</Meeting>
    </KeywordSearchRoot>
  );
};

export default KeywordSearch;
