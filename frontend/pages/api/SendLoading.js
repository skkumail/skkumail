import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SendLoadingChild = styled.img`
  position: relative;
  width: 1920px;
  height: 1080px;
  z-index: 0;
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
  top: 977px;
  left: 1691px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: center;
  color: #fff;
`;
const Component51 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 977px;
  left: 1490px;
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  z-index: 2;
  text-align: center;
  color: #88a788;
`;
const Div = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 126px;
  left: 45px;
  font-size: 32px;
  display: inline-block;
  width: 408px;
  height: 48px;
  flex-shrink: 0;
  z-index: 3;
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
  margin: 0 !important;
  position: absolute;
  top: 255px;
  left: 45px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  gap: 10px;
  z-index: 4;
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
  margin: 0 !important;
  position: absolute;
  top: 475px;
  left: 45px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  z-index: 5;
  font-size: 12px;
  color: #5e6366;
`;
const Step2 = styled.span`
  font-weight: 500;
`;
const Of4 = styled.span`
  color: #84898c;
`;
const Step2OfContainer = styled.div`
  position: relative;
  display: none;
`;
const Bg = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  border-radius: 20px;
  background-color: #fff;
  width: 993px;
  height: 6px;
`;
const Bar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  background-color: #88a788;
  width: 496.5px;
  height: 12px;
`;
const Barcontainer = styled.div`
  align-self: stretch;
  position: relative;
  height: 12px;
`;
const Stepper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 653px;
  left: 464px;
  width: 993px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  z-index: 6;
  text-align: right;
  font-size: 14px;
  color: #5570f1;
`;
const Div1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 680px;
  left: 893px;
  font-size: 12px;
  line-height: 100%;
  font-family: "Secular One";
  display: flex;
  align-items: center;
  width: 101px;
  height: 38px;
  flex-shrink: 0;
  z-index: 7;
`;
const SendLoadingRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  text-align: left;
  font-size: 20px;
  color: #000;
  font-family: Inter;
`;

const SendLoading = () => {
  const navigate = useNavigate();

  const onSendLoadingContainerClick = useCallback(() => {
    navigate("/mail-content-view");
  }, [navigate]);

  return (
    <SendLoadingRoot onClick={onSendLoadingContainerClick}>
      <SendLoadingChild alt="" src="/rectangle-2759.svg" />
      <Buttoncontainer>
        <Component5>
          <Label>전송</Label>
        </Component5>
      </Buttoncontainer>
      <Component51>
        <Label>취소</Label>
      </Component51>
      <Div>메일을 전송해보세요.</Div>
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
      <Stepper>
        <Step2OfContainer>
          <Step2>Step 2</Step2>
          <Of4> of 4</Of4>
        </Step2OfContainer>
        <Barcontainer>
          <Bg />
          <Bar />
        </Barcontainer>
      </Stepper>
      <Div1>메일 생성 중입니다.</Div1>
    </SendLoadingRoot>
  );
};

export default SendLoading;
