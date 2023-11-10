import styled from "styled-components";
import { Link } from "react-scroll";
import Logo from "../../../shared/Logo";
import { fonts, theme } from "../../../utils/theme";
import { dataMenuLink } from "../../../data/dataAboutProducts";
import BtnGreen from "../../../shared/BtnGreen";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";

const DesktopHeader = () => {
  const { isNoteScreen } = useContext(ShopContext);
  return (
    <Wrapper>
      <WrapperTittle>
        <Logo />
        <Tittle>Samwayle</Tittle>
      </WrapperTittle>
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
          <BtnGreen height="14px" width="32px" color={theme.color.darkGreen}>
            <span>Contact Us</span>
          </BtnGreen>
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

const WrapperTittle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  & svg {
    width: 56px;
    height: 34px;
  }
`;

const Tittle = styled.h1`
  font-family: ${fonts.cedarville.fontFamily};
  font-size: 32px;
  font-weight: ${fonts.cedarville.fontWeight};
`;

const WrapperNavBtn = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  width: 400px;
  /* width: 485px; */
  align-items: end;
  justify-content: space-between;
  @media screen and (min-width: 1023px) {
    &:last-child {
      margin-right: 40px;
    }
  }
`;

const Item = styled.li`
  font-family: ${fonts.josefin};
  font-size: 16px;
  font-weight: 700;
`;
