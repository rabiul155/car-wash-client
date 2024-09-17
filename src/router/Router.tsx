import { createBrowserRouter } from 'react-router-dom';

// Layout
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Services from '@/pages/Services/Services';
import About from '@/pages/About/About';
import Dashboard from '@/layouts/Dashboard';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import ServiceDetails from '@/pages/ServiceDetails/ServiceDetails';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import Review from '@/pages/Review/Review';
import Booking from '@/pages/Booking/Booking';
import ProtectedRoute from './ProtectedRoute';
import MyBooking from '@/pages/MyBooking/MyBooking';
import Account from '@/pages/Account/Account';
import ServiceManagement from '@/pages/ServiceManagement/ServiceManagement';
import UserManagement from '@/pages/UserManagement/UserManagement';
import SlotManagement from '@/pages/SlotManagement/SlotManagement';

//Routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:id',
        element: <ServiceDetails />,
      },
      {
        path: 'booking',
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        ),
      },
      {
        path: 'review',
        element: <Review />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      // User dashboard route
      {
        path: 'my-booking',
        element: <MyBooking />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      // admin dashboard route
      {
        path: 'service-management',
        element: <ServiceManagement />,
      },
      {
        path: 'slot-management',
        element: <SlotManagement />,
      },
      {
        path: 'user-management',
        element: <UserManagement />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
