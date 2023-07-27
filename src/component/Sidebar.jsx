import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { GiClassicalKnowledge } from "react-icons/gi";
import { MdOutlineGrade } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { BiLogInCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="lg:w-[15%] fixed top-0 bottom-0 left-0 p-3 bg-[#000] text-[#fff]">
      <div className="flex flex-col justify-start items-center space-y-16 mt-4">
        <h1 className="text-3xl">
          CLASS <span className="text-red-500">BRIDGE</span>
        </h1>
        <ul className="flex flex-col justify-start items-start space-y-6">
          <li className="flex flex-row justify-start items-start  space-x-3"><AiTwotoneHome className="inline" size={20}/> <Link to="/">Home</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><GiClassicalKnowledge className="inline" size={20}/> <Link to="/">Upcoming Classes</Link></li>
          {/* <li className="flex flex-row justify-start items-start  space-x-3"><GiClassicalKnowledge className="inline" size={20}/> <Link to="/AddClass">Add Class</Link></li> */}
          <li className="flex flex-row justify-start items-start  space-x-3"><GiClassicalKnowledge className="inline" size={20}/> <Link to="/Classes">Classes</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><MdOutlineGrade className="inline" size={20}/> <Link to="/">Grades</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><LiaChalkboardTeacherSolid className="inline" size={20}/> <Link to="/">Teachers</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><CiSettings className="inline" size={20}/> <Link to="/">Setting</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><BiLogInCircle className="inline" size={20}/> <Link to="/Login">Login</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><CgProfile className="inline" size={20}/> <Link to="/">Profile</Link></li>
          <li className="flex flex-row justify-start items-start  space-x-3"><BiLogInCircle  className="inline" size={20}/> <Link to="/Login">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};
