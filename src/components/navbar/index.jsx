import styles from "./styles.module.scss";

const Navbar = ({ sec1, sec2, sec3 }) => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div>{sec1}</div>
        <div className={styles.title}>{sec2}</div>
        <div>{sec3}</div>
      </div>
    </>
  );
};

export default Navbar;
