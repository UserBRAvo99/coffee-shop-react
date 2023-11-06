import styled from "styled-components";
import { theme } from "../utils/theme";

const BtnGreen = ({ height, width, children }) => {
  return (
    <Btn height={height} width={width}>
      {children}
    </Btn>
  );
};

export default BtnGreen;

const Btn = styled.button`
  display: block;

  padding: ${(props) => props.height} ${(props) => props.width};
  align-items: center;
  color: ${theme.color.white};
  background-color: ${theme.color.darkGreen};
  border: transparent;
  border-radius: 5px;
`;
