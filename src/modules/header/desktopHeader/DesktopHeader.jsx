import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

import { Link } from "react-scroll";
import BtnTemplate from "../../../shared/btnTemplate/BtnTemplate";
import LogoAndTittle from "../../../shared/LogoAndTittle";
import {
  dataMenuLink,
  ourAddress,
} from "../../../assets/data/dataAboutProducts";

import { theme } from "../../../utils/theme";
import { Item, List, Wrapper, WrapperNavBtn } from "./DesktopHeader.styled";

const DesktopHeader = () => {
  const { isNoteScreen, openModal } = useContext(ShopContext);
  return (
    <Wrapper>
      <LogoAndTittle />
      <WrapperNavBtn>
        <nav>
          <List>
            {dataMenuLink.map(
              (link, index) =>
                index !== 0 && (
                  <Item key={link[0]}>
                    <Link
                      activeClass="active"
                      to={link[1]}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={800}
                    >
                      {link[0]}
                    </Link>
                  </Item>
                )
            )}
          </List>
        </nav>
        {isNoteScreen && (
          <div
            onClick={() => {
              openModal(ourAddress);
            }}
          >
            <BtnTemplate
              height="14px"
              width="32px"
              color={theme.color.darkGreen}
            >
              <span>Contact Us</span>
            </BtnTemplate>
          </div>
        )}
      </WrapperNavBtn>
    </Wrapper>
  );
};

export default DesktopHeader;
