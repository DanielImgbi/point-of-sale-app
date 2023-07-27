/* eslint-disable react/prop-types */
import { FaGoogleWallet } from "react-icons/fa";

const SideNavBar = ({ navItems, handleNavItem }) => {
  return (
    <nav className="w-[4%] bg-white flex flex-col items-center space-y-12">
      <span className="p-3 w-full flex justify-center">
        <FaGoogleWallet className="text-4xl text-green-500" />
      </span>

      <div className="flex flex-col items-center space-y-80">
        <div className="space-y-7 w-full flex flex-col items-center">
          {navItems.slice(0, 4).map((navItem) => (
            <span
              key={navItem.id}
              title={navItem.text}
              onClick={() => handleNavItem(navItem.id, navItem.path)}
              className={`p-2 rounded transition  ${
                navItem.active ? "bg-green-100" : "bg-gray-100"
              } hover:scale-110 hover:text-green-400 hover:bg-green-100 `}
            >
              <navItem.icon
                className={`text-lg cursor-pointer ${
                  navItem.active ? "text-green-500" : "text-gray-500"
                } hover:text-green-400 `}
              />
            </span>
          ))}
        </div>

        <div className="space-y-7 w-full flex justify-center">
          {navItems.slice(4, 5).map((navItem) => (
            <span
              key={navItem.id}
              title={navItem.text}
              onClick={() => handleNavItem(navItem.id, navItem.path)}
              className={`p-2 rounded transition  ${
                navItem.active ? "bg-green-100" : "bg-gray-100"
              } hover:scale-110 hover:text-green-400 hover:bg-green-100 `}
            >
              <navItem.icon
                className={`text-lg cursor-pointer ${
                  navItem.active ? "text-green-500" : "text-gray-500"
                } hover:text-green-400 `}
              />
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};
// ${}
export default SideNavBar;
