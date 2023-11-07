import styled from "styled-components";
import { fonts, theme } from "../../../utils/theme";
import BtnGreen from "../../../shared/BtnGreen";
import { dataDrink } from "../../../data/dataAboutProducts";

const Products = () => {
  return (
    <section className="container">
      <List>
        {dataDrink.map((coffee) => {
          return (
            <Item key={coffee.drink}>
              <Title>{coffee.drink}</Title>
              <Info>{coffee.info}</Info>
              <BtnGreen height={"15px"} width={"49px"}>
                <Span>Add to cart</Span>
              </BtnGreen>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

export default Products;

const List = styled.ul`
  padding-bottom: 30px;
  padding-top: 30px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 44px 47px 47px 47px;
  border-radius: 25px;
  background: ${theme.color.white};
  box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
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
  font-weight: 400;
  line-height: 36px; /* 189.474% */
  letter-spacing: 0.019px;
  margin-bottom: 36px;
`;
const Span = styled.span`
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 20px;
`;
