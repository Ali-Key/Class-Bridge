
// import { BiSolidEdit } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
// import { RiChatDeleteFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
import profile from '../../assets/profile.png'
const Profile = () => {
   
    return (
        <div className=" w-[90%] mx-auto lg:w-[70%] lg:ml-[22%] mt-10 lg:mt-14 text-[#061826] p-3 rounded-md shadow-sm bg-red-400 font-mono ">
            <h1 className="text-base mt-4 ml-2 lg:text-2xl px-10">PROFILE USER</h1>
            <div className="p-10 flex flex-col justify-center items-left gap-2 space-y-5 space-x-3 ">
                <img className="w-[20%]" src= {profile} alt="user profile" />
                <div className=" space-y-4 text-lg font-mono">
                    <p>Name    : Ali Omar</p>
                    <p>Email   : Alikey@gmail.com</p>
                    <p>Active  :  <span className="ml-3"> Online </span> <BsDot size={60} className="text-green-500 inline"/></p>
                    {/* <span className='flex flex-row justify-start gap-4 items-center space-x-5'>
                        <Link>Edit<BiSolidEdit size={25} className="inline ml-3 text-green-500" /></Link>
                        <Link>Delete<RiChatDeleteFill size={25} className="inline ml-3 text-red-500" /></Link>
                    </span> */}
                </div>
            </div>

        </div>
    )
}

export default Profile