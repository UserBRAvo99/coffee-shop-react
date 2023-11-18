import "normalize.css";
import "./App.css";
import Header from "./modules/header/Header";
import { Main } from "./modules/main/Main";
import FooterShop from "./modules/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <FooterShop />
    </>
  );
}

export default App;
