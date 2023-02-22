import React from "react";
import { useEffect, useState } from "react";

import Product from "../../../models/Product";
import APIErrorResponse from "../../../models/APIErrorResponse";

import { getAllProducts } from "../../../api/products";

import LoadingScreen from "../../general/loadingScreen";
import Navbar from "../../../components/navbar";
import Hero from "./components/hero";
import ProdcutCard from "./components/productCard";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

/**
 * it's container or page for home menu
 *
 * route path used: "/home"
 *
 * @function {@link index main}
 */
const index = () => {
  /**
   * products state
   * products data that will displayed
   */
  const [products, setProducts] = useState<Product[]>(null);

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
   * api call for products getter's API
   * will be runned on first render only
   */
  useEffect(() => {
    setLoading(() => true);

    const data = getAllProducts();

    data
      .then((d) => setProducts(d.data as Product[]))
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
        sec1={<RxHamburgerMenu size={22.5} />}
        sec2={<>Products</>}
        sec3={<AiOutlineSearch size={22.5} />}
      />
      <Hero />
      <div className={styles.productContainer}>
        {!error && products
          ? products.map((product) => {
              return <ProdcutCard product={product} />;
            })
          : null}
      </div>
    </>
  );
};

export default index;
