import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.6);
  visibility: hidden;
  opacity: 0;
  transition: all 500ms ease 0s;
  ${(props) => {
    if (props.$isOpen) {
      return css`
        visibility: visible;
        opacity: 1;
        transition: all 500ms ease 0s;
      `;
    }
  }}
`;

export const WrapperModal = styled.div`
  position: absolute;
  width: 90%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 430px) {
    width: 400px;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`;

export const WrapperCloseBtn = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0 0;
`;
