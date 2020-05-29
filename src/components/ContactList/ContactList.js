import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./ContactList.module.css";

import { currentContactState } from "../../recoil/atoms";
import { contactsList } from "../../recoil/selectors";

const ContactList = () => {
  const [currentContact, setCurrentContact] = useRecoilState(
    currentContactState
  );
  const contacts = useRecoilValue(contactsList);

  return contacts.map((contact) => (
    <div
      key={contact.id}
      className={`${styles.name_container} ${
        currentContact === contact.id ? styles.name_selected : null
      }`}
      onClick={() => setCurrentContact(contact.id)}
    >
      {contact.name}
    </div>
  ));
};

export default ContactList;
