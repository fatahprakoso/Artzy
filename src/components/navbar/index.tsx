import React, { MouseEventHandler, ReactElement } from "react";

import styles from "./styles.module.scss";

/**
 * global component that will be displayed in many pages
 *
 * will be displayed on top of page
 *
 * @function {@link Navbar}
 *
 * @param {any}                               props             component props
 * @param {ReactElement}                      props.sec1        left navbar component
 * @param {ReactElement}                      props.sec2        center navbar component (required)
 * @param {ReactElement}                      props.sec3        right navbar component
 * @param {MouseEventHandler<HTMLDivElement>} props.onClickSec1 event for left navbar component
 * @param {MouseEventHandler<HTMLDivElement>} props.onClickSec2 event for center navbar component
 * @param {MouseEventHandler<HTMLDivElement>} props.onClickSec3 event for right navbar component
 */
const Navbar = (props: {
  sec1?: ReactElement;
  sec2: ReactElement;
  sec3?: ReactElement;
  onClickSec1?: MouseEventHandler<HTMLDivElement>;
  onClickSec2?: MouseEventHandler<HTMLDivElement>;
  onClickSec3?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div onClick={props.onClickSec1}>{props.sec1}</div>
        <div onClick={props.onClickSec2} className={styles.title}>
          {props.sec2}
        </div>
        <div onClick={props.onClickSec3}>{props.sec3}</div>
      </div>
    </>
  );
};

export default Navbar;
