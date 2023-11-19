import { dataDrink, ourAddress } from "../../data/dataAboutProducts";

const useQuantity = () => {
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
  return { numberOfProducts, numberOfAddress };
};

export default useQuantity;
