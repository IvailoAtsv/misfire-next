'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const iconStyle = "hover:text-accent transition duration-300 text-white";

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
  const h2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.4,
      },
    },
  };

  return (
    <main id="home" className="relative w-full h-[60vh]">
      {/* Video for larger screens */}
      <video
        className="hidden object-top md:block absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Video for mobile screens */}
      <video
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover"
        src="/mobileHero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <span className="absolute flex justify-center items-center top-0 left-0 w-full h-[60vh] bg-black bg-opacity-30"></span>
      <div className="relative border-white border-dashed border-opacity-15 border-2 border-t-0 z-20 bg-transparent mx-auto mt-6 flex-col h-[90%] w-[90%] max-w-7xl flex items-center justify-center">
        {/* <div className="absolute z-50 gap-2 top-10 right-[-18px] flex flex-col items-center justify-center">
          <FaInstagram className={iconStyle} size={32} />
          <FaInstagram className={iconStyle} size={32} />
          <FaInstagram className={iconStyle} size={32} />
        </div> */}
        <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="font-semibold tracking-wider leading-tight text-white text-h1clamp">Misfire </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={h1Variants} className="text-white opacity-80 w-[80%] md:w-[50%] text-center mb-4 text-lg font-light">
          Ние сме вашият доверен партньор за тунинг, пътна помощ, гуми и джанти.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="flex flex-col md:flex-row w-auto items-center justify-center gap-2"
        >
          <button className="flex-1 w-full whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">
            <a href="#contact">Свържете се с нас!</a>
          </button>
          <Link href="/tuning" className="flex-1 w-full whitespace-nowrap hover:bg-accent hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-transparent border border-accent px-6 py-3 text-white font-semibold text-md rounded-sm">
            Информация за тунинг
          </Link>
        </motion.div>
      </div>
    </main>
  );
};
