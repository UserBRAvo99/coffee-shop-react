import { dataDrink } from "../../data/dataAboutProducts";

const useQuantity = () => {
  const numberOfProducts = (n) => {
    const newArrProducts = [];
    for (let i = 0; i < n; i += 1) {
      newArrProducts.push(dataDrink[i]);
    }
    return newArrProducts;
  };
  return { numberOfProducts };
};

export default useQuantity;
