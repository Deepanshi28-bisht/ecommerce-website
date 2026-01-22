import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Apiclient from "../../api/Apiclient";

const CardDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    Apiclient.get(`/products/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="container p-50 mt-5">
      {loading ? (
        <div className="loader">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        </div>
      ) : (
        <div className="row product-page">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={data.image} alt={data.title} className="w-100" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex flex-column gap-3">
              <p className="category">{data.category}</p>
              <h2>{data.title}</h2>
              <p className="description">{data.description}</p>
              <div className="price">₹ {data.price}</div>

              <div className="actions">
                <button className="add-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
