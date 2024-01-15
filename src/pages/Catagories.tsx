import CatagoriesCard from '@/components/shared/CatagoriesCard';
import { fetchProductsData } from '@/utils/fetchProductsData';
import { useEffect, useState } from 'react';

const Catagories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProductsData('categories');
      console.log(data);
      setData(data);
    };
    fetch();
  }, []);

  return (
    <div className=' w-full h-96 p-32'>
      <h1 className='font text-6xl pl-16 pb-14'>Catagories</h1>
      <ul className=' flex flex-wrap items-center justify-center gap-10'>
        {data?.map((item) => (
          <li key={item}>
            <CatagoriesCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Catagories;
