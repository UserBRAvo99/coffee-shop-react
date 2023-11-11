import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";
import { ArrowSvg } from "../../../../shared/ArrowSvg";
import CoffeeMakerHeroSvg from "../../../../shared/CoffeeMakerHeroSvg";

const HeroDesktopPart = () => {
  return (
    <div>
      <List>
        <ArrowBox>
          <ArrowSvg color={theme.color.black} />
        </ArrowBox>
        <CoffeeBox>
          <CoffeeMakerHeroSvg />
          <SpanCoffeeBox>Coffee</SpanCoffeeBox>
        </CoffeeBox>
        <SocBox></SocBox>
      </List>
    </div>
  );
};

export default HeroDesktopPart;

const List = styled.ul`
  display: flex;
  align-items: end;
`;

const ArrowBox = styled.li`
  position: relative;
  width: 159px;
  height: 157px;
  background-color: ${theme.color.lightGreen};
  opacity: 0.4;
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
  /* font-family: ${fonts.cedarville}; */
  font-family: Cedarville Cursive;

  font-size: 72px;
`;

const SocBox = styled.li`
  transform: rotate(-90deg);
`;
