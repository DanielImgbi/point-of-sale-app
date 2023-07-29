/* eslint-disable react/prop-types */

const Categories = ({ children }) => {
  return (
    <div className="group bg-white flex items-center cursor-pointer transition text-sm shadow-lg py-2 px-5 rounded-md space-x-4 hover:bg-green-400 hover:scale-105">
      {children}
    </div>
  );
};

export default Categories;
