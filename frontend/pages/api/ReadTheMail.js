import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Icon = styled.img`
  position: relative;
  width: 1920px;
  height: 1080px;
  z-index: 0;
`;
const SendIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  height: 5.19%;
  width: 2.92%;
  top: 37.87%;
  right: 86.93%;
  bottom: 56.94%;
  left: 10.16%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const TitleOooReport = styled.b`
  position: absolute;
  margin: 0 !important;
  height: 8.61%;
  width: 49.95%;
  top: 22.13%;
  left: 8.91%;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;
const ReadTheMailChild = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 418.5px;
  left: 170.5px;
  border-top: 1px solid #000;
  box-sizing: border-box;
  width: 1578px;
  height: 1px;
  z-index: 3;
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
  margin: 0 !important;
  top: 503px;
  left: 179px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 1531px;
  height: 246px;
  flex-shrink: 0;
  z-index: 4;
`;
const Div = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 364px;
  left: 1442px;
  font-size: 15px;
  line-height: 100%;
  font-family: Roboto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 412px;
  height: 54px;
  flex-shrink: 0;
  z-index: 5;
`;
const ReadTheMailItem = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 439px;
  left: 176px;
  width: 1562px;
  height: 56px;
  z-index: 6;
`;
const AttachFileIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 456px;
  left: 188px;
  width: 26px;
  height: 26px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 7;
`;
const Attach1DocumentationFor = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 444px;
  left: 217px;
  font-size: 16px;
  line-height: 100%;
  font-family: Sen;
  display: flex;
  align-items: center;
  width: 1308px;
  height: 46px;
  flex-shrink: 0;
  z-index: 8;
`;
const DownloadIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 452px;
  left: 1695px;
  width: 30px;
  height: 29px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 9;
`;
const JamesMailcom = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 381px;
  left: 177px;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 338px;
  height: 23px;
  flex-shrink: 0;
  z-index: 10;
`;
const AbcdeCompany = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 342px;
  left: 177px;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  width: 338px;
  height: 25px;
  flex-shrink: 0;
  z-index: 11;
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
  margin: 0 !important;
  position: absolute;
  top: 909px;
  left: 1559px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 12;
  text-align: center;
  color: #fff;
`;
const Buttoncontainer1 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 909px;
  left: 1352px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 13;
  text-align: center;
  color: #fff;
`;
const ArrowBackIosIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 30px;
  left: 34px;
  width: 39px;
  height: 39px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  z-index: 14;
`;
const Component9 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 130px;
  left: 71px;
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  z-index: 15;
  text-align: center;
  color: #88a788;
`;
const ReadTheMailInner = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 235px;
  left: 130px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #88a788;
  box-sizing: border-box;
  width: 1666px;
  height: 638px;
  z-index: 16;
`;
const ReadTheMailRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
`;

const ReadTheMail = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/translate");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/view-keyword");
  }, [navigate]);

  const onArrowBackIosIconClick = useCallback(() => {
    navigate("/read-home");
  }, [navigate]);

  return (
    <ReadTheMailRoot>
      <Icon alt="" src="/page-layout.svg" />
      <SendIcon alt="" src="/send1.svg" />
      <TitleOooReport>Title: OOO Report ...</TitleOooReport>
      <ReadTheMailChild />
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
      <Div>2023년 00월 00일 00:00</Div>
      <ReadTheMailItem alt="" src="/rectangle-2767.svg" />
      <AttachFileIcon alt="" src="/attach-file.svg" />
      <Attach1DocumentationFor>
        [attach1] Documentation for request.pdf
      </Attach1DocumentationFor>
      <DownloadIcon alt="" src="/download.svg" />
      <JamesMailcom>송신인: james @ mail.com</JamesMailcom>
      <AbcdeCompany>수신인: abcde company @ mail.com</AbcdeCompany>
      <Buttoncontainer onClick={onButtonContainerClick}>
        <Component5>
          <Label>번역</Label>
        </Component5>
      </Buttoncontainer>
      <Buttoncontainer1 onClick={onButtonContainer1Click}>
        <Component5>
          <Label>키워드 보기</Label>
        </Component5>
      </Buttoncontainer1>
      <ArrowBackIosIcon
        alt=""
        src="/arrow-back-ios.svg"
        onClick={onArrowBackIosIconClick}
      />
      <Component9>
        <Label>목록 돌아가기</Label>
      </Component9>
      <ReadTheMailInner />
    </ReadTheMailRoot>
  );
};

export default ReadTheMail;
