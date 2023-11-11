import styled from "styled-components";
import { theme } from "../../../../utils/theme";

const HeroDesktopPart = () => {
  return (
    <div>
      <List>
        <ArrowBox></ArrowBox>
        <CoffeeBox></CoffeeBox>
        <SocBox>
          <span>Follow us</span>
        </SocBox>
      </List>
    </div>
  );
};

export default HeroDesktopPart;

const List = styled.ul`
  display: flex;
  align-items: end;
`;

const ArrowBox = styled.li`
  width: 159px;
  height: 157px;
  background-color: ${theme.color.lightGreen};
  opacity: 0.4;
`;

const CoffeeBox = styled.li`
  width: 410px;
  height: 466px;
  background-color: ${theme.color.lightGreen};
`;

const SocBox = styled.li`
  transform: rotate(-90deg);
  width: 28px;
`;
