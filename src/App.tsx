import { Route, Routes } from 'react-router-dom';

import {
  AuthLayout,
  Home,
  SignInForm,
  SignUpForm,
  AuthFormsLayout,
} from './pages';

function App() {
  const data = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(console.log);
  };

  data();

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
        </Route>
      </Routes>
    </main>
  );
}

export default App;
