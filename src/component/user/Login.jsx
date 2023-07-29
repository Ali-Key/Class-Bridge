import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginErrror, setLoginError] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="lg:w-[70%] mx-auto lg:ml-[19%] p-8 shadow rounde mt-10 md:w-1/2 font-mono ">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols space-x-2">
        <div className="flex flex-col justify-center items-center gap-6  bg-red-400  rounded-lg text-slate-950">
          <img className="w-96 h-100 mx-auto " src="/src/assets/login.png" />
          <span className="font-normal text-center text-xl lg:w-[80%] ">
            Class Bridge Connet and Collaborate
          </span>
          <span className=" text-base text-center lg:w-[80%] p-4">
            All your Class in One Place
          </span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col justify-center items-start space-y-6 p-5">
           
            <Field
              className="p-3 rounded shadow w-full "
              type="text"
              placeholder="Enter Your Email "
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 "
            />
            <Field
              className="p-3 rounded shadow w-full outline-red-400 "
              type="text"
              placeholder="Enter Your Password "
              name="password"
            />

            <ErrorMessage
              name="password"
              component="div"
              className="text-left text-red-400"
            />
            <button
              className="p-3 rounded shadow w-full bg-red-400 text-[#fff]  font-medium text-lg"
              type="submit"
            >
              Login
            </button>

            <div className="flex justify-center mt-5 text-base text-center lg:w-[80%] space-x-2">
              <p className="text-sm ">Don't have account?</p>
              <Link to="/SignUp" className="text-sm text-red-400 font-medium ">
                Sign Up
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
