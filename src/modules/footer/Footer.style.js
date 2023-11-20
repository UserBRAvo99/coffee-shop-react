import styled, { css } from "styled-components";
import { fonts, theme } from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  z-index: 10;
  padding: 0 18px 0 18px;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.color.white};
  height: 100vh;
  width: 100vw;

  transform: translate(0, -100vh);
  transition: 500ms ease-in-out;
  ${(props) => {
    if (props.$isOpen) {
      return css`
        transform: translate(0, 0);
        transition: 500ms ease-in-out;
      `;
    }
  }}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0 0 0;
  margin: 0 auto;
`;
export const Item = styled.li`
  display: flex;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.color.black};
    font-family: ${fonts.josefin.fontFamily};
    font-size: 36px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const DarkLine = styled.div`
  width: 134px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${theme.color.black};
  margin: 0 auto;
`;
