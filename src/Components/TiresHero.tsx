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
            <section className="mb-6 mt-[60px] md:mb-0 w-full h-[60vh] container flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="text-white w-[100%] flex flex-1 gap-2 flex-col justify-center items-center p-4">
                    <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="w-full my-2 text-center lg:text-left font-light text-h2clamp">Смяна на Гуми</motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={h2Variants} className="w-full font-extralight opacity-75 text-center lg:text-left text-lg">Бърза и професионална смяна на гуми. Разберете цената и услугите, които предлагаме.</motion.p>
                    <motion.div initial="hidden" animate="visible" variants={buttonVariants} className="lg:self-start self-center pt-4">
                    <motion.a  href="#tire-form" className="whitespace-nowrap self-center hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">Направете запитване</motion.a>
                    </motion.div>
                </div>
                <motion.img initial="hidden" animate="visible" variants={h1Variants} src="tire-shop.jpg" className="flex-1 w-[90%] h-[95%] lg:w-1/2 object-cover object-top rounded-md" />
            </section>

        </>
    )
}
export default TireHero

