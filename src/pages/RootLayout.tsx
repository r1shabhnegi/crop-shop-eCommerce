import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className='pt-14'>
        {' '}
        <Outlet />{' '}
      </div>
      <div className='h-[100rem] bg-gray-200'></div>
      <Footer />
    </div>
  );
};
export default RootLayout;
