'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import hero1 from '../../public/img1.webp'
import hero2 from '../../public/img2-2.webp'
import hero3 from '../../public/img3-2.webp'
import hero4 from '../../public/img4.webp'
import hero5 from '../../public/img5.webp'

export const Hero = () => {
  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.5,
      },
    },
  };
  const ImgVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.1,
      },
    },
  };
  const h1Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.1,
      },
    },
  };

  const images = [hero1,hero2,hero3,hero4,hero5]

  return (
    <main id="home" className="relative grid grid-cols-1 lg:grid-cols-5 w-[100%] mx-auto lg:max-h-[900px] min-h-[70vh]">
      {/* Video for larger screens */}
      <div className="text-start col-span-2 z-30 md:pl-[8%] lg:pl-[15%] mt-6 flex-col h-[90%] w-full container flex items-center md:items-start justify-center">
        <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="font-semibold tracking-wider leading-tight text-white text-center md:text-left text-h1clamp">Автосервиз <br/> Misfire</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={h1Variants} className="text-white text-center md:text-left opacity-70 md:px-0 px-4 mb-4 text-lg font-light">
          Aвтосервиз за общи ремонти, тунинг, пътна помощ, монтаж, демонтаж и реглаж на гуми.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="flex flex-col md:flex-row w-auto items-center justify-center gap-2"
        >
          <Link href='/#contact-form' className="flex-1 w-full whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">
            Свържете се с нас
          </Link>
          <Link href="/tuning" className="flex-1 w-full whitespace-nowrap hover:bg-accent hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-transparent border border-accent px-6 py-3 text-white font-semibold text-md rounded-sm">
            Информация за тунинг
          </Link>
        </motion.div>
      </div>
      <motion.div variants={ImgVariants} initial="hidden" animate="visible" className="relative col-span-3"> 
      <span className="absolute z-20 top-0 left-0 w-full lg:bg-gradient-to-r bg-gradient-to-b from-background from-5% to-transparent  lg:max-h-[900px] min-h-[70vh]"></span>
     <Carousel autoPlayInterval={3500} hasIndexBoard={false} hasMediaButton={false} images={images} hasSizeButton={false} isAutoPlaying={true} isLoop={true} hasThumbnails={false} hasLeftButton={false} hasRightButton={false} style={{width:"100%", height:'70vh'}}/>
      </motion.div>

    </main>
  );
};
