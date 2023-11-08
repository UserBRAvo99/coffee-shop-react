import styled from "styled-components";
import OurAddressFooter from "../../../shared/OurAddressFooter";
import { fonts, theme } from "../../../utils/theme";
import BtnGreen from "../../../shared/BtnGreen";
import { ArrowSvg } from "../../../shared/ArrowSvg";

const FooterShop = () => {
  return (
    <Footer className="container">
      <List>
        <Item>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d775665.1977575189!2d-74.41089437890638!3d40.587031695247866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1699386649348!5m2!1suk!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </Item>
        <Item>
          <WrapperAddress>
            <Title>Our address</Title>
            <OurAddressFooter number="2" />
            <BtnGreen height="16px" width="18px" color={theme.color.white}>
              <SpanBtn>Order Here</SpanBtn>
              <ArrowSvg />
            </BtnGreen>
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
`;

const Item = styled.li``;

const Iframe = styled.iframe`
  width: 100%;
  height: 300px;
  filter: grayscale(100%);
  filter: gray;
  border: 0;
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
