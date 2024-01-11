// import { useAppSelector } from '@/utils/hooks/useGlobals';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import { useEffect } from 'react';
import { useAppSelector } from '@/services/redux/store';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  console.log(useAppSelector((state) => state.auth.isAuthenticated));

  // const data = useAppSelector((state) => state.authSlice.initialUser);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <RootLayout />
  ) : (
    <Navigate
      to='/sign-in'
      state={{ from: location }}
      replace
    />
  );
};
export default ProtectedRoute;
