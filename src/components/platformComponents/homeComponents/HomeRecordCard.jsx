/* eslint-disable react/prop-types */

const HomeRecordCard = ({ title, value }) => {
  return (
    <div className="w-60 h-32 flex flex-col px-5 justify-center space-y-3 border border-gray-300 transition rounded-md hover:scale-105 hover:border-2 hover:border-green-300">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <span className="flex space-x-5 text-gray-600 font-medium">
        <p>Quantity: </p>
        <p className="text-green-400">{value}</p>
      </span>
    </div>
  );
};
export default HomeRecordCard;
