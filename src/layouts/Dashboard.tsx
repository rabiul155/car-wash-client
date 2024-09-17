import { Outlet } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import Navbar, { NavItem } from '@/components/shared/Navbar/Navbar';
import Sidebar from './Sidebar';
import Footer from '@/components/shared/Footer/Footer';

function Dashboard() {
  const user = useAppSelector((state) => state.auth.user);

  let navItem;

  if (user?.role === 'admin') {
    navItem = [
      {
        nav: 'Service Management',
        link: '/dashboard/service-management',
      },
      {
        nav: 'Slot Management',
        link: '/dashboard/slot-management',
      },
      {
        nav: 'User Management',
        link: '/dashboard/user-management',
      },
    ] as NavItem[];
  }

  if (user?.role === 'user') {
    navItem = [
      {
        nav: 'My Bookings',
        link: '/dashboard/my-booking',
      },
      {
        nav: 'Account ',
        link: '/dashboard/account',
      },
    ] as NavItem[];
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full min-h-[90vh] flex">
        <div className="w-52 hidden md:block">
          {navItem && <Sidebar navItem={navItem} />}
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
