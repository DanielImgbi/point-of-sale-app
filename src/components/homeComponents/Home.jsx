import pasta from "/pasts-1.jpg";
import pizza from "/pizza-2.jpg";
import burger from "/burger1.jpg";
import frenchDish from "/dish.png";
import chicken from "/chicken1.jpg";
import beefSalad from "/beef_salad.webp";
import chocolateCake from "/newcake6.jpg";

import HomeRecordCard from "./HomeRecordCard";
import HomeMenuContentCard from "./HomeMenuContentCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigateTo = useNavigate();
  return (
    <aside className="w-full max-h-full flex flex-col">
      <div className="flex items-center justify-between p-5">
        <div className="w-2/5 px-10 space-y-5">
          <h1 className="text-5xl font-semibold text-green-400">Welcome,</h1>
          <p className="text-2xl text-gray-600">Moderator Ayebanoah Robert.</p>
          <p className="text-base text-gray-600">
            We are happy to have you here. Below is the summary of all your
            activities.
          </p>
          <button
            className="px-5 py-2 text-gray-100 text-sm font-semibold transition bg-green-400 rounded hover:scale-105"
            onClick={() => navigateTo("/platform/menu")}
          >
            Get Started
          </button>
        </div>
        <div className="w-2/5 h-80 grid grid-cols-2 gap-5">
          <HomeRecordCard title="TOTAL STOCK" value="25" />
          <HomeRecordCard title="TOTAL SALES" value="$250" />
          <HomeRecordCard title="TODAY SALES" value="$89" />
          <HomeRecordCard title="MY SALES" value="No sales yet" />
        </div>
      </div>

      <div className="flex flex-col items-center py-5 space-y-7">
        <h2 className="text-4xl font-semibold text-green-500">
          Here&apos;s our menu today...
        </h2>
        <div className="Carosel w-4/5 p-3 flex space-x-5 overflow-auto">
          <HomeMenuContentCard bgImage={pasta} productName="Pasta" />
          <HomeMenuContentCard bgImage={pizza} productName="Pizza" />
          <HomeMenuContentCard bgImage={burger} productName="Burger" />
          <HomeMenuContentCard bgImage={chicken} productName="Chicken" />
          <HomeMenuContentCard bgImage={beefSalad} productName="Beef Salad" />
          <HomeMenuContentCard bgImage={frenchDish} productName="French Dish" />
          <HomeMenuContentCard
            bgImage={chocolateCake}
            productName="Chocolate Cake"
          />
        </div>
      </div>
    </aside>
  );
};

export default Home;
