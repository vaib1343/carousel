import "./App.css";
import ContentSection from "./ContentSection/ContentSection";
import Footer from "./Footer/Footer";
import CarouselBasic from "./Fun/CarouselBasic";
import Fun from "./Fun/Fun";
import FunFour from "./Fun/FunFour";
import FunSecond from "./Fun/FunSecond";
import FunThree from "./Fun/FunThree";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import ImageOne from "../assets/img1.jpg";
import ImageTwo from "../assets/img2.jpg";
import ImageThree from "../assets/img3.jpg";
import ImageFour from "../assets/img4.jpg";
import ImageFive from "../assets/img5.jpg";

const SLIDES = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

function App() {
    return (
        <div>
            {/* <Fun/> */}
            {/* <FunSecond/> */}
            {/* <FunThree/> */}
            {/* <FunFour/> */}
            {/* <CarouselBasic/> */}
            <Hero />
            <ContentSection />
            <Footer />
        </div>
    );
}

export default App;
