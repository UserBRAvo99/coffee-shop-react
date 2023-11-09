import styled from "styled-components";
import MobileHeader from "./mobileHeader/MobileHeader";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTabletScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Head className="container">{isTabletScreen && <MobileHeader />}</Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  position: relative;
`;
