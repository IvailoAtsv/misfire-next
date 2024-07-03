'use client'
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Animation from "./Animation";

type Service = {
    label: string;
    src: string;
    link?: string;
    clickable?: boolean;
};

const services: Service[] = [
    { label: 'Тунинг', src: '/turbo.svg', link: '/tuning', clickable: true },
    { label: 'Пътна помощ', src: 'tow-truck.svg', link: '/towing', clickable: true },
    { label: 'Диагностика', src: '/diagnostics.svg' },
    { label: 'Общи ремонти', src: '/repair.svg' },
    { label: 'Обслужване', src: 'maintenance.svg' },
    { label: 'Монтаж, Демонтаж и Баланс', src: 'tires.svg' },
];

export const Services = () => {
     const buttonVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 0.85,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 1,
      },
    },
  };
    return (
        <div
            id="services"
            className="w-full h-auto mb-10 mt-5 py-10 flex flex-col justify-center items-center bg-background"
        >
            {/* <motion.section initial="hidden" animate="visible" variants={buttonVariants} className="w-[90%] max-w-7xl flex-col items-center flex h-full justify-center"> */}
                <Animation><h2 className="self-center opacity-80 pb-8 text-5xl w-full text-center text-white">Услуги</h2></Animation>
                <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            src={service.src}
                            label={service.label}
                            link={service.link}
                            clickable={service.clickable}
                        />
                    ))}
                </div>
            {/* </motion.section> */}
        </div>
    );
};

export { ServiceCard };

