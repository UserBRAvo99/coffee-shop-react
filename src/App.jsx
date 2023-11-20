import "normalize.css";
import "./App.css";
import Header from "./modules/header/Header";
import { Main } from "./modules/main/Main";
import FooterShop from "./modules/footer/Footer";
import Modal from "./modules/modal/Modal";
// import { useContext } from "react";
// import { ShopContext } from "./context/ShopProvider";

function App() {
  // const { isOpenModal } = useContext(ShopContext);
  return (
    <>
      <Header />
      <Main />
      <FooterShop />
      <Modal />
    </>
  );
}

export default App;
