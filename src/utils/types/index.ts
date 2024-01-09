export type productSliceTYP = {
  products: [];
  status: boolean;
};

export type fetchProductsDataTYP = {
  query: string;
};

export type createAccountTYP = {
  username: string;
  name: string;
  email: string;
  password: string;
};
export type saveUserToDbTYP = {
  accountId: string;
  username: string;
  name: string;
  email: string;
  imageUrl: URL;
};

export type signInAccountTYP = {
  email: string;
  password: string;
};

export type authInitialStateTYP = {
  initialUser: {};
  auth: boolean;
};

export type initialUserTYP = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
};
