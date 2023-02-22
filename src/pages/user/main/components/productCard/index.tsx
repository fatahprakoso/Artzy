import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../../../../models/Product";

import styles from "./styles.module.scss";

/**
 * it's component of product card that will displayed on home page
 *
 * @function ProductCard
 * @param {any} props component props
 * @param {Product} props.product Product's data
 */
const ProdcutCard = (props: { product: Product }) => {
  const navigate = useNavigate();

  /**
   * event handler function for navigate to detail product page
   * @function detailProduct
   * @param {number} id id of targeted product
   */
  const detailProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div
        className={styles.product}
        onClick={() => detailProduct(props.product.id)}
      >
        <img
          src={props.product.image}
          alt="product"
          className={styles.productImage}
        />
        <div className={styles.cardInfo}>
          <div className={styles.productNameContainer}>
            {props.product.title.length > 15
              ? //TODO: deprecated substr function
                /**
                 * @todo substr deprecated
                 * @deprecated substr
                 */
                props.product.title.substr(0, 12) + "..."
              : props.product.title}
          </div>
          <div className={styles.productDetailContainer}>
            <span>{props.product.category}</span>
            <span className={styles.price}>{`$${props.product.price}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdcutCard;
