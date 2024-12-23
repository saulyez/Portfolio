import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/cr1.jpg";
import img2 from "../assets/uni.jpg";
import img3 from "../assets/me.jpg";
import img4 from "../assets/coffee.jpg";
import img5 from "../assets/grad.jpg";
import '../Styles/Carousel.css';

const Carousel = () => {
    const images = [img1, img2, img3, img4,img5]; // Hardcoded images

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const slideVariants = {
        hiddenRight: { x: "100%", opacity: 0 },
        hiddenLeft: { x: "-100%", opacity: 0 },
        visible: { x: "0%", opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
    };

    const dotVariants = {
        initial: { y: 0 },
        animate: { y: -10, scale: 1.2, transition: { type: "spring", stiffness: 1000, damping: 10 } },
        hover: { scale: 1.1, transition: { duration: 0.2 } },
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-images">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"
                        variants={slideVariants}
                        alt={`Slide ${currentIndex + 1}`}
                    />
                </AnimatePresence>
                <div className="slide_direction">
                    <motion.div
                        variants={slideVariants}
                        whileHover="hover"
                        className="left"
                        onClick={handlePrev}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </motion.div>
                    <motion.div
                        variants={slideVariants}
                        whileHover="hover"
                        className="right"
                        onClick={handleNext}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        initial="initial"
                        animate={currentIndex === index ? "animate" : "initial"}
                        whileHover="hover"
                        variants={dotVariants}
                    ></motion.div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
