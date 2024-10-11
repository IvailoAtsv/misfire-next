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
    { label: 'Пътна помощ', description:'Денонощна пътна помощ. Бърза реакция, професионална помощ. Тел за връзка: 0877220311 ; 0877023133', src: 'tow-truck.svg', link: '/towing', clickable: true },
    { label: 'Диагностика', description:"Лицензирана диагностика за BMW, RR, Mini, Audi, Volkswagen, Skoda, Seat, Bentley, Lamborghini, Man. Разполагаме и с универсална диагностика.", src: '/diagnostics.svg' },
    { label: 'Общи ремонти', description:'Извършваме всички видове общи ремонти на ходова част, двигатели, скоростни кутии и др. с гаранция на части и труд от 2 години.', src: '/repair.svg' },
    { label: 'Обслужване', description:'Периодично обслужване и инспекция. Смяна на масла, филтри, компоненти по спирачна система и др.', src: 'maintenance.svg' },
    { label: 'Монтаж, Демонтаж и Баланс', description:'Монтаж, демонтаж и баланс на гуми обикновени, нископрофилни и рънфлат гуми до 24 цола.', src: 'tires-repair.svg' },
    { label: 'Продажба на гуми', description:'Съдействаме при покупката на гуми за автомобили и бусове от всякакъв размер, вид и клас.', src: 'tires.svg' },
    { label: 'Автоклиматици', description:'Предлагаме професионални диагностика, ремонт и зареждане на автоклиматици.', src: 'snowflake.svg' },
];


export const Services = () => {
    return (
        <div
            id="services"
            className="w-full max-w-screen-xl h-auto mb-10 mt-5 py-10 flex flex-col justify-center items-center bg-background"
        >
            {/* <motion.section initial="hidden" animate="visible" variants={buttonVariants} className="w-[90%] container flex-col items-center flex h-full justify-center"> */}
                <Animation>
                    <h2 className="self-center font-bold pb-8 text-3xl md:text-4xl lg:text-5xl w-full text-center text-white">Услуги</h2></Animation>
                <div className="container w-full mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 xl:grid-cols-4">
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

