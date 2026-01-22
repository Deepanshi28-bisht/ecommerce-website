import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const MobileHeader = ({ show, handleClose }) => {
  const location = useLocation();
  return (
    <Offcanvas show={show} onHide={handleClose} responsive="md" style={{width:"300px"}}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <div className="d-flex align-items-center">
        <img src="/assets/images/logo.png" height={60} />
        <h3 className="font-bold">Ecommerce Store</h3>
      </div>
      <div className="d-flex flex-column gap-3 mt-5">
        <ul className="d-flex flex-column gap-3">
          <Link
            className={location.pathname == "/products" ? "mob-active" : "mob-link"}
            to="/products"
            onClick={handleClose}
          >
            {" "}
            <li>Product</li>
          </Link>
          <Link
            className={
              location.pathname == "/privacyPolicy" ? "mob-active" : "mob-link"
            }
            to="/privacyPolicy"
            onClick={handleClose}
          >
            {" "}
            <li>Privacy Policy</li>
          </Link>
          <Link
            className={location.pathname == "/contactUs" ? "mob-active" : "mob-link"}
            to="/contactUs"
            onClick={handleClose}
          >
            {" "}
            <li>Contact us</li>
          </Link>
        </ul>
        <button className="w-50 primary-btn mt-5 mx-3">Login</button>
      </div>
    </Offcanvas>
  );
};

export default MobileHeader;
