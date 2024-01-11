import { Outlet, useLocation } from 'react-router-dom';
import authBg from '../../assets/authBackground.png';
import logo from '../../assets/logo.png';

const AuthFormsLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className='relative bg-red-200 w-full h-screen flex '>
      <div className='w-1/2 h-screen'>
        <img
          src={authBg}
          className='w-full h-screen'
          alt='Background Img'
        />
      </div>
      <div className='w-1/2 bg-gradient-to-r from-[#119ABF] to-sky-700 flex justify-center items-center'>
        <div className='w-auto h-auto '>
          <p className='text-white text-2xl pb-3 pl-1 font-bold'>
            {pathname === '/sign-in' ? 'Sign In' : 'Sign Up'}
          </p>
          <Outlet />
        </div>
      </div>
      <span className='absolute top-10 left-56'>
        <img
          src={logo}
          // className=''
          alt='Logo'
        />
      </span>
    </div>
  );
};
export default AuthFormsLayout;
