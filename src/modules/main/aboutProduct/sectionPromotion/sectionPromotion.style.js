import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";

export const WrapperImgDesk = styled.div`
  position: relative;
  min-width: 380px;
  height: 287px;
  background-color: ${(props) => props.$color};
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 236px;
    height: 320px;
  }
  & span {
    position: absolute;
    top: 16px;
    right: -48px;
    transform: rotate(-90deg);
    color: ${theme.color.black};
    font-family: ${fonts.cedarville.fontFamily};
    font-size: 28px;
  }
`;
