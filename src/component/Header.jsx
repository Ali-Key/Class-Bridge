import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:w-[61%] lg:ml-[15%] p-6 shadow border-b-2  font-mono ">
      <div className="flex flex-row justify-between items-center space-x-3 lg:w-[95%] mx-auto">
        <h1 className="lg:text-4xl bg=[#000]">Overview</h1>
        <div className="flex flex-row justify-end items-center gap-3 space-x-4 mr-10 lg:mr-20">
        <MdOutlineCircleNotifications size={25}/>
        <Link to="/profile" >
          <CgProfile size={25} />
        
              </Link>
         
          <Link to="/profile" className=" text-red-400 font-medium text-lg ">
         
          <span>ALI KEY</span>
              </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
