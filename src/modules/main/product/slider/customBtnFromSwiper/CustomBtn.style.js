import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 110%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Btn = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  /* transition: all 500ms ease 0s; */
  /* &:hover,
  &:focus {
    box-shadow: 0px 1px 25px 8px rgba(45, 99, 94, 0.5);
    transition: all 500ms ease 0s;
  } */
`;
