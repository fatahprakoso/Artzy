import HeroImage from "../../../../../assets/hero.jpg";

import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={HeroImage} alt="hero image" className={styles.heroImage} />
        <div className={styles.filterHeroImage}></div>
        <div className={styles.caption}>
          <h2 className={styles.heroTitle}>Totally Sale</h2>
          <h5 className={styles.heroCaption}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            repellendus natus tenetur perferendis accusamus nemo ad dolorem
            voluptas, mollitia non!
          </h5>
        </div>
      </div>
    </>
  );
};

export default Hero;
