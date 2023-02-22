import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getDetailProduct } from "../../../api/products";

import LoadingScreen from "../../general/loadingScreen";
import Navbar from "../../../components/navbar";
import Detail from "./components/detailProduct";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import styles from "./styles.module.scss";

const index = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(() => true);

    const data = getDetailProduct(id);

    data
      .then((d) => setProduct(d.data))
      .catch((e) => setError(e))
      .finally(() => setLoading(() => false));
  }, []);

  if (error) return <h1>{error}</h1>;

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Navbar
        sec1={<IoMdArrowBack size={22.5} />}
        sec2={
          product.title.length > 10
            ? `${product.title.substr(0, 10)}...`
            : product.title
        }
        sec3={<AiOutlinePlus size={22.5} />}
        onClickSec1={() => navigate("/home")}
      />
      <div className={styles.productContainer}>
        <img
          src={product.image}
          alt="product"
          className={styles.productImage}
        />
        <Detail
          title={product.title}
          price={product.price}
          description={product.description}
        />
      </div>
    </>
  );
};

export default index;
