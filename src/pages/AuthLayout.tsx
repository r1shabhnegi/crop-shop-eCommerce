import { useAppSelector } from '@/utils/hooks/useGlobals';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.auth);

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
