import { useEffect, useState } from "react";
import Apiclient from "../api/Apiclient";
import Banner from "./Banner/banner";
import ProductCard from "./Productcard/card";

const MainHeader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('====================================');
    console.log("kkkkkkkkkkk");
    console.log('====================================');
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    Apiclient.get("/products").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <Banner />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-12 col-md-12 mb-4">
            <h2 className="font-bold">Featured Products</h2>
          </div>
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            data.map((item, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-lg-3 col-md-4 mb-5"
                  key={index}
                >
                  <ProductCard data={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
