import Hero from "./hero/Hero";
import AboutProduct from "./aboutProduct/AboutProduct";
import Products from "./product/Products";
import FooterShop from "./footer/Footer";

export const Main = () => {
  return (
    <main>
      <Hero className="container" />
      <AboutProduct />
      <Products className="container" />
      <FooterShop />
    </main>
  );
};
