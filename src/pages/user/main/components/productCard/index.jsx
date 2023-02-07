import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const ProdcutCard = ({ image, title, category, price, id }) => {
  const navigate = useNavigate();

  const detailProduct = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className={styles.product} onClick={detailProduct}>
        <img src={image} alt="product" className={styles.productImage} />
        <div className={styles.cardInfo}>
          <div className={styles.productNameContainer}>
            {title.length > 20 ? title.substr(0, 17) + "..." : title}
          </div>
          <div className={styles.productDetailContainer}>
            <span>{category}</span>
            <span className={styles.price}>{`$${price}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdcutCard;
