import styled from "styled-components";
import BtnGreen from "../../../shared/BtnGreen";
import { fonts, theme } from "../../../utils/theme";
import HeroDesktopPart from "./heroDesktopPart/HeroDesktopPart";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import { ArrowSvg } from "../../../shared/img/ArrowSvg";
import { ourAddress } from "../../../data/dataAboutProducts";

const Hero = () => {
  const { isNoteScreen, openModal } = useContext(ShopContext);
  return (
    <HeroWrapper className="container">
      <Wrapper id="home">
        <Slogan>Drink coffee, enjoy with Samwyle</Slogan>
        <Title>Coffee Shop</Title>
        <div onClick={() => openModal(ourAddress)}>
          <BtnGreen
            height={"16px"}
            width={"18px"}
            color={theme.color.darkGreen}
          >
            <Span>Order Here</Span>
            <ArrowSvg color={theme.color.white} />
          </BtnGreen>
        </div>
      </Wrapper>
      {isNoteScreen && <HeroDesktopPart />}
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  display: flex;
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
  @media screen and (min-width: 459px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1110px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const Title = styled.h2`
  font-family: ${fonts.josefin.fontFamily};
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 30px;
  @media screen and (min-width: 374px) {
    font-size: 54px;
  }
  @media screen and (min-width: 459px) {
    font-size: 63px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 58px;
  }
  @media screen and (min-width: 1443px) {
    font-size: 63px;
  }
`;

const Span = styled.span`
  margin-right: 40px;
  font-family: ${fonts.josefin.fontFamily};
  font-size: 16px;
`;
