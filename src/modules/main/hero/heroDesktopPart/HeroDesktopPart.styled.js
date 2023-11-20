import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";

export const List = styled.ul`
  display: flex;
  align-items: end;
  @media screen and (min-width: 1023px) {
    padding-bottom: 197px;
  }
`;

export const ArrowBox = styled.li`
  position: relative;
  width: 159px;
  height: 157px;
  background-color: rgba(227, 235, 231, 0.4);
  cursor: pointer;
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const CoffeeBox = styled.li`
  position: relative;
  width: 410px;
  height: 466px;
  background-color: ${theme.color.lightGreen};
  & svg {
    position: absolute;
    top: 140px;
    right: 30px;
  }
  & span {
    position: absolute;
    top: 380px;
    right: 90px;
  }
`;

export const SpanCoffeeBox = styled.span`
  color: ${theme.color.grey};
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 72px;
`;

export const SocBox = styled.li`
  display: flex;
  width: 72px;
  position: relative;
  transform: rotate(-90deg);
`;
