import React from "react";

import Product from "../../../../../models/Product";

import styles from "./styles.module.scss";

/**
 * it's component of product detail that will displayed on detail product page
 *
 * @function {@link Detail}
 * @param {any}     props         component props
 * @param {Product} props.product Product's data
 */
const Detail = (props: { product: Product }) => {
  return (
    <>
      <div className={styles.detailProductContainer}>
        <div className={styles.head}>
          <h3 className={styles.title}>{props.product.title}</h3>
          <span className={styles.price}>{`$${props.product.price}`}</span>
        </div>
        <div className={styles.inputGroup}>
          <select name="size" id="size" placeholder="SMALL">
            <option value="1">SMALL</option>
            <option value="2">MEDIUM</option>
            <option value="3">LARGE</option>
          </select>
          <select name="color" id="color"></select>
        </div>
        <p className={styles.description}>{props.product.description}</p>
      </div>
    </>
  );
};

export default Detail;
