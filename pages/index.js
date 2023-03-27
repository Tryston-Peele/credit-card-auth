import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className={styles.test}>
      <div className={styles.left}>
        <div className={styles.creditFront}>
          <div className={styles.circlesContainer}>
            <div className={styles.circleFilled}></div>
            <div className={styles.circleEmpty}></div>
          </div>
          <div className={styles.cardNumContainer}>
            <h3 className={styles.cardNum}>0000 0000 0000 0000</h3>
          </div>
          <div className={styles.nameDateContainer}>
            <h5 className={styles.cardName}>Jane Appleseed</h5>
            <h5 className={styles.cardDate}>00/00</h5>
          </div>
        </div>
        <div className={styles.creditBack}>
          <h3 className={styles.cvcCode}>000</h3>
        </div>
      </div>

      <div className={styles.right}>
        <Form />
      </div>
    </div>
  );
}
