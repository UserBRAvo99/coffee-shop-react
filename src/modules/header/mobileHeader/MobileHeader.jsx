import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileLogoBtn from "./MobileLogoBtn";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const { handleClickBtn, isOpen } = useContext(ShopContext);
  return (
    <>
      <MobileLogoBtn open={handleClickBtn}>
        <AiOutlineMenu />
      </MobileLogoBtn>
      {isOpen && (
        <MobileMenu>
          <MobileLogoBtn open={handleClickBtn}>
            <AiOutlineClose />
          </MobileLogoBtn>
        </MobileMenu>
      )}
    </>
  );
};

export default MobileHeader;
