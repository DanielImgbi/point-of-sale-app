import { FaCartPlus } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="w-56 flex flex-col p-2 bg-white rounded-md space-y-5 transition shadow-md hover:scale-105">
      <div className="w-full h-36 flex justify-end p-2 bg-[url('/pizza-2.jpg')] bg-center rounded-md">
        <span className="h-fit p-2 rounded-md backdrop-filter backdrop-blur-md cursor-pointer bg-gray-200 bg-opacity-25">
          <FaCartPlus className="text-white text-sm" />
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="w-full text-lg font-semibold text-gray-700">
          Latin Pizza
        </h3>
        <p className="w-full text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum
        </p>
        <span className="w-full flex justify-end">
          <p className="text-green-500 font-semibold">$35.6</p>
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
