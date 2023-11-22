import "normalize.css";
import Header from "./modules/header/Header";
import { Main } from "./modules/main/Main";
import FooterShop from "./modules/footer/Footer";
import Modal from "./modules/modal/Modal";

function App() {
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
