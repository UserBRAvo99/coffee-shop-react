import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopProvider";
import LogoAndTittle from "../../shared/LogoAndTittle";
import { AiOutlineClose } from "react-icons/ai";

const Modal = () => {
  const { modalHandleClick, content } = useContext(ShopContext);
  console.log(content);
  return (
    <Wrapper onClick={modalHandleClick}>
      <WrapperModal>
        <WrapperLogo>
          <LogoAndTittle />
          <AiOutlineClose onClick={modalHandleClick} />
        </WrapperLogo>
        <ul>
          {content.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      </WrapperModal>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.6);
`;

const WrapperModal = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WrapperLogo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`;
