import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Service = ({service}) => {
   
    const {_id,title,img,price}=service;
    return (
        <div className="w-96 bg-base-100 shadow rounded p-3">
        <div>
          <img src={img} className="rounded" alt="" />
        </div>
        <div>
        <h2 className="mt-2">{title}</h2>
        <div className="flex justify-between items-center">
        <p className="text-[#FF3811]">Price : $  {price}</p>
        <Link to={`/checkout/${_id}`} className="text-[#ff5500ec]"><FaArrowRight /></Link>
        </div>
        </div>
        </div>
    );
};

export default Service;