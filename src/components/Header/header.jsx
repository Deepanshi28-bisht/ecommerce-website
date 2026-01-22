import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../hooks/cartContext";
import MobileHeader from "./MobileHeader";
import { NameContext } from "../../../hooks/nameContext";
const Header = () => {
  const {count}=useContext(CartContext)
  const {name}=useContext(NameContext)
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [searchTerm,setSearchTerm]=useState("") 
  const handleMobile = () => {
    setShowMobileHeader(!showMobileHeader);
  };
  const location = useLocation();
  console.log("====================================");
  console.log(location.pathname);
  console.log("====================================");

  return (
    <div className="main-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="logo" className="logo" />
            </Link>
            <h6 className="logo-text">Ecommerce Store</h6>
          </div>
          <div className="list-container">
            <Link to="/products">
              <li
                className={
                  location?.pathname === "/products" ? "active-link" : "link"
                }
              >
                Product
              </li>
            </Link>
            <Link to="/privacyPolicy">
              <li
                className={
                  location.pathname === "/privacyPolicy"
                    ? "active-link"
                    : "link"
                }
              >
                Privacy Policy
              </li>
            </Link>
            <Link to="/contactUs">
              <li
                className={
                  location.pathname === "/contactUs" ? "active-link" : "link"
                }
              >
                Contact us
              </li>
            </Link>
            {name?<div className="namecls">{name}</div>:
            <Link to='loginForm'>
            <button className="primary-btn">Login</button>
            </Link>
}
          </div>
          <div className="position-relative">
            <img src="/assets/images/bag.png" alt="cartBag" className="bagImg" />
            <span className="countCls">{count}</span>
          </div>
          <img
            onClick={handleMobile}
            className="hamburger"
            src="/assets/images/hamburger.png"
            alt=""
          />
        </div>
      </div>
      {showMobileHeader ? (
        <MobileHeader show={showMobileHeader} handleClose={handleMobile} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
