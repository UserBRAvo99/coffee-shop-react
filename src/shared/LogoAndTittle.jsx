import styled from "styled-components";
import { fonts } from "../utils/theme";
import Logo from "./img/Logo";

const LogoAndTittle = () => {
  return (
    <WrapperTittle>
      <Logo />
      <Tittle>Samwayle</Tittle>
    </WrapperTittle>
  );
};

export default LogoAndTittle;

const WrapperTittle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  & svg {
    width: 45px;
    height: 28px;
    @media screen and (min-width: 1023px) {
      width: 56px;
      height: 34px;
    }
  }
`;

const Tittle = styled.h1`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 28px;
  font-weight: ${fonts.cedarville.fontWeight};
  @media screen and (min-width: 1023px) {
    font-size: 32px;
  }
`;
