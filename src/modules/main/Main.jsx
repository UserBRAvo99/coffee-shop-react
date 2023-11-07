import Hero from "./hero/Hero";
import AboutProduct from "./aboutProduct/AboutProduct";
import Products from "./product/Products";
import Footer from "./footer/Footer";

export const Main = () => {
  return (
    <main>
      <Hero className="container" />
      <AboutProduct />
      <Products className="container" />
      <Footer />
    </main>
  );
};
