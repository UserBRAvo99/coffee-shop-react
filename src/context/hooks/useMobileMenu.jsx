import { useEffect, useState } from "react";

const useMobileMenu = () => {
  // Модалка для мобільного меню
  const [isOpen, setIsOpen] = useState(false);
  const handleClickBtn = () => {
    setIsOpen(!isOpen);
  };
  // за допомогою useEffect накладаємо блок на скрол та знімаємо його при закритті.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  // повертаю з хука функції(методи)
  return { handleClickBtn, isOpen };
};

export default useMobileMenu;
