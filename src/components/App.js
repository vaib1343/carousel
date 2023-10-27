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
import ScrollAnimation from "./ScrollAnimation/ScrollAnimation";
import Battery from "./Battery/Battery";
import RotateBg from "./Buttons/RotateBg/RotateBg";
import SlideBg from "./Buttons/SlideBg/SlideBg";
import FourSide from "./Buttons/FourSide/FourSide";
import ScaleWidth from "./Buttons/ScaleWidth/ScaleWidth";
import SlideTop from "./Buttons/SlideTop/SlideTop";
import Glow from "./Buttons/Glow/Glow";
import TwoLayer from "./Buttons/TwoLayer/TwoLayer";
import ScaleText from "./Buttons/ScaleText/ScaleText";
import Bubble from "./Buttons/Bubble/Bubble";
import Flip from "./Buttons/Flip/Flip";
import Swipe from "./Buttons/Swipe/Swipe";
import Dots from "./Buttons/Dots/Dots";
import OpenSide from "./Buttons/OpenSide/OpenSide";
import FourCorner from "./Buttons/FourCorner/FourCorner";
import BorderMove from "./Buttons/BorderMove/BorderMove";
import CornerBorderMove from "./Buttons/CornerBorderMove/CornerBorderMove";
import FirstLetter from "./Buttons/FirstLetter/FirstLetter";
import FourSideBorder from "./Buttons/FourSideBorder/FourSideBorder";
import Wave from "./Buttons/Wave/Wave";
import BorderCut from "./Buttons/BorderCut/BorderCut";
import BgShift from "./Buttons/BgShift/BgShift";
import Pulse from "./Buttons/Pulse/Pulse";
import Diamond from "./Buttons/Diamond/Diamond";
import GlowBtn from "./Buttons/GlowBtn/GlowBtn";
import ScaleTil from "./ImageEle/ScaleTil/ScaleTil";
import SwipeRight from "./ImageEle/SwipeRight/SwipeRight";
import ImageReplace from "./ImageEle/ImageReplace/ImageReplace";
import BgSwipe from "./ImageEle/BgSwipe/BgSwipe";
import MultiEle from "./ImageEle/MultiEle/MultiEle";
import RotateEntry from "./ImageEle/RotateEntry/RotateEntry";
import ScaleBg from "./ImageEle/ScaleBg/ScaleBg";
import TBMenu from "./Menu/TBMenu/TBMenu";
import LRBorderMenu from "./Menu/LRBorderMenu/LRBorderMenu";
import FourPartMenu from "./Menu/FourPartMenu/FourPartMenu";
import BBorderMenu from "./Menu/BBorderMenu/BBorderMenu";
import BlurMenu from "./Menu/BlurMenu/BlurMenu";
import SecondText from "./Menu/SecondText/SecondText";
import TwoBorderMenu from "./Menu/TwoBorderMenu/TwoBorderMenu";
import FourBorder from "./Menu/FourBorder/FourBorder";
import RotateBorderMenu from "./Menu/RotateBorderMenu/RotateBorderMenu";
import Text3Dmenu from "./Menu/3DTextMenu/3DTextmenu";
import BgMenu from "./Menu/BgMenu/BgMenu";
import CursorMenu from "./Menu/CursorMenu/CursorMenu";
import GlowMenu from "./Menu/GlowMenu/GlowMenu";
import BottomBorderCard from "./Cards/BottomBorderCard/BottomBorderCard";
import ExpandCard from "./Cards/ExpandCard/ExpandCard";
import ImageMove from "./Cards/ImageMove/ImageMove";
import HoverCard from "./Cards/HoverCard/HoverCard";
import TwoPartCard from "./Cards/TwoPartCard/TwoPartCard";
import PhotoCard from "./Cards/PhotoCard/PhotoCard";
import BottomImage from "./Cards/BottomImage/BottomImage";
import ProductCard from "./Cards/ProductCard/ProductCard";
import ProductCard2 from "./Cards/ProductCard2/ProductCard2";
import SmokieText from "./Text/SmokieText/SmokieText";
import SwipeText from "./Text/SwipeText/SwipeText";
import MenuIcon from "./MenuIcon/MenuIcon";
import TwoBorder from "./TwoBorder/TwoBorder";
import CloseText from "./Text/CloseText/CloseText";
import BlurText from "./Text/BlurText/BlurText";

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
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* button */}
                {/* <RotateBg /> */}
                {/* <SlideBg/> */}
                {/* <FourSide/> */}
                {/* <ScaleWidth/> */}
                {/* <SlideTop/> */}
                {/* <Glow/> */}
                {/* <TwoLayer/> */}
                {/* <ScaleText/> */}
                {/* <Bubble/> */}
                {/* <Flip/> */}
                {/* <Swipe/> */}
                {/* <Dots/> */}
                {/* <OpenSide/> */}
                {/* <FourCorner/> */}
                {/* <BorderMove /> */}
                {/* <CornerBorderMove /> */}
                {/* <FirstLetter/> */}
                {/* <FourSideBorder/> */}
                {/* <Wave/> */}
                {/* <BorderCut/> */}
                {/* <BgShift/> */}
                {/* <Pulse/> */}
                {/* <Diamond /> */}
                {/* <GlowBtn/> */}

                {/* Image? */}
                {/* <ScaleTil /> */}
                {/* <SwipeRight/> */}
                {/* <ImageReplace/> */}
                {/* <BgSwipe/> */}
                {/* <MultiEle/> */}
                {/* <RotateEntry/> */}
                {/* <ScaleBg/> */}

                {/* menu */}
                {/* <TBMenu/> */}
                {/* <LRBorderMenu/> */}
                {/* <FourPartMenu/> */}
                {/* <BBorderMenu/> */}
                {/* <BlurMenu/> */}
                {/* <SecondText /> */}
                {/* <TwoBorderMenu/> */}
                {/* <FourBorder/> */}
                {/* <RotateBorderMenu/> */}
                {/* <Text3Dmenu/> */}
                {/* <BgMenu/> */}
                {/* <CursorMenu /> */}
                {/* <GlowMenu/> */}

                {/* card */}
                {/* <BottomBorderCard/> */}
                {/* <ExpandCard/> */}
                {/* <ImageMove/> */}
                {/* <HoverCard/> */}
                {/* <TwoPartCard/> */}
                {/* <PhotoCard/> */}
                {/* <BottomImage/> */}
                {/* <ProductCard/> */}
                {/* <ProductCard2/> */}

                {/* extra */}
                {/* <SmokieText/> */}
                {/* <SwipeText/> */}
                {/* <MenuIcon/> */}
                {/* <TwoBorder/> */}
                {/* <CloseText /> */}
                <BlurText/>
            </div>
            {/* <ScrollAnimation/> */}
            <Battery />
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
            <ContentSection
                carouselPosition="left"
                transitionStyles={transitionFour}
            />
            <Footer />
        </div>
    );
}

export default App;
