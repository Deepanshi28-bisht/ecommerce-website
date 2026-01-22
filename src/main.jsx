import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../hooks/cartProvider.jsx";
import App from "./App.jsx";
import Header from "./components/Header/header.jsx";
import "./index.css";
import NameProvider from "../hooks/nameProvider.jsx";
import Footer from "./components/Footer/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NameProvider>
      <CartProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Header />
          <App />
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </NameProvider>
  </StrictMode>,
);
