import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Signup from "../../assets/signup.png";

const SignUp = () => {
  const [registerError, setRegisterError] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    Role: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="lg:w-[70%] mx-auto lg:ml-[19%] p-5 shadow rounded mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2  space-x-2">
        <div className="flex flex-col justify-start items-start gap-4 space-y-5 bg-red-400 rounded-lg">
          <img className="w-100 h-90 " src="\src\assets\Signup.png" />
         
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col justify-center items-start text-center space-y-6 p-5">
           
            {/* <div className="mb-5">
              {registerError && (
                <div className="text-red-500">{registerError}</div>
              )}
            </div> */}
            
              <Field
                className="p-3 rounded shadow w-full "
                type="text"
                placeholder="Enter Your name "
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
           
           
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="p-3 rounded shadow w-full "              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
        
         
              <Field as="select" name="Role" className="p-3 rounded shadow w-full "   >
                <option value="red">Admin</option>
                <option value="green">Teacher</option>
                <option value="blue">Student</option>
              </Field>

              <ErrorMessage
                name="Role"
                component="div"
                className="text-red-500"
              />
           
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="p-3 rounded shadow w-full "              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
        

            <button
             className="p-3 rounded shadow w-full bg-red-400 text-[#fff] text-lg"
             type="submit"
            >
              Register
            </button>
            <div className=" flex justify-center mt-5 text-base text-center lg:w-[80%] space-x-2">
            <p className="text-sm ">Already have account?</p>
            <Link to="/Login" className="text-sm text-red-400 font-medium ">
              Sign in
            </Link>
          </div>
          </Form>
        </Formik>
       
      </div>
    </div>
  );
};

export default SignUp;
