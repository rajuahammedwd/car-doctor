import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialMediaLogin = () => {
    return (
        <div className="text-center my-3">
            <h2>or Sign in with</h2>
            <div className="flex justify-center items-center space-x-3 my-5">
            <button className="flex items-center justify-center bg-[#F5F5F8] text-[#3B5998] rounded-full py-4 px-4 hover:bg-blue-700 hover:text-white transition duration-200">
                <FaFacebookF className="text-xl"/>
                </button>
                <button className="flex items-center justify-center bg-[#F5F5F8] text-[#3B5998] rounded-full py-4 px-4 hover:bg-blue-700 hover:text-white transition duration-200">
                <FaLinkedinIn className="text-xl"/>
                </button>
                <button className="flex items-center justify-center bg-[#F5F5F8] text-[#3B5998] rounded-full py-4 px-4 hover:bg-blue-700 hover:text-white transition duration-200">
                <FcGoogle className="text-xl"/>
                </button>
            </div>
        </div>
    );
};

export default SocialMediaLogin;