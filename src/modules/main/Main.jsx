import Hero from "./hero/Hero";
import AboutProduct from "./aboutProduct/AboutProduct";
import Products from "./product/Products";
import FooterShop from "./footer/Footer";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";

export const Main = () => {
  const { isNoteScreenProducts } = useContext(ShopContext);
  return (
    <main>
      <Hero className="container" />
      <AboutProduct />
      {isNoteScreenProducts && <Products className="container" />}
      <FooterShop />
    </main>
  );
};
