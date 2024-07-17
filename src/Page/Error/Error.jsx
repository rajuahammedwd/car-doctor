import { Link } from "react-router-dom";
import img from "../../assets/images/error.png"

const Error = () => {
    return (
        <div className="">
            <div className="flex justify-center">
                <img src={img} className="w-1/2" alt="" />
            </div>
            <div className="flex justify-center">
            <Link to="/" className="bg-[#FF3811] px-4 py-2 rounded text-white font-bold mt-5 hover:bg-[#ff5500ec]">Go To Home</Link> 
            </div>
        </div>
    );
};

export default Error;