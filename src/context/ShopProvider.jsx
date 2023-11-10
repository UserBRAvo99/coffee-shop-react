import { createContext } from "react";
import { useMediaQuery } from "react-responsive";
import useModal from "./hooks/useModal";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // викликаю власний хук та деструктуризую його методи, які потім переношу в value. Щоб далі передати їх через Context по проекту.
  const { handleClickBtn, isOpen } = useModal();

  const isTabletScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isNoteScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isDeskScreen = useMediaQuery({ query: "(min-width: 1439px)" });

  const value = {
    handleClickBtn,
    isOpen,
    isTabletScreen,
    isNoteScreen,
    isDeskScreen,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
