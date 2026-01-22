import { useEffect, useState } from "react";
import ProductCard from "./card";
import Apiclient from "../../api/Apiclient";
import { Link } from "react-router-dom";


const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Apiclient.get("/products").then((res) => {
      setData(res.data);
    },[]);
  });
  return (
    <div className="container mt-5">
        <h1 className="mb-4 p-50">All Products</h1>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-12 col-lg-3 col-md-4 mb-4">
              <ProductCard data={item} />
             
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;









// byeeeeeee byeeeeeeeeeeeeeeeeeeeeee 
