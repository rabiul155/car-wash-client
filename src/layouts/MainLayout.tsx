import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;
