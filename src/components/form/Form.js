/** @format */
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   };

  //   const response = await fetch(
  //     "http://localhost:3000/api/users",
  //     requestOptions
  //   );
  //   const jsonData = await response.json();

  //   console.log(jsonData);
  // };

  const [serverError, setServerError] = useState(null);
  console.log(serverError);
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://user-server-tau.vercel.app/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setServerError(error.message);
    }
  };
  return (
    <div className="mt-8">
      <div className="bg-white py-8 px-16 shadow rounded">
        <form onSubmit={handleSubmit(onSubmit)} action="#">
          <div className="">
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-600 focus:ring-1 "
                type="text"
                name="name"
                {...register("fullName", { required: "Please Add Your Name" })}
              />
              <p className="text-red-600">{errors.fullName?.message}</p>
            </div>
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="email"
            >
              Sectors:
            </label>
            <div className="mt-1">
              <select
                name="sectors"
                id="selecmethod"
                defaultValue=""
                {...register("sectors", {
                  required: "true",
                })}
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
              >
                <option value="" disabled>
                  Select your sector
                </option>

                <option value="Manufacturing">Manufacturing</option>
                <option value="Construction materials">
                  &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
                </option>
                <option value="Electronics and Optics">
                  &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
                </option>
                <option value="Electronics and Optics">
                  &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
                </option>
                <option value="Bakery & confectionery products">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
                  confectionery products
                </option>
                <option value="Beverages">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                </option>
                <option value="Fish">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp;
                  fish products
                </option>
                <option value="Meat products">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp;
                  meat products
                </option>
                <option value="Milk products">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp;
                  dairy products
                </option>

                <option value="Sweets & Snacks">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp;
                  Snacks
                </option>
              </select>

              {errors.sectors && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="flex items-center mt-4">
              <input
                name="checkbox"
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                {...register("checkbox", {
                  required: "Please Agree The Terms",
                })}
              />
              <label
                htmlFor="link-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <p className="text-red-600">{errors.checkbox?.message}</p>
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm mt-4 text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
