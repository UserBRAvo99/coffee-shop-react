import {
  ArrowSliderNext,
  ArrowSliderPrev,
} from "../../../../../shared/img/ArrowSlider";
import { Btn, Wrapper } from "./CustomBtn.style";

// кастомні кнопки для слайдера Swiper
// на кастомні кнопки навішуємо відповідний клас className="prev" та className="next", щоб зв'язати їх з слайдером.

const CustomBtn = () => {
  return (
    <Wrapper>
      <Btn className="prev">
        <ArrowSliderPrev />
      </Btn>
      <Btn className="next">
        <ArrowSliderNext />
      </Btn>
    </Wrapper>
  );
};

export default CustomBtn;
