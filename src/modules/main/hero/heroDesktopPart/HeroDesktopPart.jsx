import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopProvider";

import SocFromHero from "../../../../shared/SocFromHero";
import CoffeeMakerHeroSvg from "../../../../shared/img/CoffeeMakerHeroSvg";
import { ArrowSvg } from "../../../../shared/img/ArrowSvg";
import { ourAddress } from "../../../../assets/data/dataAboutProducts";

import { theme } from "../../../../utils/theme";
import {
  ArrowBox,
  CoffeeBox,
  List,
  SocBox,
  SpanCoffeeBox,
} from "./HeroDesktopPart.styled";

const HeroDesktopPart = () => {
  const { isDeskScreen, openModal } = useContext(ShopContext);
  return (
    <>
      <List>
        <ArrowBox onClick={() => openModal(ourAddress)}>
          <ArrowSvg color={theme.color.black} />
        </ArrowBox>
        <CoffeeBox>
          <CoffeeMakerHeroSvg />
          <SpanCoffeeBox>Coffee</SpanCoffeeBox>
        </CoffeeBox>
        {isDeskScreen && (
          <SocBox>
            <SocFromHero />
          </SocBox>
        )}
      </List>
    </>
  );
};

export default HeroDesktopPart;
