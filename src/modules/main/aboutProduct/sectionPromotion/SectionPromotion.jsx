import { useContext } from "react";
import {
  dataAboutProduct,
  ourAddress,
} from "../../../../data/dataAboutProducts";
import BtnGreen from "../../../../shared/BtnGreen";
import { theme } from "../../../../utils/theme";
import {
  Info,
  Item,
  Title,
  WrapperImg,
  WrapperInfo,
  WrapperItem,
} from "../generalStylesForAboutProducts.style";

import { Span, WrapperBtn, WrapperImgDesk } from "./sectionPromotion.style";

import { ShopContext } from "../../../../context/ShopProvider";

const SectionPromotion = ({ media }) => {
  const { openModal, isDeskScreen } = useContext(ShopContext);
  return (
    <Item id="promotion">
      {media && (
        <WrapperImg
          $height={dataAboutProduct[1].img.height}
          $color={dataAboutProduct[1].color}
          $up={dataAboutProduct[1].img.up}
        >
          {dataAboutProduct[1].img.svg}
        </WrapperImg>
      )}
      <>
        <WrapperInfo className="container">
          <WrapperItem $reverse={"row-reverse"}>
            {!media && (
              <WrapperImgDesk $color={dataAboutProduct[1].color}>
                {dataAboutProduct[1].img.svg}
                <span>Promotion</span>
              </WrapperImgDesk>
            )}
            <div>
              <Title>{dataAboutProduct[1].title}</Title>
              {dataAboutProduct[1].info.map((e) => {
                return <Info key={e.length}>{e}</Info>;
              })}
              {isDeskScreen && (
                <WrapperBtn onClick={() => openModal(ourAddress)}>
                  <BtnGreen
                    height={"15px"}
                    width={"49px"}
                    color={theme.color.darkGreen}
                  >
                    <Span>Order now</Span>
                  </BtnGreen>
                </WrapperBtn>
              )}
            </div>
          </WrapperItem>
        </WrapperInfo>
      </>
    </Item>
  );
};

export default SectionPromotion;
