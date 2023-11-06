import styled from "styled-components";
import MobileHeader from "./mobileHeader/MobileHeader";

const Header = () => {
  return (
    <Head className="container">
      <MobileHeader />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  display: flex;
  position: relative;
`;
