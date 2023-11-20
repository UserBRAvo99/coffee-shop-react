import { useContext } from "react";
import { ShopContext } from "../../context/ShopProvider";
import LogoAndTittle from "../../shared/LogoAndTittle";
import { AiOutlineClose } from "react-icons/ai";
import SocIcons from "../../shared/SocIconsForMobileMenu";
import {
  List,
  Wrapper,
  WrapperCloseBtn,
  WrapperLogo,
  WrapperModal,
} from "./Modal.style";

const Modal = () => {
  const { modalHandleClick, content, isOpenModal } = useContext(ShopContext);
  // console.log(content);
  return (
    <Wrapper onClick={modalHandleClick} $isOpen={isOpenModal}>
      <WrapperModal>
        <WrapperLogo>
          <LogoAndTittle />
          <WrapperCloseBtn>
            <AiOutlineClose onClick={modalHandleClick} />
          </WrapperCloseBtn>
        </WrapperLogo>
        <List>
          {content.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </List>
        <SocIcons />
      </WrapperModal>
    </Wrapper>
  );
};

export default Modal;
