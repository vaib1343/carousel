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

const transitionOne = {
    from: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    leave: {
        opacity: 0,
    },
};

const transitionTwo = {
    from: {
        opacity: 0,
        transform: "scale(0)",
    },
    enter: {
        opacity: 1,
        transform: "scale(1)",
    },
    leave: {
        opacity: 0,
        transform: "scale(0)",
    },
};

const transitionThree = {
    from: {
        opacity: 0,
        transform: "perspective(600px) rotateX(180deg)",
    },
    enter: {
        opacity: 1,
        transform: "perspective(600px) rotateX(0deg)",
    },
    leave: {
        opacity: 0,
        transform: "perspective(600px) rotateX(-180deg)",
    },
};

const transitionFour = {
    from: {
        opacity: 0,
        transform: "rotate(180deg)",
    },
    enter: {
        opacity: 1,
        transform: "rotate(0deg)",
    },
    leave: {
        opacity: 0,
        transform: "rotate(-180deg)",
    },
};

function App() {
    return (
        <div>
            {/* <Fun/> */}
            {/* <FunSecond/> */}
            {/* <FunThree/> */}
            {/* <FunFour/> */}
            {/* <CarouselBasic/> */}
            <Hero />
            <ContentSection
                carouselPosition="right"
                transitionStyles={transitionOne}
            />
            <ContentSection
                carouselPosition="left"
                transitionStyles={transitionTwo}
            />
            <ContentSection
                carouselPosition="right"
                transitionStyles={transitionThree}
            />
            <ContentSection carouselPosition="left" transitionStyles={transitionFour}/>
            <Footer />
        </div>
    );
}

export default App;
