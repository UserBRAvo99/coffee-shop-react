import styled from "styled-components";
import { dataAboutProduct } from "../../../data/dataAboutProducts";
import { fonts, theme } from "../../../utils/theme";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

const AboutProduct = () => {
  const { isNoteScreenProducts } = useContext(ShopContext);
  console.log(dataAboutProduct);
  return (
    <Section id="about">
      {/* <List>
        {dataAboutProduct.map((about) => {
          return (
            <Item key={about.title}>
              <WrapperImg
                $height={about.img.height}
                $color={about.color}
                $up={about.img.up}
              >
                {about.img.svg}
              </WrapperImg>
              <WrapperInfo className="container">
                <Title>{about.title}</Title>
                {about.info.map((e) => {
                  return <Info key={e.length}>{e}</Info>;
                })}
              </WrapperInfo>
            </Item>
          );
        })}
      </List> */}
      <List>
        <Item>
          {isNoteScreenProducts && (
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
              <WrapperItem>
                {!isNoteScreenProducts && (
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
      </List>
    </Section>
  );
};

export default AboutProduct;

const Section = styled.section``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1023px) {
    flex-direction: row;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
`;

const WrapperItem = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
    flex-direction: row;
    gap: 103px;
  }
`;

const WrapperImg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
  margin-bottom: 30px;
  svg {
    position: absolute;
    top: ${(props) => props.$up};
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 36px);
    height: 110%;
  }
  @media screen and (min-width: 1023px) {
  }
`;

const WrapperImgDesk = styled.div`
  position: relative;
  min-width: 380px;
  height: 287px;
  background-color: ${(props) => props.$color};
  & svg {
    position: absolute;
    top: 78px;
    left: 28px;
    width: 365px;
    height: 263px;
  }
  & span {
    position: absolute;
    top: 4px;
    left: -46px;
    transform: rotate(-90deg);
    color: ${theme.color.black};
    font-family: ${fonts.cedarville.fontFamily};
    font-size: 28px;
  }
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 1023px) {
  }
`;

const Title = styled.h3`
  color: ${theme.color.black};
  font-family: ${fonts.josefin};
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
`;

const Info = styled.p`
  color: ${theme.color.grey};
`;
