'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageSliderProps {
    images: string[]; // Array of image URLs
    duration?: number; // Duration of the animation in milliseconds
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, duration = .5 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    useEffect(() => {
        const intervalId = setInterval(handleNextImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

    // useEffect(() => {
    //     // Menunda animasi untuk memastikan komponen sudah dirender
    //     const timer = setTimeout(() => {
    //       // Trigger animasi setelah 100ms
    //     }, 100);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
        
            <motion.div
                animate="animate"
                initial="initial"
                exit="exit"
                variants={variants}
                transition={{ duration }}
            >
                <img className="w-full h-full object-cover" src={images[currentIndex]} alt="slider" />
            </motion.div>

    );
};

export default ImageSlider;