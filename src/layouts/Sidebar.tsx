import { NavItem } from '@/components/shared/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

type SidebarProps = {
  navItem: NavItem[];
};

function Sidebar(props: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-full h-full bg-slate-100 px-4 py-6">
      <ul className="flex flex-col gap-4">
        {props.navItem.map((item) => (
          <Link
            to={item.link}
            className={`${
              currentPath.includes(item.link)
                ? 'text-green-500'
                : 'text-gray-800'
            } flex items-center px-4 p-2  text-sm  font-semibold hover:text-green-500  bg-white rounded-full cursor-pointer`}
            key={item.nav}
          >
            {item.nav}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
