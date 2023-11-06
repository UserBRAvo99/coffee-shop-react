import styled from "styled-components";

const BtnOpenCloseMenu = ({ open, children }) => {
  return <Btn onClick={open}>{children}</Btn>;
};

export default BtnOpenCloseMenu;

const Btn = styled.button`
  display: flex;
  padding: 0;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 32px;
    height: 26px;
  }
`;
