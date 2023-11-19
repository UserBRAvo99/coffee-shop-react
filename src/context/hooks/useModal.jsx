import { useCallback, useState } from "react";
import { useEffect } from "react";

// власний хук на модалку - закриття на клік, клавіші
export const useModal = () => {
  // стейт для модалки, початкове значення false - тобто закрита
  const [isOpenModal, setIsOpenModal] = useState(false);
  // стейт для контенту, який буде передаватись в модальне вікно
  const [content, setContent] = useState();
  // хук useEffect блокує скрол при відкритті модалки
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpenModal]);
  const modalButtonClose = useCallback((e) => {
    if (e.key === "Escape") {
      toggleModal();
    }
  }, []);
  // хук useEffect при якому вішається слухач на клавіатуру, якщо модалка відкрита та знімає його при закритті(розмонтуванні)
  useEffect(() => {
    if (isOpenModal) window.addEventListener("keydown", modalButtonClose);
    return () => {
      window.removeEventListener("keydown", modalButtonClose);
    };
  }, [isOpenModal, modalButtonClose]);
  // функція перемикач, при виклику змінює стейт isOpenModal на протилежний
  const toggleModal = () => {
    return setIsOpenModal((prev) => !prev);
  };
  // функція  відкриває модалку та записує в стейт інформацію про продукт (або яку ми передаємо і далі будемо використовувати в середині модалки)
  const openModal = (product) => {
    setContent(product);
    toggleModal();
  };
  // функція - використовується для закриття модалки - може вішатись на кнопку закриття та оверфлоу модалки (напівпрозорий задній фон, при кліку на який, модалка закриється)
  const modalHandleClick = (e) => {
    if (e.target === e.currentTarget) toggleModal();
  };
  // повертаємо всі функції в контекст(наш провайдер)
  return {
    modalButtonClose,
    openModal,
    content,
    modalHandleClick,
    isOpenModal,
    toggleModal,
  };
};
