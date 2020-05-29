import React, { Suspense } from "react";

import Card from "../Card/Card";

import styles from "./Details.module.css";

const Details = () => {
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

export default Details;
