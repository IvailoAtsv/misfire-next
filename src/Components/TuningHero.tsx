'use client'
import { motion } from "framer-motion";
import "react-gallery-carousel/dist/index.css";
import Carousel from "react-gallery-carousel";
import img1 from '../../public/img1.webp';
import img2 from '../../public/img2.webp';
import img3 from '../../public/img3.webp';
import img4 from '../../public/img4.webp';
import img5 from '../../public/img5.webp';
import img6 from '../../public/img6.webp';

const images = [img1, img2, img3, img4, img5, img6];
// const images = [img2];
const TuningHero = () => {
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
    <section className="relative w-full h-[60vh] flex flex-col justify-center items-center">
      <Carousel autoPlayInterval={3500} hasIndexBoard={false} hasMediaButton={false} images={images} hasSizeButton={false} isAutoPlaying={true} isLoop={true} hasThumbnails={false} hasLeftButton={false} hasRightButton={false} style={{ width: "100%", height: '60vh', position: 'relative' }} />
      <span className="absolute flex justify-center items-center top-0 left-0 w-full h-[60vh] bg-black bg-opacity-55"></span>
      <span className="absolute text-white top-0 left-[50%] translate-x-[-50%] border-white z-20 bg-transparent mx-auto mt-6 flex-col h-[90%] w-[90%] max-w-7xl flex items-center justify-center">
        <motion.h1 initial="hidden" animate="visible" variants={h1Variants} className="text-h1clamp text-center font-semibold text-white">Тунинг</motion.h1>
        <motion.p initial="hidden" animate="visible" variants={h2Variants} className='w-[90%] text-center opacity-75 md:w-[55%]'>
          Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя и позволява персонализиране според личните предпочитания, водещо до по-отзивчив и приятен автомобил.
        </motion.p>
      </span>        {/* <img className="w-full opacity-35 object-cover" src='/heartline-turbo.png'/> */}

    </section>

  )
}
export default TuningHero