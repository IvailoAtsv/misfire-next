'use client'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Service = {
    label: string;
    src: string;
    link?: string;
    clickable?: boolean;
};

const ServiceCard: React.FC<Service> = (service) => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1", "0.9 1"]
    })

   const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7, 1])
   const opacityProgress = useTransform(scrollYProgress, [0,1], [0, 1])
    
   return (
        <motion.div  style={{
            scale:scaleProgress,
            opacity:opacityProgress,
        }}
            ref={ref}
        >
        <a
            href={service?.link}
            className={`p-6 transition duration-300 group flex flex-col justify-between gap-2 items-center text-white rounded-lg border border-white border-opacity-35 flex-1 w-[98%] max-h-[350px] hover:translate-y-[-3px] hover:border-opacity-100 ${
                service.clickable ? 'cursor-pointer' : ''
            }`}
        >
            <img
                src={service.src}
                className="h-[40%] transition duration-300 group-hover:scale-110 overflow-hidden"
            />
            <h3 className="text-2xl font-medium">{service.label}</h3>
            <p className="text-sm w-full text-justify hyphens-auto text-white font-extralight opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                animi rem similique veritatis nostrum recusandae magnam possimus
                esse impedit ad.
            </p>
        </a>
        </motion.div>
    );
};

export default ServiceCard