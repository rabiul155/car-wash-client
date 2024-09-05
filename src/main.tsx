import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router.tsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </PersistGate>
  </Provider>,
);
