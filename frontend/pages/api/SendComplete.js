import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
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
  height: 5.38%;
  width: 9.38%;
  top: 89.52%;
  right: 2.55%;
  bottom: 5.11%;
  left: 88.07%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Component6 = styled.div`
  position: absolute;
  height: 5.38%;
  width: 9.38%;
  top: 89.52%;
  right: 13.02%;
  bottom: 5.11%;
  left: 77.6%;
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  color: #88a788;
`;
const Div1 = styled.div`
  position: absolute;
  height: 4.39%;
  width: 21.25%;
  top: 10.75%;
  left: 2.34%;
  font-size: 32px;
  color: #000;
  text-align: left;
  display: inline-block;
`;
const Placehoder = styled.div`
  align-self: stretch;
  position: relative;
`;
const InputContent = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Top1 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(239, 241, 249, 0.6);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  box-sizing: border-box;
`;
const Input = styled.div`
  width: 510.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Label2 = styled.div`
  position: relative;
`;
const Bottom = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 4px;
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
  gap: 16px;
`;
const Top2 = styled.div`
  align-self: stretch;
  border-radius: 8px;
  background-color: rgba(239, 241, 249, 0.6);
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 16px;
  color: #abafb1;
`;
const BottomParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Select = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  color: #5e6366;
`;
const Formcontainer = styled.div`
  position: absolute;
  height: 11.11%;
  width: 92.03%;
  top: 22.67%;
  right: 5.63%;
  bottom: 66.22%;
  left: 2.34%;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  gap: 10px;
  text-align: left;
  font-size: 16px;
  color: #abafb1;
`;
const Select1 = styled.div`
  width: 511px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Formcontainer1 = styled.div`
  position: absolute;
  height: 12.28%;
  width: 92.03%;
  top: 43.1%;
  right: 5.63%;
  bottom: 44.62%;
  left: 2.34%;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  text-align: left;
  font-size: 12px;
  color: #5e6366;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 24px;
  color: #2b2f32;
`;
const Valid = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  color: #5e6366;
`;
const CheckIcon = styled.img`
  position: relative;
  border-radius: 500px;
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
  padding: 0px 16px 0px 0px;
  gap: 10px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 7.9px;
  background-color: #cfd3d4;
  width: 1px;
  height: 13.4px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 5.2px;
  left: 7.3px;
  background-color: #cfd3d4;
  width: 1px;
  height: 6.2px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 7.8px;
  left: 8.3px;
  background-color: #cfd3d4;
  width: 1px;
  height: 2.3px;
  transform: rotate(35.93deg);
  transform-origin: 0 0;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 9.1px;
  height: 11.5px;
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
  border-radius: 8px;
  border: 1px solid #32936f;
  box-sizing: border-box;
  width: 838px;
  height: 253px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 2px 2px 16px;
  text-align: left;
`;
const ContentGroup = styled.div`
  align-self: stretch;
  flex: 1;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const Component4 = styled.div`
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  width: 180px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  cursor: pointer;
`;
const Component51 = styled.div`
  border-radius: 12px;
  background-color: #88a788;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
`;
const Buttoncontainer1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 44px;
`;
const Inputcontainer = styled.div`
  align-self: stretch;
  height: 58px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  color: #88a788;
`;
const Innercontainer = styled.div`
  flex: 1;
  height: 713px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 500px;
`;
const Formcontainer2 = styled.div`
  position: absolute;
  height: 72.94%;
  width: 48.13%;
  top: 15.14%;
  right: 23.75%;
  bottom: 11.92%;
  left: 28.13%;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  font-size: 12px;
  color: #32936f;
`;
const Div = styled.div`
  position: relative;
  width: 1920px;
  height: 1116px;
  z-index: 0;
`;
const Buttoncontainer2 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 646px;
  left: 914px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  z-index: 1;
`;
const CheckBoxIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 466px;
  left: 805px;
  width: 46px;
  height: 46px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 2;
`;
const Div3 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 415px;
  left: 592px;
  font-size: 32px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 869px;
  height: 147px;
  flex-shrink: 0;
  z-index: 3;
