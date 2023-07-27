import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCircleNotifications } from "react-icons/md";

const Header = () => {
  return (
    <div className="lg:w-[85%] lg:ml-[15%] p-6 shadow border-b-2">
      <div className="flex flex-row justify-between items-center space-x-3 lg:w-[95%] mx-auto">
        <h1 className="lg:text-4xl bg=[#000]">Overview</h1>
        <div className="flex flex-row justify-end items-center gap-3 space-x-4 mr-10 lg:mr-40">
        <MdOutlineCircleNotifications size={25}/>
          <CgProfile size={22} />
          <span>Ali-Key</span>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
