import styled from "styled-components";
//import { useCallback } from "react";
//import { useNavigate } from "react-router-dom";
// 혼용하지 말아주세요. build 까지 해보고 commit 해주세요
import {useRouter} from 'next/router'

const ViewKeywordChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
`;
const Div = styled.div`
  position: absolute;
  top: 146px;
  left: 1032px;
  font-size: 10px;
  line-height: 100%;
  font-family: Roboto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 309px;
  height: 40px;
`;
const DownloadIcon = styled.img`
  position: absolute;
  top: 205px;
  left: 1187px;
  width: 33px;
  height: 33px;
  overflow: hidden;
`;
const Label = styled.div`
  flex: 1;
  position: relative;
`;
const Component5 = styled.div`
  border-radius: 12px;
  background-color: #88a788;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  box-sizing: border-box;
`;
const Buttoncontainer = styled.div`
  position: absolute;
  top: 675px;
  left: 1024px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: 20px;
  color: #fff;
`;
const SendIcon = styled.img`
  position: absolute;
  height: 3.89%;
  width: 2.19%;
  top: 28.03%;
  right: 80.16%;
  bottom: 68.08%;
  left: 17.66%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const TitleOooReport = styled.b`
  position: absolute;
  height: 6.47%;
  width: 37.45%;
  top: 18.13%;
  left: 16.72%;
  font-size: 24px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ViewKeywordItem = styled.div`
  position: absolute;
  top: 313.5px;
  left: 320.5px;
  border-top: 1px solid #000;
  box-sizing: border-box;
  width: 1184px;
  height: 1px;
`;
const HelloOoo = styled.p`
  margin: 0;
`;
const HelloOooAContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const HelloOooAContainer = styled.div`
  position: absolute;
  top: 361px;
  left: 345px;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 1176px;
  height: 395px;
`;
const ViewKeywordInner = styled.img`
  position: absolute;
  top: 330px;
  left: 324.5px;
  width: 1172px;
  height: 42px;
`;
const AttachFileIcon = styled.img`
  position: absolute;
  top: 335px;
  left: 329px;
  width: 31px;
  height: 31px;
  overflow: hidden;
`;
const Attach1DocumentationFor = styled.div`
  position: absolute;
  top: 333px;
  left: 362px;
  font-size: 11px;
  line-height: 100%;
  font-family: Sen;
  display: flex;
  align-items: center;
  width: 982px;
  height: 35px;
`;
const JamesMailcom = styled.div`
  position: absolute;
  top: 281px;
  left: 325px;
  font-size: 12px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 254px;
  height: 18px;
`;
const AbcdeCompany = styled.div`
  position: absolute;
  top: 253px;
  left: 325px;
  font-size: 12px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 254px;
  height: 18px;
`;
const ArrowBackIosIcon = styled.img`
  position: absolute;
  top: 31px;
  left: 34px;
  width: 39px;
  height: 39px;
  overflow: hidden;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 302px;
  left: 743px;
  border-radius: 20px;
  background-color: #fff;
  width: 433px;
  height: 409px;
`;
const CloseIcon = styled.img`
  position: absolute;
  top: 343px;
  left: 1112px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const Div1 = styled.div`
  position: absolute;
  top: 350px;
  left: 784px;
  font-size: 16px;
  display: inline-block;
  width: 313px;
  height: 41px;
`;
const BoundsIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
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
const Item = styled.div`
  height: 25px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Overline = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
  display: none;
`;
const Title = styled.b`
  align-self: stretch;
  position: relative;
  font-size: 14px;
  color: #060a18;
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
  width: 308px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const List = styled.div`
  position: absolute;
  top: 391px;
  left: 784px;
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
  color: #2a46a9;
`;
const List1 = styled.div`
  position: absolute;
  top: 461px;
  left: 784px;
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
  color: #2a46a9;
`;
const List2 = styled.div`
  position: absolute;
  top: 531px;
  left: 784px;
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
  color: #2a46a9;
`;
const ViewKeywordRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  text-align: left;
  font-size: 8px;
  color: #000;
  font-family: Inter;
`;

const ViewKeyword = () => {
  const router = useRouter();

  const onListContainerClick = () => {
    router.push("/read-the-mail");
  };
  return (
    <ViewKeywordRoot>
      <ViewKeywordChild alt="" src="/rectangle-2759.svg" />
      <Div>2023년 00월 00일 00:00</Div>
      <DownloadIcon alt="" src="/download1.svg" />
      <Buttoncontainer>
        <Component5>
          <Label>번역</Label>
        </Component5>
      </Buttoncontainer>
      <SendIcon alt="" src="/send1.svg" />
      <TitleOooReport>Title: OOO Report ...</TitleOooReport>
      <ViewKeywordItem />
      <HelloOooAContainer>
        <HelloOooAContainer1>
          <HelloOoo>Hello, ooo</HelloOoo>
          <HelloOoo>&nbsp;</HelloOoo>
          <HelloOoo>{`A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device. `}</HelloOoo>
          <HelloOoo>&nbsp;</HelloOoo>
          <HelloOoo>
            The sign in attempt requires further verification because we did not
            recognize your device. To complete the sign in, enter the
            verification code on the unrecognized device. To complete the sign
            in, enter the verification code on the unrecognized device.
          </HelloOoo>
          <HelloOoo>&nbsp;</HelloOoo>
          <HelloOoo>Thanks,</HelloOoo>
          <HelloOoo>ooo Teams</HelloOoo>
        </HelloOooAContainer1>
      </HelloOooAContainer>
      <ViewKeywordInner alt="" src="/rectangle-2770.svg" />
      <AttachFileIcon alt="" src="/attach-file1.svg" />
      <Attach1DocumentationFor>
        [attach1] Documentation for request.pdf
      </Attach1DocumentationFor>
      <JamesMailcom>송신인: james @ mail.com</JamesMailcom>
      <AbcdeCompany>수신인: abcde company @ mail.com</AbcdeCompany>
      <ArrowBackIosIcon alt="" src="/arrow-back-ios.svg" />
      <RectangleDiv />
      <CloseIcon alt="" src="/close.svg" />
      <Div1>해당 이메일의 키워드 목록입니다.</Div1>
      <List onClick={onListContainerClick}>
        <ItemParent>
          <Item>
            <Checkbox>
              <BoundsIcon alt="" src="/bounds.svg" />
            </Checkbox>
          </Item>
          <Content>
            <Overline>overline</Overline>
            <Title>verification</Title>
            <Subtitle />
          </Content>
        </ItemParent>
      </List>
      <List1>
        <ItemParent>
          <Item>
            <Checkbox>
              <BoundsIcon alt="" src="/bounds.svg" />
            </Checkbox>
          </Item>
          <Content>
            <Overline>overline</Overline>
            <Title>device</Title>
            <Subtitle />
          </Content>
        </ItemParent>
      </List1>
      <List2>
        <ItemParent>
          <Item>
            <Checkbox>
              <BoundsIcon alt="" src="/bounds.svg" />
            </Checkbox>
          </Item>
          <Content>
            <Overline>overline</Overline>
            <Title>unrecognized</Title>
            <Subtitle />
          </Content>
        </ItemParent>
      </List2>
    </ViewKeywordRoot>
  );
};

export default ViewKeyword;
