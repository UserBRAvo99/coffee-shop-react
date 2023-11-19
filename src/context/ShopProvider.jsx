import { createContext } from "react";
import { useMediaQuery } from "react-responsive";
import useMobileMenu from "./hooks/useMobileMenu";
import useQuantity from "./hooks/useQuantity";
// ініціалізація контексту (не забуваємо огорнути компоненти в провайдер)
export const ShopContext = createContext();
// контекст)
export const ShopProvider = ({ children }) => {
  // викликаю власний хук та деструктуризую його методи, які потім переношу в value. Щоб далі передати їх через Context по проекту.
  const { handleClickBtn, isOpen } = useMobileMenu();

  const { numberOfProducts, numberOfAddress } = useQuantity();

  // медіа запити визначені за допомогою react-responsive , допомагає виконати рендер за умовою
  const isMobileScreen = useMediaQuery({ query: "(min-width: 320px)" });
  const isTabletScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletScreenMin = useMediaQuery({ query: "(min-width: 767px)" });
  const isNoteScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isNoteScreenProducts = useMediaQuery({ query: "(max-width: 1023px)" });
  const isDeskScreen = useMediaQuery({ query: "(min-width: 1439px)" });

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
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
