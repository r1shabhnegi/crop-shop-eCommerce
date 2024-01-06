import { Outlet } from 'react-router-dom';

const AuthForms = () => {
  return (
    <div className='bg-red-200'>
      <Outlet />
    </div>
  );
};
export default AuthForms;
