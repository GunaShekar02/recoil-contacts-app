import { selector } from "recoil";

import { currentContactState } from "./atoms";
import { getContacts, getDetails } from "../data";

export const contactsList = selector({
  key: "contactsList",
  get: async () => {
    const response = await getContacts();
    return response;
  },
});

export const currentContactDetails = selector({
  key: "currentContactDetails",
  get: async ({ get }) => {
    const response = await getDetails(get(currentContactState));
    return response;
  },
});
