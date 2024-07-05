'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import hero1 from '../../public/hero1.webp'
import hero2 from '../../public/hero2.webp'
import hero3 from '../../public/hero3.webp'
import hero4 from '../../public/hero4.webp'
import hero5 from '../../public/hero5.webp'
import hero6 from '../../public/hero6.webp'

export const Hero = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.5,
      },
    },
  };
  const h1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  const images = [hero1,hero2,hero3,hero4,hero5,hero6]

  return (
    <main id="home" className="relative w-full h-[70vh]">
      {/* Video for larger screens */}
     <Carousel autoPlayInterval={3500} hasIndexBoard={false} hasMediaButton={false} images={images} hasSizeButton={false} isAutoPlaying={true} isLoop={true} hasThumbnails={false} hasLeftButton={false} hasRightButton={false} style={{width:"100%", height:'70vh', position:'relative'}}/>
      <span className="absolute flex justify-center items-center top-0 left-0 w-full h-[70vh] bg-black bg-opacity-55"></span>
      <div className="absolute top-0 left-[50%] translate-x-[-50%] z-20 bg-transparent mx-auto mt-6 flex-col h-[90%] w-[90%] max-w-7xl flex items-center justify-center">
        <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="font-semibold tracking-wider leading-tight text-white text-h1clamp">Misfire</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={h1Variants} className="text-white opacity-80 w-[70%] md:w-[50%] text-center mb-4 text-lg font-light">
          Ние сме вашият доверен партньор за тунинг, пътна помощ и гуми.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="flex flex-col md:flex-row w-auto items-center justify-center gap-2"
        >
          <Link href='/#contact-form' className="flex-1 w-full whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">
            Свържете се с нас!
          </Link>
          <Link href="/tuning" className="flex-1 w-full whitespace-nowrap hover:bg-accent hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-transparent border border-accent px-6 py-3 text-white font-semibold text-md rounded-sm">
            Информация за тунинг
          </Link>
        </motion.div>
      </div>
    </main>
  );
};
