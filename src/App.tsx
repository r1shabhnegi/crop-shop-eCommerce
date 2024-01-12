import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  ProtectedRoute,
  Home,
  SignInForm,
  SignUpForm,
  AuthFormsLayout,
  Products,
  Contact,
  About,
  Catagories,
  Profile,
} from './pages';
import { useEffect } from 'react';
import { useAppDispatch } from './services/redux/store';
import { fetchAuth } from './services/redux/authSlice';
function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cookieFallback = localStorage.getItem('cookieFallback');
    if (
      cookieFallback === '[]' ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      navigate('/sign-in');
    }

    dispatch(fetchAuth());
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

        <Route element={<ProtectedRoute />}>
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
          <Route
            path='/profile/:id'
            element={<Profile />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
