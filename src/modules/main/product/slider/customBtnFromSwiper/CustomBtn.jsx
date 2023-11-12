import { useSwiper } from "swiper/react";
import {
  ArrowSliderNext,
  ArrowSliderPrev,
} from "../../../../../shared/ArrowSlider";
import styled from "styled-components";

const CustomBtn = () => {
  const swiper = useSwiper();
  return (
    <Wrapper>
      <Btn onClick={() => swiper.slidePrev()}>
        <ArrowSliderPrev />
      </Btn>
      <Btn onClick={() => swiper.slideNext()}>
        <ArrowSliderNext />
      </Btn>
    </Wrapper>
  );
};

export default CustomBtn;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Btn = styled.button`
  border: transparent;
  background-color: transparent;
`;
