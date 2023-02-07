import styles from "./styles.module.scss";

const Navbar = ({
  sec1,
  sec2,
  sec3,
  onClickSec1 = null,
  onClickSec2 = null,
  onClickSec3 = null,
}) => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div onClick={onClickSec1}>{sec1}</div>
        <div onClick={onClickSec2} className={styles.title}>
          {sec2}
        </div>
        <div onClick={onClickSec3}>{sec3}</div>
      </div>
    </>
  );
};

export default Navbar;
