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
        <Card image={"/icon.png"} head={"Free shipping"} content={"Enjoy Order in a hand using the fresness of groceries"}/>
        <div className={styles.shadow}> 
        </div>
        <Card image={"/icon1.png"} head={"15 days returns"} content={"Order in a handy way using the freshness of the groceries."}/>
        <Card image={"/icon2.png"} head={"Secure checkout"} content={"If you get rotten items - return immediately to us."}/>
      </div>
    </section>
  );
};
export default DreamBig;
