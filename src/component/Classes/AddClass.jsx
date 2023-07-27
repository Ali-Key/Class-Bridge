// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import React, { useState } from "react";

// const AddClass = () => {
//   const [addclassnErrror, setAddclssError] = useState(null);

//   const initialValues = {
//     title: "",
//     discbertion: "",

    
//   };

//   const validationSchema = Yup.object({
//     title: Yup.string()
//       .title("Invalid title format")
//       .required("Title is required"),
//     discbertion: Yup.string().required("discbertion is required"),
//   });

//   return (
//     <div className="lg:w-[70%] mx-auto lg:ml-[19%] p-5 shadow rounded mt-10">
//       <div className="grid grid-cols-1 lg:grid-cols-2  space-x-2">
//         <div className="flex flex-col justify-start items-start gap-4 space-y-5 bg-red-400">
//           <img className="w-96 h-80" src="/src/assets/class.png" />
        
//         </div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//         >
//           <Form className="flex flex-col justify-center items-start space-y-6 p-5">
           
//             <Field
//               className="p-3 rounded shadow w-full "
//               type="text"
//               placeholder="Enter Your Title "
//               name="title"
//             />
//             <ErrorMessage
//               name="title"
//               component="div"
//               className="text-red-500 "
//             />
//             <Field
//               className="p-3 rounded shadow w-full "
//               type="text"
//               placeholder="Enter Your discbertion "
//               name="discbertion"
//             />

//             <ErrorMessage
//               name="discbertion"
//               component="div"
//               className="text-left text-blue-800"
//             />
//             <button
//               className="p-3 rounded shadow w-full bg-red-400 text-[#fff]  font-medium text-lg"
//               type="submit"
//             >
//               Add Class
//             </button>

            
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default AddClass;

