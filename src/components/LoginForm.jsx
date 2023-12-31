import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
  const [first, setfirst] = useState();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    const res = await fetch(
      "https://point-of-sales-app-api.onrender.com/api/auth/login/",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const resp = await res.json();
    setfirst(resp);
    console.log(resp);
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

        <p className="w-full text-red-500 text-sm">{JSON.stringify(first)}</p>

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
