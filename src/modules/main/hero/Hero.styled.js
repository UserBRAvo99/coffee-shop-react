import styled from "styled-components";
import { fonts } from "../../../utils/theme";

export const HeroWrapper = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 120px 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
`;

export const Slogan = styled.p`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 19px;
  margin-bottom: 12px;
  @media screen and (min-width: 459px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 22px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1110px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.josefin.fontFamily};
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 30px;
  @media screen and (min-width: 374px) {
    font-size: 54px;
  }
  @media screen and (min-width: 459px) {
    font-size: 63px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 58px;
  }
  @media screen and (min-width: 1443px) {
    font-size: 63px;
  }
`;

export const Span = styled.span`
  margin-right: 40px;
  font-family: ${fonts.josefin.fontFamily};
  font-size: 16px;
`;
