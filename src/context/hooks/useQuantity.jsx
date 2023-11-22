import useMedia from "./useMedia";

import { dataDrink, ourAddress } from "../../assets/data/dataAboutProducts";
import { useState } from "react";

const useQuantity = () => {
  const [number, setNumber] = useState(4);
  const { isMobileScreen, isTabletScreenMin } = useMedia();

  const numberProducts = () => {
    if (isMobileScreen) setNumber(3);
    if (isTabletScreenMin) setNumber(4);
  };

  const numberOfAddress = (n) => {
    const newArrAddress = [];
    for (let i = 0; i < n; i += 1) {
      newArrAddress.push(ourAddress[i]);
    }
    return newArrAddress;
  };
  const numberOfProducts = (n) => {
    const newArrProducts = [];
    for (let i = 0; i < n; i += 1) {
      newArrProducts.push(dataDrink[i]);
    }
    return newArrProducts;
  };
  return { numberOfProducts, numberOfAddress, numberProducts, number };
};

export default useQuantity;
