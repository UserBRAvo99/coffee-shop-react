import styled from "styled-components";
import dataAboutProduct from "../../../data/dataAboutProducts";

const AboutProduct = () => {
  return (
    <Section>
      <List>
        {dataAboutProduct.map((about) => {
          return (
            <Item key={about.title}>
              <WrapperImg
                height={about.img.height}
                color={about.color}
                up={about.img.up}
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
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  margin-bottom: 30px;
  svg {
    position: absolute;
    top: ${(props) => (props.up ? props.up : "50%")};
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
  color: #000;

  font-family: Josefin Sans;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

const Info = styled.p`
  color: #444a4a;

  font-family: Alegreya Sans;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 189.474% */
  letter-spacing: 0.019px;
`;
