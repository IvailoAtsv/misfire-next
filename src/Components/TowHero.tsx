'use client'
import { motion } from "framer-motion";

const TowHero = () =>{
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
            <section className="mb-6 md:mb-0 w-full min-h-[60vh] py-20 container flex flex-col lg:flex-row justify-center gap-4 md:gap-1 items-center">
                <div className="text-white p-4 w-[100%] gap-2 flex flex-1 flex-col justify-center items-center">
                    <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="w-full my-2 text-center lg:text-left font-light text-5xl">Пътна Помощ</motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={h2Variants} className="w-full font-extralight opacity-75 text-center lg:text-left text-lg">Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени.</motion.p>
                    <motion.div initial="hidden" animate="visible" variants={buttonVariants} className="lg:self-start self-center pt-4">
                    <motion.a  href="tel:0877220311" className="whitespace-nowrap self-center hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">Позвънете сега</motion.a>
                    </motion.div>

                </div>
                <motion.img initial="hidden" animate="visible" variants={h1Variants} src="towBg.webp" className="flex-1 w-[90%] h-[95%] lg:w-1/2 object-cover rounded-md" />
            </section>
            <motion.div initial="hidden" animate="visible" variants={h2Variants} className="w-full md:my-4 my-12 min-h-[150px] bg-background flex flex-col lg:flex-row">
                <span className="flex-1 border-t lg:border-b border-opacity-25 border-white  w-full h-[150px]  text-white py-4 flex justify-center lg:border-r-0 items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-center gap-2">
                        <img src="/non-stop.svg" className="h-[65%] max-h-[50px] p-1 max-w-[50px] w-auto " />
                        <div className="text-white">
                            <p className="text-lg font-light">Работим 24ч. в денонощието</p>
                        </div>
                    </div>
                </span>
                <a target="_blank"
                    href="tel:0877220311" className="w-full border-t border-b border-dashed border-opacity-15 mx-auto flex-1 h-[150px] p-1 gap-4 flex justify-center items-center overflow-hidden border border-accent bg-accent">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-center gap-2">
                        <img src="/phonecall.svg" className="h-[65%] max-h-[50px] p-1 max-w-[50px] w-auto" />
                        <p className="text-white text-lg font-light">Позвънете на 0877220311</p>
                    </div>
                </a>
                <span className="border-opacity-25 border-white lg:border-t border-b  flex-1 w-full h-[150px] text-white  py-4 flex justify-center items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-center gap-2">
                        <img src="/quality.svg" className="h-[65%] max-h-[50px] p-1 max-w-[50px] w-auto" />
                        <div className="text-white">
                            <p className="text-lg font-light">Ние сме лицензирана фирма</p>
                        </div>
                    </div>
                </span>

            </motion.div>
        </>
    )
}
export default TowHero