// import { useAppSelector } from '@/utils/hooks/useGlobals';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import RootLayout from './RootLayout';
// import { useEffect } from 'react';
import { useAppSelector } from '@/services/redux/store';
import { authStatus, isAuthenticated } from '@/services/redux/authSlice';

const ProtectedRoute = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const isAuth = useAppSelector(isAuthenticated);
  const status = useAppSelector(authStatus);
  console.log(isAuth);

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
