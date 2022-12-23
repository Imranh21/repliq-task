import React, { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { client } from "../../axios/client";

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const OnSubmit = useCallback(async (data: any) => {
    try {
      const {
        data: { accessToken },
      } = await client.post("register", {
        email: data.mobileNumber + "@gmail.com",
        password: data.password,
      });
      if (accessToken) {
        localStorage.setItem("token", accessToken);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section className="text-gray-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold ">Create an account</h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(OnSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                  Phone number
                </label>
                <input
                  type="text"
                  {...register("mobileNumber", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Ex: 01800000000"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Submit
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
