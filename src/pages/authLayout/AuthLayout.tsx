import { Navigate, Outlet } from 'react-router-dom';
import AuthForms from './authForms/AuthForms';

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <>
          <Navigate to='/sign-in' />
        </>
      )}
    </>
  );
};
export default AuthLayout;
