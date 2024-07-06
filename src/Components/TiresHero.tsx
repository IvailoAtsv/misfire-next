'use client'
import { motion } from "framer-motion";

const TireHero = () =>{
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
        <>
            <section className="mb-6 md:mb-0 w-full h-[60vh] container flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="text-white pt-2 w-[100%] flex flex-1 flex-col justify-center items-center ">
                    <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="w-[90%] my-2 text-center lg:text-left font-light text-5xl">Смяна на Гуми</motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={h1Variants} className="w-[90%] font-extralight opacity-75 text-center lg:text-left text-lg">Бърза и професионална смяна на гуми. Разберете цената и услугите, които предлагаме.</motion.p>
                </div>
                <motion.img initial="hidden" animate="visible" variants={h1Variants} src="tire-shop.jpg" className="flex-1 w-[90%] h-[95%] lg:w-1/2 object-cover object-top rounded-md" />
            </section>

        </>
    )
}
export default TireHero

