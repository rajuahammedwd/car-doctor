import img from "../../assets/images/services/1.jpg"
import img2 from "../../assets/images/services/2.jpg"
import img3 from "../../assets/images/services/3.jpg"
import { FaArrowRight } from "react-icons/fa";

const OurService = () => {
  return (
    <div className="my-8  max-w-7xl mx-auto">
     <div className="space-y-3 text-center">
     <p className="text-[#FF3811] font-bold">Service</p>
      <h1 className="text-3xl font-bold">Our Service Area</h1>
      <p className="capitalize">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {/* Card */}
        <div className="w-96 bg-base-100 shadow rounded p-3">
        <div>
          <img src={img} className="rounded" alt="" />
        </div>
        <div>
        <h2 className="mt-2">Electrical System</h2>
        <div className="flex justify-between items-center">
        <p className="text-[#FF3811]">Price : $  200</p>
        <button className="text-[#ff5500ec]"><FaArrowRight /></button>
        </div>
        </div>
        </div>
        {/* card end */}
        {/* Card */}
        <div className="w-96 bg-base-100 shadow rounded p-3">
        <div>
          <img src={img} className="rounded" alt="" />
        </div>
        <div>
        <h2 className="mt-2">Electrical System</h2>
        <div className="flex justify-between items-center">
        <p className="text-[#FF3811]">Price : $  200</p>
        <button className="text-[#ff5500ec]"><FaArrowRight /></button>
        </div>
        </div>
        </div>
        {/* card end */}
        {/* Card */}
        <div className="w-96 bg-base-100 shadow rounded p-3">
        <div>
          <img src={img} className="rounded" alt="" />
        </div>
        <div>
        <h2 className="mt-2">Electrical System</h2>
        <div className="flex justify-between items-center">
        <p className="text-[#FF3811]">Price : $  200</p>
        <button className="text-[#ff5500ec]"><FaArrowRight /></button>
        </div>
        </div>
        </div>
        {/* card end */}
       
        
     </div>

    </div>
  );
};

export default OurService;
