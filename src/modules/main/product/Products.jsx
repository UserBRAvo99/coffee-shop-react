import styled from "styled-components";
import { fonts, theme } from "../../../utils/theme";
import BtnGreen from "../../../shared/BtnGreen";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import { ourAddress } from "../../../data/dataAboutProducts";

const Products = () => {
  const { numberOfProducts, isMobileScreen, isTabletScreenMin, openModal } =
    useContext(ShopContext);
  let number = 4;
  if (isMobileScreen) number = 3;
  if (isTabletScreenMin) number = 4;
  return (
    <Section className="container" id="shop">
      <List>
        {numberOfProducts(number).map((coffee) => {
          return (
            <Item key={coffee.drink}>
              <Title>{coffee.drink}</Title>
              <Info>{coffee.info}</Info>
              <div onClick={() => openModal(ourAddress)}>
                <BtnGreen
                  height={"15px"}
                  width={"49px"}
                  color={theme.color.darkGreen}
                >
                  <Span>Add to cart</Span>
                </BtnGreen>
              </div>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

export default Products;

const Section = styled.section``;

const List = styled.ul`
  padding: 96px 0;
  @media screen and (min-width: 449px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 131px 0;
  }
  @media screen and (min-width: 900px) {
    justify-content: space-around;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 44px 47px 47px 47px;
  border-radius: 25px;
  background: ${theme.color.white};
  box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
  margin-bottom: 30px;
  & button {
    margin-top: auto;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 449px) {
    width: 400px;
  }
  @media screen and (min-width: 767px) {
    width: calc(50% - 20px);
    &:nth-child(n + 1) {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 900px) {
    width: 400px;
    &:nth-child(n + 1) {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h3`
  text-align: center;
  color: ${theme.color.black};
  font-family: ${fonts.josefin.fontFamily};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const Info = styled.p`
  color: ${theme.color.grey};
  text-align: center;
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 19px;
  line-height: 36px;
  letter-spacing: 0.019px;
  margin-bottom: 36px;
`;
const Span = styled.span`
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 20px;
`;
