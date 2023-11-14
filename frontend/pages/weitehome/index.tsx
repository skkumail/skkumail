import { FunctionComponent } from "react";
import styled from "styled-components";

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
  display: inline-block;
  width: 408px;
  height: 48px;
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
const Label = styled.div`
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
  top: 189px;
  left: 45px;
  border-radius: 20px;
  background-color: #fff;
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
  top: 335px;
  left: 45px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 37px 43px;
  font-size: 12px;
  color: #5e6366;
`;
const Label2 = styled.div`
  flex: 1;
  position: relative;
`;
const Component8 = styled.div`
  position: absolute;
  top: 969px;
  left: 1679px;
  border-radius: 12px;
  border: 2px solid #88a788;
  box-sizing: border-box;
  width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 17px 16px;
  text-align: center;
  font-size: 20px;
  color: #88a788;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  display: none;
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
  width: 1681px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px 2px 2px 16px;
  font-size: 12px;
  color: #32936f;
`;
const Innercontainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
const Formcontainer2 = styled.div`
  position: absolute;
  top: 510px;
  left: 56px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #dde2e6;
  box-sizing: border-box;
  width: 1767px;
  height: 346px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 31px 43px 201px;
  font-size: 24px;
  color: #2b2f32;
`;
const WriteHomeRoot = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  text-align: left;
  font-size: 32px;
  color: #000;
  font-family: Inter;
`;

const WriteHome: FunctionComponent = () => {
  return (
    <WriteHomeRoot>
      <NewIcon alt="" src="/page-layout.svg" />
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
              <Label />
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
              <Label />
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
      <Component8>
        <Label2>작성 요청</Label2>
      </Component8>
      <Formcontainer2>
        <Innercontainer>
          <Heading>
            <Label>핵심 내용 작성</Label>
          </Heading>
          <Input2>
            <ContentParent>
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
            </ContentParent>
          </Input2>
        </Innercontainer>
      </Formcontainer2>
    </WriteHomeRoot>
  );
};

export default WriteHome;
