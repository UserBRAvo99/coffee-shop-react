import { createContext } from "react";

import useMobileMenu from "./hooks/useMobileMenu";
import useQuantity from "./hooks/useQuantity";
import { useModal } from "./hooks/useModal";
import useMedia from "./hooks/useMedia";
// ініціалізація контексту (не забуваємо огорнути компоненти в провайдер)
export const ShopContext = createContext();
// контекст)
export const ShopProvider = ({ children }) => {
  // викликаю власний хук та деструктуризую його методи, які потім переношу в value. Щоб далі передати їх через Context по проекту.
  const { handleClickBtn, isOpen } = useMobileMenu();
  //  функція яка повертає кількість відрендерених елементів відносно умови(розміру екрана)
  const { numberOfProducts, numberOfAddress, numberProducts, number } =
    useQuantity();
  // медіа запити
  const {
    isTabletScreen,
    isNoteScreen,
    isDeskScreen,
    isNoteScreenProducts,
    isMobileScreen,
    isTabletScreenMin,
  } = useMedia();

  //  модалка
  const {
    modalButtonClose,
    openModal,
    content,
    modalHandleClick,
    isOpenModal,
    toggleModal,
  } = useModal();

  // в value передаємо функції, які треба використати в проекті, без урахування каскадності, тобто можна передати напряму в потрібний компонент
  const value = {
    handleClickBtn,
    isOpen,
    isTabletScreen,
    isNoteScreen,
    isDeskScreen,
    isNoteScreenProducts,
    numberOfProducts,
    isMobileScreen,
    isTabletScreenMin,
    numberOfAddress,
    modalButtonClose,
    openModal,
    content,
    modalHandleClick,
    isOpenModal,
    toggleModal,
    numberProducts,
    number,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
