import { createBrowserRouter } from 'react-router-dom';

// Layout
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Services from '@/pages/Services/Services';
import About from '@/pages/About/About';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import ServiceDetails from '@/pages/ServiceDetails/ServiceDetails';

//Routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

export default router;
