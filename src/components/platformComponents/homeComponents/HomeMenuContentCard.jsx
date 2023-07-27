/* eslint-disable react/prop-types */
const HomeMenuContentCard = ({ bgImage, productName }) => {
  return (
    <div
      className={`min-w-[270px] h-48 flex flex-col relative items-center rounded-md justify-end`}
    >
      <img src={bgImage} className="w-full h-full rounded-md" alt="" />
      <p className="w-full bg-gray-50 bg-opacity-20 absolute backdrop-filter backdrop-blur-md text-center rounded-bl-md rounded-br-md text-gray-200 font-bold text-lg">
        {productName}
      </p>
    </div>
  );
};

export default HomeMenuContentCard;
