import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SaintMary from "../assets/saintmary.png";
import Kaplan from "../assets/kaplan.jpeg";
import Uob from "../assets/uob.svg";


const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((previndex) => (previndex + 1) % 3);
            return updatedIndexes;
        });
    };

    useEffect(() => {
        const interval = setInterval(handleNext,3000);
        return () => clearInterval(interval);},[]);

    const images = [Kaplan, SaintMary, Uob];

    const positions = ['left', 'center', 'right'];
    const imageVariants = {
        left: { x: '-150%', scale: 0.4, zIndex: 1 },
        center: { x: '0%', scale: 0.5, zIndex: 5 },
        right: { x: '150%', scale: 0.3, zIndex: 1 }
    };

    return (
        <div className='relative flex items-center justify-center' style={{ height: "300px", overflow: "hidden", position: "relative",}}>
            {images.map((image, index) => (
                <motion.img
                    key={image}
                    src={image}
                    alt={image}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ 
                        width: '300px',
                        height: '300px', 
                        position: 'fixed',
                    }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;