import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { theme } from "../utils/theme";

const SocIcons = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Link href="#">
            <AiFillInstagram />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <FaFacebookF />
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <AiOutlineTwitter />
          </Link>
        </Item>
      </List>
    </Wrapper>
  );
};

export default SocIcons;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0 40px 0;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  gap: 27px;
`;
const Item = styled.li``;

const Link = styled.a`
  display: block;
  position: relative;
  width: 45px;
  height: 45px;
  border: solid 2px ${theme.color.grey};
  border-radius: 50%;
  svg {
    position: absolute;
    top: 14%;
    right: 14%;
    /* transform: translate(0, -50%); */
    fill: ${theme.color.grey};
    width: 70%;
    height: 70%;
  }
  &:hover,
  &:focus {
    border-color: ${theme.color.darkGreen};
    svg {
      fill: ${theme.color.darkGreen};
    }
  }
`;
