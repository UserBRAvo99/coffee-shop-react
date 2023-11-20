import { useContext } from "react";
import { List } from "./aboutProduct.style";
import { ShopContext } from "../../../context/ShopProvider";
import SectionAboutUs from "./sectionAboutUs/sectionAboutUs";
import SectionPromotion from "./sectionPromotion/SectionPromotion";

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
