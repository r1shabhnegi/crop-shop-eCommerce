import { useAppSelector } from '@/utils/hooks/useGlobals';
import { Navigate } from 'react-router-dom';
import RootLayout from './RootLayout';

const AuthLayout = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.auth);

  return <>{isAuthenticated ? <RootLayout /> : <Navigate to='/sign-in' />}</>;
};
export default AuthLayout;
