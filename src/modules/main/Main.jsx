import Hero from "./hero/Hero";
import AboutProduct from "./aboutProduct/AboutProduct";
import Products from "./product/Products";

export const Main = () => {
  return (
    <main>
      <Hero className="container" />
      <AboutProduct />
      <Products className="container" />
    </main>
  );
};
