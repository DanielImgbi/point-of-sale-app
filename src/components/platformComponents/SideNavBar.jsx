import { NavLink } from "react-router-dom";
import { FaGoogleWallet } from "react-icons/fa";
import {
  FaShoppingCart,
  FaChartPie,
  FaHome,
  FaTh,
  FaCog,
} from "react-icons/fa";

const SideNavBar = () => {
  const navItems = [
    { id: 1, path: "home", text: "home", icon: FaHome },
    { id: 2, path: "menu", text: "menu", icon: FaTh },
    { id: 3, path: "cart", text: "records", icon: FaChartPie },
    { id: 4, path: "records", text: "cart", icon: FaShoppingCart },
    { id: 5, path: "settings", text: "settings", icon: FaCog },
  ];
  return (
    <nav className="w-[5%] bg-white flex flex-col items-center space-y-10">
      <span className="py-3 w-full flex justify-center">
        <FaGoogleWallet className="text-5xl text-green-500" />
      </span>

      <div className="flex flex-col items-center space-y-60 py-5">
        <div className="space-y-7 w-full flex flex-col items-center">
          {navItems.slice(0, 4).map((navItem) => (
            <NavLink
              key={navItem.id}
              to={navItem.path}
              title={navItem.text}
              activeClassName="active"
              className="p-2 rounded transition bg-gray-100 hover:scale-110 hover:text-green-400 hover:bg-green-100"
            >
              <navItem.icon className="active-icon text-xl cursor-pointer text-gray-500 hover:text-green-400" />
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center">
          {navItems.slice(4, 5).map((navItem) => (
            <NavLink
              key={navItem.id}
              to={navItem.path}
              title={navItem.text}
              activeClassName="active"
              className="p-2 rounded transition bg-gray-100 hover:scale-110 hover:text-green-400 hover:bg-green-100"
            >
              <navItem.icon className="active-icon text-xl cursor-pointer text-gray-500 hover:text-green-400" />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
// ${}
export default SideNavBar;
