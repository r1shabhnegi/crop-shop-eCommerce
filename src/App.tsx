import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  AuthLayout,
  Home,
  SignInForm,
  SignUpForm,
  AuthFormsLayout,
  Products,
  Contact,
  About,
  Catagories,
} from './pages';
import { useEffect } from 'react';
import { checkAuthUser } from './services/redux/authSlice';
import { useAppDispatch } from './utils/hooks/useGlobals';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cookieFallback = localStorage.getItem('cookieFallback');
    // console.log(cookieFallback);
    if (
      cookieFallback === '[]' ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      navigate('/sign-in');
    }
    dispatch(checkAuthUser());
  }, []);

  return (
    <main className='w-full'>
      <Routes>
        <Route element={<AuthFormsLayout />}>
          <Route
            path='/sign-in'
            element={<SignInForm />}
          />
          <Route
            path='/sign-up'
            element={<SignUpForm />}
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/catagories'
            element={<Catagories />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
