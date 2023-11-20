import styled from "styled-components";
import { fonts, theme } from "../../../../utils/theme";

export const Background = styled.div`
  width: 100%;
  margin-top: 74px;
  margin-bottom: 130px;
  background: ${theme.color.lightGreen};
`;

export const WrapperSlider = styled.div`
  position: relative;
  padding: 45px 0;
  width: calc(100% - 200px);
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 1439px) {
    width: calc(100% - 350px);
  }
`;

export const WrapperDrink = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 30px 20px;
  border-radius: 25px;
  background: ${theme.color.white};
  min-width: 0;
  & button {
    margin-top: auto;
  }
  @media screen and (min-width: 1023px) {
    height: 480px;
  }
  @media screen and (min-width: 1439px) {
    padding: 44px 47px 47px 47px;
    height: 470px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  color: ${theme.color.black};
  font-family: ${fonts.josefin.fontFamily};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Info = styled.p`
  color: ${theme.color.grey};
  text-align: center;
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 19px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.019px;
  margin-bottom: 36px;
`;
export const Span = styled.span`
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 20px;
`;
