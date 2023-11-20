import styled from "styled-components";
import { Link } from "react-scroll";
import { fonts, theme } from "../../../utils/theme";
import { dataMenuLink, ourAddress } from "../../../data/dataAboutProducts";
import BtnGreen from "../../../shared/BtnGreen";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import LogoAndTittle from "../../../shared/LogoAndTittle";

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
            <BtnGreen height="14px" width="32px" color={theme.color.darkGreen}>
              <span>Contact Us</span>
            </BtnGreen>
          </div>
        )}
      </WrapperNavBtn>
    </Wrapper>
  );
};

export default DesktopHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0;
`;

const WrapperNavBtn = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  width: 400px;
  align-items: end;
  justify-content: space-between;
  & a {
    cursor: pointer;
  }
  @media screen and (min-width: 1023px) {
    &:last-child {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 1439px) {
    width: 485px;
    &:last-child {
      margin-right: 90px;
    }
  }
`;

const Item = styled.li`
  font-family: ${fonts.josefin};
  font-size: 16px;
  font-weight: 700;
`;
