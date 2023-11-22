import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import { theme } from "../../../utils/theme";
import BtnGreen from "../../../shared/BtnGreen";
import { ourAddress } from "../../../data/dataAboutProducts";

import { Info, Item, List, Span, Title } from "./Products.style";

const Products = () => {
  const { numberOfProducts, isMobileScreen, isTabletScreenMin, openModal } =
    useContext(ShopContext);
  let number = 4;
  if (isMobileScreen) number = 3;
  if (isTabletScreenMin) number = 4;
  return (
    <section className="container" id="shop">
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
                  margin={true}
                >
                  <Span>Add to cart</Span>
                </BtnGreen>
              </div>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

export default Products;
