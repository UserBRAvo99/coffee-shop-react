import { useContext } from "react";
import { List } from "./aboutProduct.style";

import SectionPromotion from "./sectionPromotion/SectionPromotion";
import SectionAboutUs from "./sectionAboutUs/SectionAboutUs";
import { ShopContext } from "../../../context/ShopProvider";

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
