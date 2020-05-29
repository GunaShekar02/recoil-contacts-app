const contacts = [
  {
    id: 1,
    name: "John Doe",
    address: "42nd Street, Unknown",
    phone: "1111111111",
    email: "john@doe.com",
  },
  {
    id: 2,
    name: "Foo Bar",
    address: "Neverland, Nevercity, Nevercountry",
    phone: "2222222222",
    email: "foo@bar.com",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    address: "Dummy street",
    phone: "3333333333",
    email: "lorem@ipsum.com",
  },
  ,
];

export const getContacts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        contacts.map((contact) => ({ id: contact.id, name: contact.name }))
      );
    }, 2000);
  });

export const getDetails = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(contacts.filter((contact) => contact.id === id)[0]);
    }, 2000);
  });
