import styled from "styled-components";
import { theme } from "../../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
`;

export const Iframe = styled.iframe`
  position: relative;
  width: 100%;
  height: 300px;
  filter: grayscale(100%);
  filter: gray;
  border: 0;
  @media screen and (min-width: 1439px) {
    max-width: 646px;
    height: 351px;
  }
`;

export const Span = styled.span`
  display: none;
  @media screen and (min-width: 1439px) {
    position: absolute;
    display: block;
    right: 27px;
    top: 15px;
    transform: rotate(-90deg);
    color: ${theme.color.black};
    font-family: Cedarville Cursive;
    font-size: 28px;
    font-weight: 400;
  }
`;
