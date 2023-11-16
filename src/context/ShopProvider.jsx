import { createContext } from "react";
import { useMediaQuery } from "react-responsive";
import useMobileMenu from "./hooks/useMobileMenu";
import { dataDrink } from "../data/dataAboutProducts";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // викликаю власний хук та деструктуризую його методи, які потім переношу в value. Щоб далі передати їх через Context по проекту.
  const { handleClickBtn, isOpen } = useMobileMenu();

  // медіа запити визначені за допомогою react-responsive , допомагає виконати рендер за умовою
  const isTabletScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isNoteScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isNoteScreenProducts = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDeskScreen = useMediaQuery({ query: "(min-width: 1439px)" });

  const numberOfProducts = (n) => {
    const newArrProducts = [];
    for (let i = 0; i < n; i++) {
      newArrProducts.push(dataDrink[i]);
    }
    return newArrProducts;
  };

  const value = {
    handleClickBtn,
    isOpen,
    isTabletScreen,
    isNoteScreen,
    isDeskScreen,
    isNoteScreenProducts,
    numberOfProducts,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
