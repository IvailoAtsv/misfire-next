import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

type Service = {
    label: string
    src: string
    link?: string
}

const services: Service[] = [
    { label: 'Тунинг', src: '/turbo.svg', link: '/tuning' },
    { label: 'Общи ремонти', src: '/repair.svg' },
    { label: 'Обслужване', src: 'maintenance.svg' },
    { label: 'Гуми', src: 'tires.svg' },
    { label: 'Пътна помощ', src: 'tow-truck.svg' },
    { label: 'Диагностика', src: '/diagnostics.svg' },
]


export const Services = () => {
    return (
        <div
            id="services" 
            className="w-full h-auto mb-10 py-10 flex flex-col justify-center items-center bg-background"
        >
            <section className="w-[90%] max-w-[1400px] flex-col items-center flex h-full justify-center">
                <h2 className="self-center pb-8 text-5xl text-white">Услуги</h2>
                <div className=' max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 xl:grid-cols-4'>
                    {services.map(service => <ServiceCard src={service.src}
                                label={service.label}
                                link={service.link}/>)}
                </div>
            </section>
        </div>
    )
}

const ServiceCard: React.FC<Service> = (service) => {
    return (
        <section
            className="p-6 transition duration-300 group flex flex-col justify-between gap-2 items-center text-white rounded-lg border border-white border-opacity-35 flex-1 w-[98%] max-h-[350px] hover:translate-y-[-3px] hover:border-opacity-100 cursor-pointer"
        >
            <img src={service.src} className="h-[40%] transition duration-300 group-hover:scale-110 overflow-hidden" />
            <h3 className="text-2xl font-medium" >{service.label}</h3>
            <p className="text-sm w-full text-justify hyphens-auto text-white font-extralight opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                animi rem similique veritatis nostrum recusandae magnam possimus
                esse impedit ad.
            </p>

            {/* <button
                disabled={!service.link}
                className={`py-2 mt-auto px-4 rounded-lg border-dashed font-extralight bg-background transition-all duration-300 hover:translate-y-[-3px] border border-white border-opacity-55  hover:border-accent hover:text-accent ${
                    !service.link && 'opacity-0'
                }`}
            >
                {service.link ? (
                    <Link href={service.src} className="flex items-center gap-2">
                        Научете повече <FaArrowRight />
                    </Link>
                ) : (
                    <div className="flex items-center gap-2">
                        Научете повече <FaArrowRight />
                    </div>
                )}
            </button> */}
        </section>
    )
}
