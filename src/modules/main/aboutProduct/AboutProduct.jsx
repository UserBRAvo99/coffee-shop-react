import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import SectionAboutUs from "./sectionAboutUs/sectionAboutUs";
import SectionPromotion from "./sectionPromotion/SectionPromotion";
import { List } from "./aboutProduct.style";

const AboutProduct = () => {
  const { isNoteScreenProducts } = useContext(ShopContext);
  return (
    <section id="about">
      <List>
        <SectionAboutUs media={isNoteScreenProducts} />
        <SectionPromotion media={isNoteScreenProducts} />
      </List>
    </section>
  );
};

export default AboutProduct;
