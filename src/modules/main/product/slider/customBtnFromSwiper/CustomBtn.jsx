import { useSwiper } from "swiper/react";

const CustomBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slidePrev()}>prev</button>
      <button onClick={() => swiper.slideNext()}>next</button>
    </div>
  );
};

export default CustomBtn;
