/** @format */

import React from "react";

export default function User() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Cart</h1>
          <div className="flex items-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full">
              Delete
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full ml-4">
              Checkout
            </button>
          </div>
        </div>
        <div className="mt-6">{/* <!-- Add items to cart here --> */}</div>
      </div>
    </div>
  );
}
