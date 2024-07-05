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
            <section className="mb-6 md:mb-0 w-full h-[55vh] lg:h-[70vh] max-w-7xl flex flex-col lg:flex-row justify-center items-center">
                <div className="text-white py-6 w-[100%] flex flex-1 flex-col justify-center items-center ">
                    <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="w-[90%] my-2 text-center lg:text-left font-semibold text-5xl">Пътна Помощ</motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={h1Variants} className="w-[90%] font-extralight opacity-75 text-center lg:text-left text-lg">Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени.</motion.p>
                </div>
                <motion.img initial="hidden" animate="visible" variants={h1Variants} src="towBg.webp" className="flex-1 w-[90%] h-[90%] lg:w-1/2 object-cover rounded-md" />
            </section>
            <motion.div initial="hidden" animate="visible" variants={h2Variants} className="w-full md:my-4 my-12 min-h-[150px] bg-background flex flex-col lg:flex-row">
                <span className="flex-1 border-t lg:border-b border-dashed border-opacity-15 border-white  w-full h-[150px]  text-white py-4 flex justify-center lg:border-r-0 items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/non-stop.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto " />
                        <div className="text-white">
                            <p className="text-lg font-semibold">Работим 24ч. в денонощието</p>
                        </div>
                    </div>
                </span>
                <a target="_blank"
                    href="tel:097648567539" className="w-full border-t border-b border-dashed border-opacity-15 mx-auto flex-1 h-[150px] py-4 gap-4 flex justify-center items-center overflow-hidden border border-accent bg-accent">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/phonecall.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="text-lg font-semibold">Позвънете на 097648567539</p>
                        </div>
                    </div>
                </a>
                <span className="border-dashed border-opacity-15 border-white lg:border-t border-b  flex-1 w-full h-[150px] text-white  py-4 flex justify-center items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/quality.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="text-lg font-semibold">Ние сме лицензирана фирма</p>
                        </div>
                    </div>
                </span>

            </motion.div>
        </>
    )
}
export default TowHero