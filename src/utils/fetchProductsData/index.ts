// import { fetchProductsDataTYP } from '../types';

export const fetchProductsData = async (query: string) => {
  const response = await fetch(`https://dummyjson.com/products/${query}`);
  const data = await response.json();
  return data;
};
