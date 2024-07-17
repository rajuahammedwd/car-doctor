import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import OurProducts from "./OurProducts";
import OurService from "./OurService";
import Team from "./Team";
import WhyChoiceUs from "./WhyChoiceUs";


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <AboutUs></AboutUs>
            <OurService></OurService>
            {/* <Contact></Contact> */}
            <OurProducts></OurProducts>
            <Team></Team>
            <WhyChoiceUs></WhyChoiceUs>

        </div>
    );
};

export default Home;