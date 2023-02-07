import { useEffect, useState } from "react";

import { getAllProducts } from "../../../api/products";

import Navbar from "../../../components/navbar";
import Hero from "./components/hero";
import ProdcutCard from "./components/productCard";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

const index = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = getAllProducts();

    data.then((d) => setProducts(d.data)).catch((e) => setError(e));
  }, []);
  return (
    <>
      <Navbar
        sec1={<RxHamburgerMenu size={22.5} />}
        sec2={"Products"}
        sec3={<AiOutlineSearch size={22.5} />}
      />
      <Hero />
      <div className={styles.productContainer}>
        {!error && products
          ? products.map((product) => {
              return (
                <ProdcutCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default index;
