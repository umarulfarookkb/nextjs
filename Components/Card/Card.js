import styles from "../../styles/Card.module.css";
import Image from "next/image";
const Card = () => {
  return (
    <div className={styles.cardContainer}>

      <div className={styles.icon}>
      <Image
            src="/icon.png"
            alt="icon"
            height="130px"
            width="130px"
          />
      </div>
      <div className={styles.cardHead}>
        <h2>Free shipping</h2>
      </div>
      <div className={styles.cardContent}>
        <p>Enjoy Order in a hand using the fresness of groceries</p>
      </div>
    </div>

        

  
  );
};
export default Card;
