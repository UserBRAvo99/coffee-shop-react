import { dataAboutProduct } from "../../../../data/dataAboutProducts";
import {
  Info,
  Item,
  Title,
  WrapperImg,
  WrapperInfo,
  WrapperItem,
} from "../generalStylesForAboutProducts.style";
import { WrapperImgDesk } from "./sectionPromotion.style";

const SectionPromotion = ({ media }) => {
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
            </div>
          </WrapperItem>
        </WrapperInfo>
      </>
    </Item>
  );
};

export default SectionPromotion;
