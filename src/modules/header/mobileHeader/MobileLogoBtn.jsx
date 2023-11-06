import styled from "styled-components";
import Logo from "../../../shared/Logo";
import { fonts } from "../../../utils/theme";
import BtnOpenCloseMenu from "./BtnOpenCloseMenu";

const MobileLogoBtn = ({ open, children }) => {
  return (
    <>
      <Wrapper>
        <BtnOpenCloseMenu open={open}>{children}</BtnOpenCloseMenu>
        <WrapperTittle>
          <Logo />
          <Tittle>Samwayle</Tittle>
        </WrapperTittle>
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

const WrapperTittle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  & svg {
    width: 45px;
    height: 28px;
  }
`;

const Tittle = styled.h1`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 28px;
  font-weight: ${fonts.cedarville.fontWeight};
`;
