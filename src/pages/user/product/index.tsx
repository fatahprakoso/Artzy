import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Product from "../../../models/Product";
import APIErrorResponse from "../../../models/APIErrorResponse";

import { getDetailProduct } from "../../../api/products";

import LoadingScreen from "../../general/loadingScreen";
import Navbar from "../../../components/navbar";
import Detail from "./components/detailProduct";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import styles from "./styles.module.scss";

/**
 * it's container or page for product detail menu
 *
 * route path used: "/detail/:id"
 *
 * @function {@link index product}
 */
const index = () => {
  const navigate = useNavigate();

  /**
   * taken id from url params
   */
  const { id } = useParams();

  /**
   * products state
   * products data that will displayed
   */
  const [product, setProduct] = useState<Product>(null);

  /**
   * error state
   * error of API's request for products getter's API
   */
  const [error, setError] = useState<APIErrorResponse>(null);

  /**
   * loading state
   * loading state of API's request for products getter's API
   */
  const [loading, setLoading] = useState(true);

  /**
   * useEffect
   * api call for specific product getter's API
   * will be runned on first render only
   */
  useEffect(() => {
    setLoading(() => true);

    const data = getDetailProduct(Number(id));

    data
      .then((d) => setProduct(d.data as Product))
      .catch((e) => setError(e.response as APIErrorResponse))
      .finally(() => setLoading(() => false));
  }, []);

  /**
   * error page will be rendered if value of error state exist
   */
  if (error) return <h1>{error.statusText}</h1>;

  /**
   * loading page will be rendered if value of loading state is true
   */
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
        <Detail product={product} />
      </div>
    </>
  );
};

export default index;
