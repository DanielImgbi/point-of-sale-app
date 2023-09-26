import SideNavBar from "./SideNavBar";

import { Outlet } from "react-router-dom";

const Platform = () => {
  return (
    <section className="w-full h-full flex bg-[#80808021]">
      <SideNavBar />
      <div className="w-[95%]">
        <Outlet />
      </div>
    </section>
  );
};

export default Platform;
