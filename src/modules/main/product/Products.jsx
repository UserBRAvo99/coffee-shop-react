import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import { theme } from "../../../utils/theme";
import BtnTemplate from "../../../shared/btnTemplate/BtnTemplate";
import { ourAddress } from "../../../assets/data/dataAboutProducts";

import { Info, Item, List, Span, Title } from "./Products.style";

const Products = () => {
  const { numberOfProducts, openModal, number } = useContext(ShopContext);

  return (
    <section className="container" id="shop">
      <List>
        {numberOfProducts(number).map((coffee) => {
          return (
            <Item key={coffee.drink}>
              <Title>{coffee.drink}</Title>
              <Info>{coffee.info}</Info>
              <div onClick={() => openModal(ourAddress)}>
                <BtnTemplate
                  height={"15px"}
                  width={"49px"}
                  color={theme.color.darkGreen}
                  margin={true}
                >
                  <Span>Add to cart</Span>
                </BtnTemplate>
              </div>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

export default Products;
