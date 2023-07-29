import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const AddClass = () => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2  space-x-4 ">
        <div className="flex flex-col justify-start items-start gap-6 space-y-8 bg-red-400 rounded-md">
          <img className="w-96 h-100 mx-auto" src="/src/assets/Addclass.png" alt="Class" />
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

export default AddClass;
