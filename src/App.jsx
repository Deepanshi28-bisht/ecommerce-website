import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";
import CardDetails from "./components/Productcard/cardDetails";
import Product from "./components/Productcard/Product";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ContactUs from "./components/Pages/ContactUs";
import LoginForm from "./components/Pages/LoginForm";
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<MainHeader/>} />
      <Route path="/cardDetails/:id" element={<CardDetails/>} />
      <Route path="/products" element={<Product/>}/>
      <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/loginForm" element={<LoginForm/>}/>
    </Routes>
    </>
  );
}

export default App;
