import styled from "styled-components";
import { theme } from "../utils/theme";

const BtnGreen = ({ height, width, color, children }) => {
  return (
    <Btn height={height} width={width} color={color}>
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
  margin: 0 auto;
`;
