import styled from "styled-components";
import OurAddressFooter from "../../shared/OurAddressFooter";
import { fonts, theme } from "../../utils/theme";
import BtnGreen from "../../shared/BtnGreen";
import { ArrowSvg } from "../../shared/img/ArrowSvg";
import GoogleMap from "./googleMap/GoogleMap";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";

const FooterShop = () => {
  const {
    isTabletScreen,
    isNoteScreen,
    numberOfAddress,
    isMobileScreen,
    isTabletScreenMin,
  } = useContext(ShopContext);

  let number = 2;
  if (isMobileScreen) number = 2;
  if (isTabletScreenMin) number = 4;

  return (
    <Footer className="container">
      <List>
        <Item>
          <GoogleMap />
        </Item>
        {isNoteScreen && (
          <Item>
            <BlackLine></BlackLine>
          </Item>
        )}
        <Item>
          <WrapperAddress>
            <Title id="contacts">Our address</Title>
            <OurAddressFooter address={numberOfAddress(number)} />
            {isTabletScreen && (
              <BtnGreen height="16px" width="18px" color={theme.color.white}>
                <SpanBtn>See more address</SpanBtn>
                <ArrowSvg color={theme.color.black} />
              </BtnGreen>
            )}
          </WrapperAddress>
        </Item>
      </List>
      <Span>{"2020 (c) - Samwyle bandtitos"}</Span>
    </Footer>
  );
};

export default FooterShop;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const List = styled.ul`
  padding-bottom: 60px;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
  @media screen and (min-width: 1023px) {
    gap: 20px;
    align-items: start;
  }
`;

const Item = styled.li`
  @media screen and (min-width: 767px) {
    width: calc(50% - 20px);
    height: auto;
  }
  @media screen and (min-width: 1023px) {
    &:nth-child(1) {
      width: 100%;
      height: 351px;
    }
    &:nth-child(2) {
      width: 102px;
      margin-top: 32px;
      margin-bottom: auto;
    }
    &:nth-child(3) {
      margin-top: 20px;
    }
  }
`;

const BlackLine = styled.div`
  display: block;
  width: 102px;
  height: 2px;
  background-color: ${theme.color.grey};
`;

const WrapperAddress = styled.div`
  &:last-child {
    fill: #fff;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.17));
  }
`;

const Title = styled.h3`
  text-align: center;
  font-family: ${fonts.josefin};
  font-size: 32px;
  line-height: 45px;
  letter-spacing: 0.64px;
`;

const SpanBtn = styled.span`
  margin-right: 40px;
  font-family: ${fonts.josefin.fontFamily};
  font-size: 16px;
  color: ${theme.color.black};
`;

const Span = styled.span`
  color: ${theme.color.darkGreen};
  text-align: center;
  font-family: ${fonts.josefin};
  font-size: 14px;
  line-height: 36px;
  letter-spacing: 0.014px;
`;
