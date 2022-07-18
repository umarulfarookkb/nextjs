import styles from "../../styles/DreamBig.module.css";
import Card from "../Card/Card";
const DreamBig = () => {
  return (
    <section className={styles.section_container}>
      <div className={styles.headingContainer}>
        <h4 className={styles.secondaryHeading}>Short Introduction</h4>
        <h2 className={styles.primaryHeading}>
          Dream Big Do Right<span className={styles.fullStop}>.</span>
        </h2>
      </div>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  );
};
export default DreamBig;
