import img1 from "../../assets/images/about_us/person.jpg"
import img2 from "../../assets/images/about_us/parts.jpg"
const AboutUs = () => {
  return (
    <div className="hero my-8 lg:h-[600px] lg:w-3/4 mx-auto ">
      <div className="hero-content h-full flex-col lg:flex-row">
       <div className="lg:w-1/2 relative ">
       <img src={img1} className="w-3/4 h-full rounded" alt="" />
       <img src={img2} className="w-2/4 absolute -right-0 -bottom-10 rounded border-white border-8 " alt="" />
       </div>
        <div className="lg:w-1/2">
          <p className="text-[#FF3811] font-bold">About Us</p>
          <h1 className="text-3xl font-bold poppins-semibold">
            We are qualified & of experience in this field!
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. <br/>the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
