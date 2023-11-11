import styled from "styled-components";
import BtnGreen from "../../../shared/BtnGreen";
import { ArrowSvg } from "../../../shared/ArrowSvg";
import { fonts, theme } from "../../../utils/theme";
import HeroDesktopPart from "./heroDesktopPart/HeroDesktopPart";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

const Hero = () => {
  const { isNoteScreen } = useContext(ShopContext);
  return (
    <HeroWrapper className="container">
      <Wrapper id="home">
        <Slogan>Drink coffee, enjoy with Samwyle</Slogan>
        <Title>Coffee Shop</Title>
        <BtnGreen height={"16px"} width={"18px"} color={theme.color.darkGreen}>
          <Span>Order Here</Span>
          <ArrowSvg color={theme.color.white} />
        </BtnGreen>
      </Wrapper>
      {isNoteScreen && <HeroDesktopPart />}
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 120px 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
`;

const Slogan = styled.p`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 19px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${fonts.josefin.fontFamily};
  font-size: 54px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Span = styled.span`
  margin-right: 40px;
  font-family: ${fonts.josefin.fontFamily};
  font-size: 16px;
`;
