import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";

import Hero from "./hero/Hero";
import AboutProduct from "./aboutProduct/AboutProduct";
import Products from "./product/Products";
import Slider from "./product/slider/Slider";

export const Main = () => {
  const { isNoteScreenProducts, isNoteScreen } = useContext(ShopContext);
  return (
    <main>
      <Hero className="container" />
      <AboutProduct />
      {isNoteScreenProducts && <Products className="container" />}
      {isNoteScreen && <Slider />}
    </main>
  );
};
