import { useEffect, useState } from "react";

import { getAllProducts } from "../../../api/products";

import LoadingScreen from "../../general/loadingScreen";
import Navbar from "../../../components/navbar";
import Hero from "./components/hero";
import ProdcutCard from "./components/productCard";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

const index = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(() => true);

    const data = getAllProducts();

    data
      .then((d) => setProducts(d.data))
      .catch((e) => setError(e))
      .finally(() => setLoading(() => false));
  }, []);

  if (error) return <h1>{error}</h1>;

  if (loading) return <LoadingScreen />;

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
