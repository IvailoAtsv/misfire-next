'use client'
import { motion } from "framer-motion";
import TiresForm from "./TiresForm";

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
            <section className="mb-6 md:mb-0 w-full min-h-screen py-20 container grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
                  <TiresForm/>
                <div className="text-white w-[100%] flex flex-1 gap-2 flex-col justify-center items-center p-4">
                    {/* <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="w-full my-2 text-center lg:text-left font-light text-h2clamp">Смяна на Гуми</motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={h2Variants} className="w-full font-extralight opacity-75 text-center lg:text-left text-lg">Монтаж, Демонтаж, Баланс и Продажба на гуми, нови и втора употреба. <br/> За наличности се свържете с нас.</motion.p> */}
                    <motion.div initial="hidden" animate="visible" variants={buttonVariants} className="lg:self-start self-center pt-4">
                    <img src="/tires.webp" className="rounded-lg object-cover h-[60vh]"/>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default TireHero

