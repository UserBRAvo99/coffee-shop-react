import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";
import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopProvider";
import SocFromHero from "../../../../shared/SocFromHero";
import CoffeeMakerHeroSvg from "../../../../shared/img/CoffeeMakerHeroSvg";
import { ArrowSvg } from "../../../../shared/img/ArrowSvg";
import { ourAddress } from "../../../../data/dataAboutProducts";

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

const List = styled.ul`
  display: flex;
  align-items: end;
  @media screen and (min-width: 1023px) {
    padding-bottom: 197px;
  }
`;

const ArrowBox = styled.li`
  position: relative;
  width: 159px;
  height: 157px;
  background-color: rgba(227, 235, 231, 0.4);
  cursor: pointer;
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const CoffeeBox = styled.li`
  position: relative;
  width: 410px;
  height: 466px;
  background-color: ${theme.color.lightGreen};
  & svg {
    position: absolute;
    top: 140px;
    right: 30px;
  }
  & span {
    position: absolute;
    top: 380px;
    right: 90px;
  }
`;

const SpanCoffeeBox = styled.span`
  color: ${theme.color.grey};
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 72px;
`;

const SocBox = styled.li`
  display: flex;
  width: 72px;
  position: relative;
  transform: rotate(-90deg);
`;
