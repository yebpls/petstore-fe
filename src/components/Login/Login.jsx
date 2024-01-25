import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const form = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // try {
    //   const res = await authApi.login(data);
    //   if (res) {
    //     console.log(res);
    //     let unDecodeToken = res.data.data;
    //     storageService.setAccessToken(unDecodeToken);
    //     const token = jwtDecode(unDecodeToken);
    //     console.log(token);
    //     // loginSuccessNotify();
    //     dispatch(setIsLogin(true));
    //     dispatch(setRole(token.roles));
    //     storageService.setRole(token.roles);
    //     //  else if (role === "Admin") {
    //     //   navigate("/admin");
    //     // } else {
    //     if (role) navigate("/");
    //     // }
    //   }
    // } catch (error) {
    //   // setMessage(error.response.data._message);
    //   // loginFailNotify();
    // }
  };

  return (
    <div className="lg:w-1/2 sm: w-full p-5 sm:mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl mb-4">Đăng nhập</h1>
        <div className="mb-4">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full border-gray-300 border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full border-gray-300 border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400	w-full my-2 text-white px-4 py-2 rounded hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:outline outline-1 focus:outline-none focus:bg-blue-600"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
