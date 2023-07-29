import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const EditClass = () => {
  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="lg:w-[70%] lg:h-[19%] mx-auto lg:ml-[19%] p-8 shadow rounded mt-10 font-mono ">
      <div className="grid grid-cols-1 lg:grid-cols-2  space-x-4  p-5">
          <div className="flex flex-col lg:flex-row justify-start items-start   space-y-6 shadow bg-red-400 rounded-lg ">
            <img
              className="w-40 h-40  p-5 rounded  "
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="flex flex-col justify-start items-start gap-1 space-y-3">
              <h1 className="text-2xl tracking-widest">
                {" "}
                PHP Course Version 2{" "}
              </h1>
              <p className="text-base">Learn The Fundamentals </p>
              <p className="text-base">Hours 2:00PM</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col justify-center items-start space-y-6 p-5 ">
              <Field
                className="p-3 rounded shadow w-full"
                type="text"
                placeholder="Enter Your Title"
                name="title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
              <Field
                className="p-3 rounded shadow w-full"
                type="text"
                placeholder="Enter Your Description"
                name="description"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-left text-red-400"
              />
              <button
                className="p-3 rounded shadow w-full bg-red-400 text-white font-medium text-lg"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add Class"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditClass;