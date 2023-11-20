import styled from "styled-components";
import {
  ArrowSliderNext,
  ArrowSliderPrev,
} from "../../../../../shared/img/ArrowSlider";

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

const Wrapper = styled.div`
  position: absolute;
  width: 110%;
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
  cursor: pointer;
`;
