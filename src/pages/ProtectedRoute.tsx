// import { useAppSelector } from '@/utils/hooks/useGlobals';
import { Navigate, useLocation } from 'react-router-dom';
import RootLayout from './RootLayout';
import { useAppSelector } from '@/services/redux/store';
import {
  selectAuthStatus,
  selectIsAuthenticated,
} from '@/services/redux/authSlice';

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuthenticated);
  const status = useAppSelector(selectAuthStatus);

  if (status === 'success') {
    return isAuth ? (
      <RootLayout />
    ) : (
      <Navigate
        to='/sign-in'
        state={{ from: location }}
        replace
      />
    );
  }
};
export default ProtectedRoute;
