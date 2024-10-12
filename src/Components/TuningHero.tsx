'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import "react-gallery-carousel/dist/index.css";
import Carousel from "react-gallery-carousel";
import img1 from '../../public/img1.webp';
import img2 from '../../public/img2.webp';
import img3 from '../../public/img3.webp';
import img4 from '../../public/img4.webp';
import img5 from '../../public/img5.webp';
import img6 from '../../public/img6.webp';

const images = [ img3, img4, img6];
// const images = [img2];
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
  // return (
    // <section className="relative w-full h-[70vh] flex flex-col justify-center items-center">
    //   <Carousel autoPlayInterval={3500} hasIndexBoard={false} hasMediaButton={false} images={images} hasSizeButton={false} isAutoPlaying={true} isLoop={true} hasThumbnails={false} hasLeftButton={false} hasRightButton={false} style={{ width: "100%", height: '70vh', position: 'relative' }} />
    //   <span className="absolute flex justify-center items-center top-0 left-0 w-full h-[70vh] bg-black bg-opacity-55"></span>
    //   <span className="absolute text-white top-0 left-[50%] translate-x-[-50%] border-white z-20 bg-transparent mx-auto mt-6 flex-col h-[90%] w-[90%] container flex items-center justify-center">
    //     <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="text-h1clamp text-center font-semibold text-white">Misfire Тунинг</motion.h1>
    //     <motion.p initial="hidden" animate="visible" variants={h2Variants} className='w-[90%] text-center text-2xl font-extralight opacity-50 md:w-[55%]'>
    //       {/* Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя, което води до по-отзивчив и приятен автомобил. */}
    //       Вдъхнете живот на автомобила си
    //     </motion.p>
    //   </span>        {/* <img className="w-full opacity-35 object-cover" src='/heartline-turbo.png'/> */}

    // </section>
export default function TuningHero(){
return(
    <main id="home" className="relative grid grid-cols-1 lg:grid-cols-5 max-w-[1560px] w-[95%] mx-auto lg:max-h-[900px] min-h-[70vh]">
      {/* Video for larger screens */}
      <div className="text-start col-span-2 z-30 mx-auto mt-6 flex-col h-[90%] w-full container flex items-center md:items-start justify-center">
        <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="font-semibold tracking-wider leading-tight text-white text-center md:text-left text-h1clamp">Misfire<br/> Тунинг</motion.h1>
        <motion.h2 initial="hidden" animate="visible" variants={h1Variants} className="text-white text-center md:text-left opacity-70 pr-4 mb-4 text-lg font-light">
          Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя, което води до по-отзивчив и приятен автомобил.
        </motion.h2>
        {/* <motion.div
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
        </motion.div> */}
      </div>
      <motion.div variants={ImgVariants} initial="hidden" animate="visible" className="relative col-span-3"> 
      <span className="absolute z-20 top-0 left-0 w-full lg:bg-gradient-to-r bg-gradient-to-b from-background from-5% to-transparent  lg:max-h-[900px] min-h-[70vh]"></span>
     <Carousel autoPlayInterval={3500} hasIndexBoard={false} hasMediaButton={false} images={images} hasSizeButton={false} isAutoPlaying={true} isLoop={true} hasThumbnails={false} hasLeftButton={false} hasRightButton={false} style={{width:"100%", height:'70vh'}}/>
      </motion.div>

    </main>
  )
}
