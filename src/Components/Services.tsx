import ServiceCard from "./ServiceCard";

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
    { label: 'Гуми', src: 'tires.svg' },
];

export const Services = () => {
    return (
        <div
            id="services"
            className="w-full h-auto mb-10 mt-5 py-10 flex flex-col justify-center items-center bg-background"
        >
            <section className="w-[90%] max-w-7xl flex-col items-center flex h-full justify-center">
                <h2 className="self-center pb-8 text-5xl text-white">Услуги</h2>
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
            </section>
        </div>
    );
};

export { ServiceCard };

