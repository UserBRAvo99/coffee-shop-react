import styled from "styled-components";

import { theme } from "../utils/theme";

const BtnGreen = ({ height, width, color, margin, children }) => {
  return (
    <Btn $height={height} $width={width} $color={color} $margin={margin}>
      {children}
    </Btn>
  );
};

export default BtnGreen;

const Btn = styled.button`
  display: block;
  cursor: pointer;
  padding: ${(props) => props.$height} ${(props) => props.$width};
  align-items: center;
  color: ${theme.color.white};
  background-color: ${(props) => props.$color};
  border: transparent;
  border-radius: 5px;
  margin: ${(props) => {
    // props.$margin ? "0 auto" : "0";
    if (props.$margin) {
      return "0 auto";
    } else {
      return "0";
    }
  }};
  transition: all 500ms ease 0s;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 25px 8px rgba(45, 99, 94, 0.5);
    transition: all 500ms ease 0s;
  }
`;
