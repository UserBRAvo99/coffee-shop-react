import { Btn } from "./btnTemplate.style";

const BtnTemplate = ({ height, width, color, margin, children }) => {
  return (
    <Btn $height={height} $width={width} $color={color} $margin={margin}>
      {children}
    </Btn>
  );
};

export default BtnTemplate;
