import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import { Link } from "react-scroll";
import { dataMenuLink } from "../../../assets/data/dataAboutProducts";
import SocIcons from "../../../shared/SocIconsForMobileMenu";

import { DarkLine, Item, List, Wrapper } from "../../footer/Footer.style";

const MobileMenu = ({ children }) => {
  const { handleClickBtn, isOpen } = useContext(ShopContext);
  return (
    <Wrapper $isOpen={isOpen}>
      {children}
      <List>
        {dataMenuLink.map((item) => (
          <Item key={item[1]}>
            <Link
              activeClass="active"
              to={item[1]}
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              onClick={handleClickBtn}
            >
              {item[0]}
            </Link>
          </Item>
        ))}
      </List>
      <SocIcons />
      <DarkLine />
    </Wrapper>
  );
};

export default MobileMenu;
