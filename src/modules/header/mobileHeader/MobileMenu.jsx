import styled from "styled-components";
import { theme, fonts } from "../../../utils/theme";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopProvider";
import { dataMenuLink } from "../../../data/dataAboutProducts";
import SocIcons from "../../../shared/SocIconsForMobileMenu";

const MobileMenu = ({ children }) => {
  const { handleClickBtn } = useContext(ShopContext);
  return (
    <Wrapper>
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
      <DarkLine></DarkLine>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  display: flex;
  z-index: 10;
  padding: 0 18px 0 18px;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.color.white};
  height: 100vh;
  width: 100vw;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0 0 0;
  margin: 0 auto;
`;
const Item = styled.li`
  display: flex;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.color.black};
    font-family: ${fonts.josefin.fontFamily};
    font-size: 36px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const DarkLine = styled.div`
  width: 134px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${theme.color.black};
  margin: 0 auto;
`;
