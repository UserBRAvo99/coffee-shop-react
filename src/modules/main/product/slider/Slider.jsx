import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dataDrink } from "../../../../data/dataAboutProducts";
import { fonts, theme } from "../../../../utils/theme";
import styled from "styled-components";
import BtnGreen from "../../../../shared/BtnGreen";

const Slider = () => {
  return (
    <Background>
      <WrapperSlider>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {dataDrink.map((coffee) => {
            return (
              <SwiperSlide key={coffee.drink}>
                <WrapperDrink>
                  <Title>{coffee.drink}</Title>
                  <Info>{coffee.info}</Info>
                  <BtnGreen
                    height={"15px"}
                    width={"49px"}
                    color={theme.color.darkGreen}
                  >
                    <Span>Add to cart</Span>
                  </BtnGreen>
                </WrapperDrink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WrapperSlider>
    </Background>
  );
};

export default Slider;

const Background = styled.div`
  width: 100%;
  margin-top: 74px;
  margin-bottom: 130px;
  background: ${theme.color.lightGreen};
`;

const WrapperSlider = styled.div`
  padding: 45px 0;
  width: calc(100% - 120px);
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 1439px) {
  }
`;

const WrapperDrink = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 30px 20px;
  border-radius: 25px;
  background: ${theme.color.white};
  /* align-items: stretch; */
  /* box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17); */
  /* margin-bottom: 30px; */
  & button {
    margin-top: auto;
  }
  @media screen and (min-width: 1023px) {
    padding: 44px 47px 47px 47px;
  }
  @media screen and (min-width: 1439px) {
    width: 340px;
    height: 500px;
  }
`;

const Title = styled.h3`
  text-align: center;
  color: ${theme.color.black};
  font-family: ${fonts.josefin.fontFamily};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const Info = styled.p`
  color: ${theme.color.grey};
  text-align: center;
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 19px;
  font-weight: 400;
  line-height: 36px; /* 189.474% */
  letter-spacing: 0.019px;
  margin-bottom: 36px;
`;
const Span = styled.span`
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 20px;
`;
