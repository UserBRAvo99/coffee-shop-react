import { dataAboutProduct } from "../../../../data/dataAboutProducts";

import {
  Info,
  Item,
  Title,
  WrapperImg,
  WrapperInfo,
  WrapperItem,
} from "../generalStylesForAboutProducts.style";
import { WrapperImgDesk } from "./sectionAboutUs.style";

const SectionAboutUs = ({ media }) => {
  return (
    <Item>
      {media && (
        <WrapperImg
          $height={dataAboutProduct[0].img.height}
          $color={dataAboutProduct[0].color}
          $up={dataAboutProduct[0].img.up}
        >
          {dataAboutProduct[0].img.svg}
        </WrapperImg>
      )}
      <>
        <WrapperInfo className="container">
          <WrapperItem $reverse={"row"}>
            {!media && (
              <WrapperImgDesk $color={dataAboutProduct[0].color}>
                {dataAboutProduct[0].img.svg}
                <span>About us</span>
              </WrapperImgDesk>
            )}
            <div>
              <Title>{dataAboutProduct[0].title}</Title>
              {dataAboutProduct[0].info.map((e) => {
                return <Info key={e.length}>{e}</Info>;
              })}
            </div>
          </WrapperItem>
        </WrapperInfo>
      </>
    </Item>
  );
};

export default SectionAboutUs;
