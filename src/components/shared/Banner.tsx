// import { fetchProductsData } from '@/utils/fetchProductsData';
// import { useEffect, useState } from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
  const handleBannerSearch = () => {
    console.log('log');
  };

  return (
    <div className='w-full relative'>
      <img
        src={bannerImg}
        className='w-full h-[35rem] object-center object-cover rounded-tr-2xl rounded-tl-2xl'
        alt=''
      />
      <p className='absolute top-52 left-20 font-medium text-6xl text-white'>
        Buy everything you want!
      </p>
      <input
        type='text'
        className='absolute top-80 left-24 w-[40rem] h-11 outline-none rounded-lg bg-gray-200 text-xl p-2'
        onKeyDown={handleBannerSearch}
      />
    </div>
  );
};
export default Banner;
