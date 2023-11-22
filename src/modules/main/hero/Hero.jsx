import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import BtnTemplate from "../../../shared/btnTemplate/btnTemplate";
import HeroDesktopPart from "./heroDesktopPart/HeroDesktopPart";
import { ArrowSvg } from "../../../shared/img/ArrowSvg";
import { ourAddress } from "../../../assets/data/dataAboutProducts";

import { HeroWrapper, Slogan, Span, Title, Wrapper } from "./Hero.styled";
import { theme } from "../../../utils/theme";

const Hero = () => {
  const { isNoteScreen, openModal } = useContext(ShopContext);
  return (
    <HeroWrapper className="container">
      <Wrapper id="home">
        <Slogan>Drink coffee, enjoy with Samwyle</Slogan>
        <Title>Coffee Shop</Title>
        <div onClick={() => openModal(ourAddress)}>
          <BtnTemplate
            height={"16px"}
            width={"18px"}
            color={theme.color.darkGreen}
          >
            <Span>Order Here</Span>
            <ArrowSvg color={theme.color.white} />
          </BtnTemplate>
        </div>
      </Wrapper>
      {isNoteScreen && <HeroDesktopPart />}
    </HeroWrapper>
  );
};

export default Hero;
