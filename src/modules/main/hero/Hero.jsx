import styled from "styled-components";
import BtnGreen from "../../../shared/BtnGreen";
import { ArrowSvg } from "../../../shared/ArrowSvg";
import { fonts } from "../../../utils/theme";

const Hero = () => {
  return (
    <Wrapper className="container">
      <Slogan>Drink coffee, enjoy with Samwyle</Slogan>
      <Title>Coffee Shop</Title>
      <BtnGreen height={"16px"} width={"18px"}>
        <Span>Order Here</Span>
        <ArrowSvg />
      </BtnGreen>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 120px 0;
`;

const Slogan = styled.p`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 19px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-family: ${fonts.josefin.fontFamily};
  font-size: 54px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Span = styled.span`
  margin-right: 40px;
  font-family: ${fonts.josefin.fontFamily};
  font-family: Josefin Sans;
  font-size: 16px;
  font-weight: 400;
`;
