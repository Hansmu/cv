export type Contacts = {
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
};

export type PersonInfo = {
  fullName: string;
  title: string;
  base64Image: string;
  about: string;

  contacts: Contacts;
};
