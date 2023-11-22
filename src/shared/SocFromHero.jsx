import styled from "styled-components";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { fonts, theme } from "../utils/theme";

const SocFromHero = () => {
  return (
    <Wrapper>
      <Span>Follow us</Span>
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

export default SocFromHero;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 34px;
`;

const Span = styled.span`
  font-family: ${fonts.josefin};
  font-size: 28px;
  font-weight: 700;
  margin-right: 14px;
  width: 120px;
`;

const List = styled.ul`
  display: flex;
  gap: 14px;
`;
const Item = styled.li``;

const Link = styled.a`
  display: block;
  position: relative;
  width: 32px;
  height: 32px;
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
    transform: rotate(90deg);
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
