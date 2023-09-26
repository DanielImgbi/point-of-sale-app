import { useEffect } from "react";

import Categories from "./Categories";

import {
  //   FaBirthdayCake,
  FaFilter,
  FaHamburger,
  //   FaPizzaSlice,
} from "react-icons/fa";
// import FoodCard from "./FoodCard";
// import { GiChickenOven } from "react-icons/gi";
// import { BiSolidBowlRice } from "react-icons/bi";

const Menu = () => {
  // const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://point-of-sales-app-api.onrender.com/api/menu/"
      );
      const data = response.json();
      data
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
      // setMenus(data);
    };

    fetchData();
  }, []);
  return (
    <aside className="Carosel w-full max-h-full flex flex-col px-10 py-5 overflow-auto space-y-10">
      <header className="w-full flex justify-between items-center">
        <span className="flex flex-col space-y-3">
          <p className="text-2xl font-semibold text-gray-600">
            Welcome, Ayebanoah.
          </p>
          <p className="text-sm text-gray-400">
            We are happy to have you here. Today&apos;s menu...
          </p>
        </span>
        <div className="h-10 flex items-center space-x-5">
          <input
            type="text"
            placeholder="Search product..."
            className="w-72 h-full px-3 rounded-[5px] text-sm focus:outline-none focus:border-2 focus:border-green-300 focus:border-opacity-70"
          />
          <span className="h-full px-3 flex items-center justify-center rounded-[5px] transition bg-white hover:scale-110 hover:text-green-500 hover:bg-green-100 ">
            <FaFilter className="text-base cursor-pointer text-gray-400 hover:text-green-600" />
          </span>
        </div>
      </header>
      <div className="flex flex-col space-y-7">
        <header className="Carosel w-full flex space-x-5 px-1 overflow-auto">
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
          <Categories>
            <span className="text-lg group-hover:text-white">
              <FaHamburger />
            </span>
            <p className="font-semibold group-hover:text-white">Categories</p>
          </Categories>
        </header>
        <section className="max-w-full grid grid-cols-5 gap-10 p-3">
          {/* {menus.map((menu) => (
            <FoodCard key={menu._id} />
          ))} */}
        </section>
      </div>
    </aside>
  );
};

export default Menu;
