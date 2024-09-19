import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import ScrollToTop from '@/components/shared/ScrollToTop/ScrollToTop';

function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
export default MainLayout;
