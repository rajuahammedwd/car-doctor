import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10">
      <div className="footer max-w-7xl mx-auto">
        <aside>
          <img src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex justify-center items-center space-x-2">
            <button className="flex items-center justify-center text-[#F5F5F8] rounded-full py-2 px-2 bg-slate-900 hover:text-white transition duration-200">
              <FaFacebook className="text-xl" />
            </button>
            <button className="flex items-center justify-center text-[#F5F5F8]  rounded-full py-2 px-2 bg-slate-900  hover:text-white transition duration-200">
              <FaTwitter className="text-xl" />
            </button>
            <button className="flex items-center justify-center text-[#F5F5F8]  rounded-full py-2 px-2 bg-slate-900  hover:text-white transition duration-200">
              <FaLinkedin className="text-xl" />
            </button>
            <button className="flex items-center justify-center  text-white rounded-full py-2 px-2 bg-slate-900  hover:text-white transition duration-200">
              <FaInstagram className="text-xl" />
            </button>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
