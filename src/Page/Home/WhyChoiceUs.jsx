import img1 from "../../assets/icons/group.svg"
import img2 from "../../assets/icons/person.svg"
import img3 from "../../assets/icons/check.svg"
import img5 from "../../assets/icons/Wrench.svg"
import img4 from "../../assets/icons/deliveryt.svg"

const WhyChoiceUs = () => {
  return (
    <div className="my-8 max-w-7xl mx-auto">
      <div className="space-y-3 text-center">
        <p className="text-[#FF3811] font-bold">Core Features</p>
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-10 ">
        {/* Card */}
        <div className="rounded border flex-col justify-center text-center py-10 hover:bg-[#FF3811] hover:text-white">
            <div className="flex justify-center">
            <img src={img1} className="justify-center text-white" alt="" />
            </div>
            <h1>Expert Team</h1>
        </div>
        {/* Card */}
        <div className="rounded border flex-col justify-center text-center py-10 hover:bg-[#FF3811] hover:text-white">
            <div className="flex justify-center">
            <img src={img2} className="justify-center text-white" alt="" />
            </div>
            <h1>24/7 Support</h1>
        </div>
        {/* Card */}
        <div className="rounded border flex-col justify-center text-center py-10 hover:bg-[#FF3811] hover:text-white">
            <div className="flex justify-center">
            <img src={img3} className="justify-center text-white" alt="" />
            </div>
            <h1>100% Guranty</h1>
        </div>
        {/* Card */}
        <div className="rounded border flex-col justify-center text-center py-10 hover:bg-[#FF3811] hover:text-white">
            <div className="flex justify-center">
            <img src={img5} className="justify-center text-white" alt="" />
            </div>
            <h1>Best Equipment</h1>
        </div>
        {/* Card */}
        <div className="rounded border flex-col justify-center text-center py-10 hover:bg-[#FF3811] hover:text-white">
            <div className="flex justify-center">
            <img src={img4} className="justify-center text-white" alt="" />
            </div>
        <p>Timely Delivery</p>
        </div>

      </div>
    </div>
  );
};

export default WhyChoiceUs;
