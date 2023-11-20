// основні одинакові стилі для обох продуктів

import styled from "styled-components";
import { fonts, theme } from "../../../utils/theme";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1023px) {
    flex-direction: row;
  }
`;

export const WrapperItem = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
    flex-direction: ${(props) => props.$reverse};
    gap: 103px;
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
  margin-bottom: 30px;
  svg {
    position: absolute;
    top: ${(props) => props.$up};
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 36px);
    height: 110%;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h3`
  color: ${theme.color.black};
  font-family: ${fonts.josefin};
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 20px;
`;

export const Info = styled.p`
  color: ${theme.color.grey};
`;
