import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ShopProvider } from "./context/ShopProvider.jsx";
import { Global } from "./Global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <App />
    <Global />
  </ShopProvider>
);
