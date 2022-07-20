import styles from "../../styles/Card.module.css";
import Image from "next/image";
const Card = (props) => {
  return (
    <div className={styles.cardContainer}>

      <div className={styles.icon}>
      <Image
            src={props.image}
            alt="icon"
            height="150px"
            width="150px"
          />
      </div>
      <div className={styles.cardHead}>
        <h2>{props.head}</h2>
      </div>
      <div className={styles.cardContent}>
        <p>{props.content}</p>
      </div>
    </div>

        

  
  );
};
export default Card;
