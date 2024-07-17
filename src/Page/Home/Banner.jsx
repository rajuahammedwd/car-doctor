import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="text-white space-y-7 absolute top-1/2 transform -translate-y-1/2 left-0  bg-black/50 p-20 rounded-xl w-full mx-auto max-h-screen">
          <h1 className="text-6xl font-bold">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
          <p className="py-6">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>
        
        <div className="absolute  right-20 bottom-0 flex -translate-y-1/2 transform ">
          <a href="#slide4" className="btn btn-circle mr-2">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle ml-2">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
