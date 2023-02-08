/** @format */

import React from "react";
import Form from "./Form";

export default function FormHeader() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-6 lg:px-8 h-screen">
      <img
        className="mx-auto h-16 w-auto"
        src="https://codesmithtech.com/wp-content/uploads/thegem-logos/logo_282e2667dda4332b044dcc883ea0c728_1x.png"
        alt="Workflow"
      />
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create Your Account
      </h3>
      <p className="font-medium text-gray-900">
        Already registered?{" "}
        <a className="font-medium text-blue-500 hover:text-blue-700" href="/">
          Sigh in
        </a>
      </p>
      <Form />
    </div>
  );
}
