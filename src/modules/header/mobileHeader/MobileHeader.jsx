import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import MobileLogoBtn from "./MobileLogoBtn";
import MobileMenu from "./MobileMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileHeader = () => {
  const { handleClickBtn } = useContext(ShopContext);
  return (
    <>
      <MobileLogoBtn open={handleClickBtn}>
        <AiOutlineMenu />
      </MobileLogoBtn>
      <MobileMenu>
        <MobileLogoBtn open={handleClickBtn}>
          <AiOutlineClose />
        </MobileLogoBtn>
      </MobileMenu>
    </>
  );
};

export default MobileHeader;
