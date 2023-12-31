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
  padding: 40px 0 80px 0;
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
  transition: all 500ms ease 0s;
  cursor: pointer;
  svg {
    position: absolute;
    top: 14%;
    right: 14%;
    fill: ${theme.color.grey};
    width: 70%;
    height: 70%;
  }
  &:hover,
  &:focus {
    border-color: ${theme.color.darkGreen};
    box-shadow: 0px 1px 25px 8px rgba(45, 99, 94, 0.5);
    transition: all 500ms ease 0s;
    svg {
      fill: ${theme.color.darkGreen};
    }
  }
`;
