import styles from "./styles.module.scss";

const Detail = ({ title, price, description }) => {
  return (
    <>
      <div className={styles.detailProductContainer}>
        <div className={styles.head}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.price}>{`$${price}`}</span>
        </div>
        <div className={styles.inputGroup}>
          <select name="size" id="size" placeholder="SMALL">
            <option value="1">SMALL</option>
            <option value="2">MEDIUM</option>
            <option value="3">LARGE</option>
          </select>
          <select name="color" id="color"></select>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default Detail;
