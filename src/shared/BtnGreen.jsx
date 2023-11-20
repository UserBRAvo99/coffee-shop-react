import styled from "styled-components";
import { theme } from "../utils/theme";

const BtnGreen = ({ height, width, color, margin, children }) => {
  return (
    <Btn height={height} width={width} color={color} margin={margin}>
      {children}
    </Btn>
  );
};

export default BtnGreen;

const Btn = styled.button`
  display: block;
  cursor: pointer;
  padding: ${(props) => props.height} ${(props) => props.width};
  align-items: center;
  color: ${theme.color.white};
  background-color: ${(props) => props.color};
  border: transparent;
  border-radius: 5px;
  margin: ${(props) => {
    if (props.margin) {
      return "0 auto";
    } else {
      return "0";
    }
  }};
`;
