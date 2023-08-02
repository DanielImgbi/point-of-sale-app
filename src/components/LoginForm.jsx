/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const navigator = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const url = "https://point-of-sale-app-api.onrender.com/auth/login";
      try {
        const fetcher = await fetch(url);
        if (!fetcher.ok) {
          throw new Error("Network response was not ok");
        }
        const resp = await fetcher.json();
        console.log(resp);
      } catch (err) {
        console.error("Error Occurred:", err);
      }
    }
    fetchData();
  }, []);

  const onsubmit = (data) => {
    console.log(data);
    navigator("/platform");
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <motion.form
        animate={{ x: 0, opacity: 1 }}
        onSubmit={handleSubmit(onsubmit)}
        initial={{ x: "100vw", opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center items-center space-y-10"
      >
        <h2 className="text-4xl font-semibold">User Login</h2>
        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <input
              type="email"
              placeholder="Email"
              className="w-5/6 outline-none py-2 pl-3"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <span className="w-1/6 h-10 flex items-center justify-center border-l-2 border-green-300">
              <FaEnvelope className="text-gray-500" />
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <input
              type="password"
              placeholder="Password"
              className="w-5/6 outline-none py-2 pl-3"
              {...register("password", {
                required: "This field is required",
              })}
            />
            <span className="w-1/6 h-10 flex items-center justify-center border-l-2 border-green-300">
              <FaLock className="text-gray-500" />
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <select
              className="w-full outline-none py-2 px-3"
              {...register("post", {
                required: "This field is required",
              })}
            >
              <option value="administrator">Administrator</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
        </div>

        <p className="text-red-500 text-sm">{"Incorrect email or password"}</p>

        <button
          className={`w-80 flex py-2 transition items-center justify-center 
        text-center text-white text-lg font-semibold rounded border-none bg-green-500 hover:bg-green-600 hover:scale-105`}
        >
          Submit
        </button>
      </motion.form>
    </main>
  );
};
export default LoginForm;
