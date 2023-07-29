import SideNavBar from "./SideNavBar";
import platformContext from "../../contexts/platformContext";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaChartPie,
  FaHome,
  FaTh,
  FaCog,
} from "react-icons/fa";

const Platform = () => {
  const [navItems, setNavItems] = useState([
    { id: 1, path: "/platform", text: "home", icon: FaHome, active: true },
    { id: 2, path: "menu", text: "menu", icon: FaTh, active: false },
    {
      id: 3,
      active: false,
      path: "records",
      text: "records",
      icon: FaChartPie,
    },
    { id: 4, path: "cart", text: "cart", icon: FaShoppingCart, active: false },
    { id: 5, path: "settings", text: "settings", icon: FaCog, active: false },
  ]);

  const navigator = useNavigate();

  const handleNavItem = (id, path) => {
    const newNavItems = navItems.map((navItem) => {
      if (navItem.id === id) {
        return { ...navItem, active: true };
      } else {
        return { ...navItem, active: false };
      }
    });
    setNavItems(newNavItems);
    navigator(path);
  };

  return (
    <platformContext.Provider value={{ navItems, handleNavItem }}>
      <section className="w-full h-full flex bg-[#80808021]">
        <SideNavBar navItems={navItems} handleNavItem={handleNavItem} />
        <div className="w-[96%]">
          <Outlet />
        </div>
      </section>
    </platformContext.Provider>
  );
};

export default Platform;
