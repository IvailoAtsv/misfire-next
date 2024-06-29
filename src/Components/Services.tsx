import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

type Service = {
    label: string
    src: string
    link?: string
    clickable?:boolean
}

const services: Service[] = [
    { label: 'Тунинг', src: '/turbo.svg', link: '/tuning', clickable:true },
    { label: 'Пътна помощ', src: 'tow-truck.svg', link:'/towing', clickable:true },
    { label: 'Диагностика', src: '/diagnostics.svg' },
    { label: 'Общи ремонти', src: '/repair.svg' },
    { label: 'Обслужване', src: 'maintenance.svg' },
    { label: 'Гуми', src: 'tires.svg' },
]


export const Services = () => {
    return (
        <div
            id="services" 
            className="w-full h-auto mb-10 py-10 flex flex-col justify-center items-center bg-background"
        >
            <section className="w-[90%] max-w-7xl flex-col items-center flex h-full justify-center">
                <h2 className="self-center pb-8 text-5xl text-white">Услуги</h2>
                <div className=' max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 xl:grid-cols-4'>
                    {services.map(service => <ServiceCard key={Date.now()} src={service.src}
                                label={service.label}
                                link={service.link}/>)}
                </div>
            </section>
        </div>
    )
}

export const ServiceCard: React.FC<Service> = (service) => {
    return (
        <a href={service?.link}
            className={`p-6 transition duration-300 group flex flex-col justify-between gap-2 items-center text-white rounded-lg border border-white border-opacity-35 flex-1 w-[98%] max-h-[350px] hover:translate-y-[-3px] hover:border-opacity-100 ${service.clickable? 'cursor-pointer':''}`}
        >
            <img src={service.src} className="h-[40%] transition duration-300 group-hover:scale-110 overflow-hidden" />
            <h3 className="text-2xl font-medium" >{service.label}</h3>
            <p className="text-sm w-full text-justify hyphens-auto text-white font-extralight opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                animi rem similique veritatis nostrum recusandae magnam possimus
                esse impedit ad.
            </p>
        </a>
    )
}
