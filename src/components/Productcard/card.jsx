import { useContext } from "react";
import { CartContext } from "../../../hooks/cartContext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { increaseCount } = useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/cardDetails/${props.data.id}`}>
        <img src={props.data.image} alt="product" />
        <div className="d-flex flex-column gap-1 p-2">
          <h5 className="title">{props.data.title}</h5>
          <div className="d-flex flex-column">
            <b className="mt-1">₹ {props.data.price}</b>
            <span className="discounted-price">{props.data.category}</span>
          </div>
          <div></div>
        </div>
      </Link>
      <button className="addCart" onClick={increaseCount}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
