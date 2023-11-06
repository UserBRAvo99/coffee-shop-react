import styled from "styled-components";
import { theme, fonts } from "../../../utils/theme";
import SocIcons from "../../../shared/SocIcons";

const dataMenuLink = ["Home", "About us", "Promotion", "Shop", "Contacts"];

const MobileMenu = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <List>
        {dataMenuLink.map((item) => (
          <Item key={item}>
            <Link href="#">{item}</Link>
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
`;
const Link = styled.a`
  text-decoration: none;
  color: ${theme.color.black};
  font-family: ${fonts.josefin.fontFamily};
  font-size: 36px;
  font-weight: 500;
`;

const DarkLine = styled.div`
  width: 134px;
  height: 5px;
  flex-shrink: 0;
  border-radius: 100px;
  background: ${theme.color.black};
  margin: 0 auto;
`;
