import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopContext } from "../../../../context/ShopProvider";

import BtnTemplate from "../../../../shared/btnTemplate/BtnTemplate";
import CustomBtn from "./customBtnFromSwiper/CustomBtn";
import {
  dataDrink,
  ourAddress,
} from "../../../../assets/data/dataAboutProducts";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { theme } from "../../../../utils/theme";
import {
  Background,
  Info,
  Span,
  Title,
  WrapperDrink,
  WrapperSlider,
} from "./Slider.style";

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
                  <div>
                    <Title>{coffee.drink}</Title>
                    <Info>{coffee.info}</Info>
                  </div>
                  <div onClick={() => openModal(ourAddress)}>
                    <BtnTemplate
                      height={"15px"}
                      width={"49px"}
                      color={theme.color.darkGreen}
                      margin={true}
                    >
                      <Span>Add to cart</Span>
                    </BtnTemplate>
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
