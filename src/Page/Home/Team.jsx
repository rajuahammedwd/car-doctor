import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import img from "../../assets/images/team/1.jpg";
const Team = () => {
  return (
    <div className="my-8  max-w-7xl mx-auto">
      <div className="space-y-3 text-center">
        <p className="text-[#FF3811] font-bold">Team</p>
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <p className="capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {/* Card */}
        <div className="w-96 bg-base-100 shadow rounded p-3 ">
          <div>
            <img src={img} className="rounded bg-slate-100" alt="" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="mt-2 font-bold">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
            <div className="flex justify-center items-center space-x-2">
              <button className="flex items-center justify-center text-[#F5F5F8] rounded-full py-2 px-2 bg-blue-700 hover:text-white transition duration-200">
                <FaFacebook className="text-xl" />
              </button>
              <button className="flex items-center justify-center text-[#F5F5F8]  rounded-full py-2 px-2 bg-[#55ACEE] hover:text-white transition duration-200">
                <FaTwitter className="text-xl" />
              </button>
              <button className="flex items-center justify-center text-[#F5F5F8]  rounded-full py-2 px-2 bg-[#0A66C2] hover:text-white transition duration-200">
                <FaLinkedin className="text-xl" />
              </button>
              <button className="flex items-center justify-center  text-white rounded-full py-2 px-2 bg-[#EF4363] hover:text-white transition duration-200">
                <FaInstagram className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default Team;
