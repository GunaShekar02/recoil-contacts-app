import React, { Suspense } from "react";

import ContactsList from "../ContactList/ContactList";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts Menu</h2>
      <div className={styles.list}>
        <Suspense fallback={<h3>Loading Contacts...</h3>}>
          <ContactsList />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
