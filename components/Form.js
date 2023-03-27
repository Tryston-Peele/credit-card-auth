import React from "react";
import styles from "./Form.module.css";

function Form() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.nameHeading}>Cardholder Name</h3>
        <input type="text" className={styles.holderName} />
        <h3 className={styles.nameHeading}>Card Name</h3>
        <input type="text" className={styles.holderName} />
        <div className={styles.headingContainer}>
          <h3 className={styles.expDateHeading}>EXP. DATE (MM/YY)</h3>
          <h3 className={styles.cvcHeading}>CVC</h3>
        </div>
        <div className={styles.dateContainer}>
          <input type="text" className={styles.monthDateInput} />
          <input type="text" className={styles.yearDateInput} />
          <input type="text" className={styles.cvcInput} />
        </div>
        <button className={styles.confirmBtn}>Confirm</button>
      </div>
      {/* <div className={styles.dateContainer}>
        <input type="text" className={styles.dateInput} />
        <input type="text" className={styles.dateInput} />
      </div> */}
    </>
  );
}

export default Form;
