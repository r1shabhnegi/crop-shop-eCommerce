import { fetchProductsDataTYP } from '../types';

export const fetchProductsData = async ({ query }: fetchProductsDataTYP) => {
  const response = await fetch(`https://dummyjson.com/products/${query}`);
  const data = await response.json();
  console.log(data);
};
