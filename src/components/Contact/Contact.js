import React, { Suspense } from "react";

import Card from "../Card/Card";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Suspense fallback={<h3>Loading Details...</h3>}>
          <Card />
        </Suspense>
      </div>
    </div>
  );
};

export default Contact;
