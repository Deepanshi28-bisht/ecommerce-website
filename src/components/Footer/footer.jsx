import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" footer">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="footer-section">
            <h3>Ecommerece</h3>
            <h6>Building modern and scalable web applications using React.</h6>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@mywebsite.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
