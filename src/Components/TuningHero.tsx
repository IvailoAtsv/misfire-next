'use client'
import { motion } from "framer-motion";

const TuningHero = () =>{
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
 <span className="w-full gap-4 h-full flex justify-center items-center flex-col absolute top-0 bg-black bg-opacity-50 ">
                    <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="text-4xl text-center font-semibold text-white">Вдъхнете живот на автомобила си</motion.h1>
                    
                    <motion.p initial="hidden" animate="visible" variants={h2Variants} className='w-[90%] text-center text-accent opacity-75 md:w-[65%]'>
                        Glei kvo prai na 2ra
                    </motion.p>
                    <motion.p initial="hidden" animate="visible" variants={h2Variants} className='w-[90%] text-center opacity-75 md:w-[55%]'>
                        Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя и позволява персонализиране според личните предпочитания, водещо до по-отзивчив и приятен автомобил.
                    </motion.p>
                    {/* <img className="w-full opacity-35 object-cover" src='/heartline-turbo.png'/> */}
                </span>
                

          

        </>
    )
}
export default TuningHero