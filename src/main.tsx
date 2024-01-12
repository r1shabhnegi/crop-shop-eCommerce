import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './services/redux/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import { fetchAuth } from './services/redux/authSlice.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/*'
              element={<App />}
            />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
      <Toaster />
    </QueryClientProvider>
  </Provider>
);
