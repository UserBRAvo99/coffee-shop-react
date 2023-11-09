import styled from "styled-components";
import { dataAboutProduct } from "../../../data/dataAboutProducts";
import { fonts, theme } from "../../../utils/theme";

const AboutProduct = () => {
  return (
    <Section id="about">
      <List>
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
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h3`
  color: ${theme.color.black};
  font-family: ${fonts.josefin};
  font-size: 38px;
  font-weight: 700;
  text-align: center;
`;

const Info = styled.p`
  color: ${theme.color.grey};
`;
