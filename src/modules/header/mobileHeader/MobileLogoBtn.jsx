import styled from "styled-components";
import BtnOpenCloseMenu from "./BtnOpenCloseMenu";
import LogoAndTittle from "../../../shared/LogoAndTittle";

const MobileLogoBtn = ({ open, children }) => {
  return (
    <>
      <Wrapper>
        <BtnOpenCloseMenu open={open}>{children}</BtnOpenCloseMenu>
        <LogoAndTittle />
      </Wrapper>
    </>
  );
};

export default MobileLogoBtn;

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 40px;
  align-items: baseline;
`;
