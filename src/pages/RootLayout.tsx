import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='pt-16'>
        <Outlet />
      </div>
      <div className='h-[100rem] bg-white'></div>
      <Footer />
    </div>
  );
};
export default RootLayout;
