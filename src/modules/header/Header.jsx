import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopProvider";

import MobileHeader from "./mobileHeader/MobileHeader";
import DesktopHeader from "./desktopHeader/DesktopHeader";

const Header = () => {
  const { isTabletScreen } = useContext(ShopContext);

  return (
    <Head className="container">
      {isTabletScreen ? <MobileHeader /> : <DesktopHeader />}
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  position: relative;
`;
