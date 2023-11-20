import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { dataDrink, ourAddress } from "../../../../data/dataAboutProducts";
import { fonts, theme } from "../../../../utils/theme";
import styled from "styled-components";
import BtnGreen from "../../../../shared/BtnGreen";
import CustomBtn from "./customBtnFromSwiper/CustomBtn";
import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopProvider";

const Slider = () => {
  const { openModal } = useContext(ShopContext);
  return (
    <Background>
      <WrapperSlider id="shop">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {dataDrink.map((coffee) => {
            return (
              <SwiperSlide key={coffee.drink}>
                <WrapperDrink>
                  <Title>{coffee.drink}</Title>
                  <Info>{coffee.info}</Info>
                  <div onClick={() => openModal(ourAddress)}>
                    <BtnGreen
                      height={"15px"}
                      width={"49px"}
                      color={theme.color.darkGreen}
                    >
                      <Span>Add to cart</Span>
                    </BtnGreen>
                  </div>
                </WrapperDrink>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <CustomBtn />
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
  position: relative;
  padding: 45px 0;
  width: calc(100% - 200px);
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 1439px) {
    width: calc(100% - 350px);
  }
`;

const WrapperDrink = styled.div`
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
  line-height: 36px;
  letter-spacing: 0.019px;
  margin-bottom: 36px;
`;
const Span = styled.span`
  font-family: ${fonts.alegreya.fontFamily};
  font-size: 20px;
`;
