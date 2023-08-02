import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaLock, FaEnvelope, FaRegUser, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigator = useNavigate();

  const onsubmit = async (data) => {
    console.log(data);

    const response = await fetch(
      "https://point-of-sales-app-api.onrender.com/auth/signup",

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    localStorage.token = JSON.stringify(response);
    console.log(response);
    // localStorage.Posapp = JSON.stringify({ admins: [], users: [] });
    // let store = JSON.parse(localStorage.Posapp),
    //   adminStore = store.admins,
    //   mainStore = JSON.parse(localStorage.Posapp);

    // adminStore.push(data);
    // mainStore = { ...mainStore, admins: adminStore };
    // localStorage.Posapp = JSON.stringify(mainStore);

    navigator("/platform");
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <motion.form
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onSubmit={handleSubmit(onsubmit)}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center items-center space-y-10"
      >
        <h3 className="font-bold text-4xl">Adiministrator SignUp</h3>

        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <input
              type="text"
              placeholder="Name"
              className="w-5/6 outline-none py-2 pl-3"
              {...register("name", { required: "This field is required" })}
            />
            <span className="w-1/6 h-10 flex items-center justify-center border-l-2 border-green-300">
              <FaRegUser className="text-gray-500" />
            </span>
          </div>
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <input
              type="email"
              placeholder="Email"
              className="w-5/6 outline-none py-2 pl-3"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })}
            />
            <span className="w-1/6 h-10 flex items-center justify-center border-l-2 border-green-300">
              <FaEnvelope className="text-gray-500" />
            </span>
          </div>
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
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
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div className="space-y-2">
          <div className="w-80 flex items-center rounded border-2 border-green-300">
            <input
              type="password"
              placeholder="Password"
              className="w-5/6 outline-none py-2 pl-3"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 7,
                  message: "Password should be 7 or more characters",
                },
              })}
            />
            <span className="w-1/6 h-10 flex items-center justify-center border-l-2 border-green-300">
              <FaLock className="text-gray-500" />
            </span>
          </div>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <button
          className={`w-[315px] flex py-2 transition items-center justify-center 
        text-center text-white text-lg font-semibold rounded border-none bg-green-500 hover:bg-green-600 hover:scale-105`}
        >
          Submit
        </button>
        <motion.span
          className="w-full"
          animate={{ x: 0 }}
          initial={{ x: "100vw" }}
          onClick={() => navigator("/")}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
        >
          <FaArrowLeft className="cursor-pointer hover:text-green-500" />
        </motion.span>
      </motion.form>
    </main>
  );
};

export default Signup;
