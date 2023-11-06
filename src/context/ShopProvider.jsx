import { createContext } from "react";
import { useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // мобільне меню
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, []);

  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  const value = { handleClickBtn, isOpen };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