`;
const SendCompleteRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-family: Inter;
`;

const SendComplete = () => {
  const navigate = useNavigate();

  const onComponent4ContainerClick = useCallback(() => {
    navigate("/write-home");
  }, [navigate]);

  const onComponent5Container1Click = useCallback(() => {
    navigate("/send-complete");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/write-home");
  }, [navigate]);

  return (
    <SendCompleteRoot>
      <Div>
        <NewIcon alt="" src="/new.svg" />
        <Buttoncontainer>
          <Component5>
            <Label>전송</Label>
          </Component5>
        </Buttoncontainer>
        <Component6>
          <Label>취소</Label>
        </Component6>
        <Div1>메일을 전송해보세요.</Div1>
        <Formcontainer>
          <Input>
            <Top1>
              <InputContent>
                <Placehoder>수신인 이름을 입력하세요.</Placehoder>
              </InputContent>
            </Top1>
          </Input>
          <Input>
            <Top1>
              <InputContent>
                <Placehoder>수신인 이메일을 입력하세요.</Placehoder>
              </InputContent>
            </Top1>
          </Input>
          <Select>
            <BottomParent>
              <Bottom>
                <Label2 />
              </Bottom>
              <Top2>
                <InputContent2>
                  <InputContent>
                    <Placehoder>수신인과의 관계를 선택하세요.</Placehoder>
                  </InputContent>
                  <FichevronDownIcon alt="" src="/fichevrondown.svg" />
                </InputContent2>
              </Top2>
            </BottomParent>
          </Select>
        </Formcontainer>
        <Formcontainer1>
          <Select1>
            <BottomParent>
              <Bottom>
                <Label2 />
              </Bottom>
              <Top2>
                <InputContent2>
                  <InputContent>
                    <Placehoder>메일 작성 스타일을 선택하세요.</Placehoder>
                  </InputContent>
                  <FichevronDownIcon alt="" src="/fichevrondown.svg" />
                </InputContent2>
              </Top2>
            </BottomParent>
          </Select1>
        </Formcontainer1>
        <NewIcon alt="" src="/rectangle-2760.svg" />
        <Formcontainer2>
          <Innercontainer>
            <Heading>
              <Label2 />
            </Heading>
            <Input2>
              <ContentParent>
                <Content>
                  <InputContent>
                    <Placehoder>프롬프터 확인</Placehoder>
                    <Valid />
                  </InputContent>
                  <CheckIcon alt="" src="/check.svg" />
                </Content>
                <RectangleParent>
                  <GroupChild />
                  <GroupItem />
                  <GroupInner />
                </RectangleParent>
              </ContentParent>
            </Input2>
            <Input2>
              <ContentGroup>
                <Content>
                  <InputContent>
                    <Placehoder>생성된 이메일 확인 및 수정</Placehoder>
                    <Valid />
                  </InputContent>
                  <CheckIcon alt="" src="/check.svg" />
                </Content>
                <RectangleParent>
                  <GroupChild />
                  <GroupItem />
                  <GroupInner />
                </RectangleParent>
              </ContentGroup>
            </Input2>
            <Inputcontainer>
              <Buttoncontainer1>
                <Component4 onClick={onComponent4ContainerClick}>
                  <Label>취소</Label>
                </Component4>
                <Component51 onClick={onComponent5Container1Click}>
                  <Label>확인</Label>
                </Component51>
              </Buttoncontainer1>
            </Inputcontainer>
          </Innercontainer>
        </Formcontainer2>
      </Div>
      <Buttoncontainer2 onClick={onButtonContainer2Click}>
        <Component5>
          <Label>확인</Label>
        </Component5>
      </Buttoncontainer2>
      <CheckBoxIcon alt="" src="/check-box.svg" />
      <Div3>전송이 완료되었습니다.</Div3>
    </SendCompleteRoot>
  );
};

export default SendComplete;
