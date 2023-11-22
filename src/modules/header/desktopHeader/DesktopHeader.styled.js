import styled from "styled-components";
import { fonts, theme } from "../../../utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0;
`;

export const WrapperNavBtn = styled.div`
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  width: 400px;
  align-items: end;
  justify-content: space-between;
  /* стилі для посилань */
  a {
    position: relative;
    cursor: pointer;
    /* ховер і фокус для смужки під посиланням */
    &:hover::before,
    &:focus::before {
      width: 100%;
      transition: all 500ms ease 0s;
    }
  }
  /* стилі для смужки/підкреслення під посиланням */
  a::before {
    content: "";
    transition: all 500ms ease 0s;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 1.5px;
    background-color: ${theme.color.darkGreen};
  }

  @media screen and (min-width: 1023px) {
    &:last-child {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 1439px) {
    width: 485px;
    &:last-child {
      margin-right: 90px;
    }
  }
`;

export const Item = styled.li`
  font-family: ${fonts.josefin};
  font-size: 16px;
  font-weight: 700;
`;
