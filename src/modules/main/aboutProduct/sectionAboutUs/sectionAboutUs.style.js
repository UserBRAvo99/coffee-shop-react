import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";

export const WrapperImgDesk = styled.div`
  position: relative;
  min-width: 380px;
  height: 287px;
  background-color: ${(props) => props.$color};
  & svg {
    position: absolute;
    top: 78px;
    left: 28px;
    width: 365px;
    height: 263px;
  }
  & span {
    position: absolute;
    top: 4px;
    left: -46px;
    transform: rotate(-90deg);
    color: ${theme.color.black};
    font-family: ${fonts.cedarville.fontFamily};
    font-size: 28px;
  }
`;
