'use client'
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Animation from "./Animation";

type Service = {
    label: string;
    src: string;
    link?: string;
    clickable?: boolean;
    description:string;
};

const services: Service[] = [
    { label: 'Тунинг', description:'Предлагаме висококачествени тунинг услуги за всички видове автомобили. Доверете се на нашите експерти за оптимална производителност.', src: '/turbo.svg', link: '/tuning', clickable: true },
    { label: 'Пътна помощ', description:'Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени. Тел за връзка: 097648567539', src: 'tow-truck.svg', link: '/towing', clickable: true },
    { label: 'Диагностика', description:'Прецизна диагностика на вашия автомобил с модерна апаратура и опитни техници. Осигуряваме точност и професионализъм.', src: '/diagnostics.svg' },
    { label: 'Общи ремонти', description:'Извършваме всички видове общи ремонти за вашия автомобил, с гаранция за качество и изгодни цени. Доверете се на нас.', src: '/repair.svg' },
    { label: 'Обслужване', description:'Пълно обслужване на вашия автомобил, включително смяна на масла, филтри и други консумативи. Висококачествено обслужване.', src: 'maintenance.svg' },
    { label: 'Монтаж, Демонтаж и Баланс', description:'Професионален монтаж, демонтаж и баланс на гуми за максимална безопасност и комфорт. Осигуряваме качествена услуга.', src: 'tires-repair.svg' },
    { label: 'Продажба на гуми', description:'Продаваме всички видове и размери гуми според запитването на клиента. Осигуряваме качество и надеждност.', src: 'tires.svg' },
    { label: 'Продажба на джанти', description:'Продаваме разнообразни висококачествени джанти за всички видове автомобили. Осигуряваме стил и безопасност.', src: 'rims.svg' },
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
                <div className="max-w-7xl w-full mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceCard
                        description={service.description}
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

