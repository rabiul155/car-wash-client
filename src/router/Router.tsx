import { createBrowserRouter } from 'react-router-dom';

// Layout
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';

//Routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

export default router;
