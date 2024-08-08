import Animation from './Animation';

type Service = {
    label: string;
    src: string;
    link?: string;
    clickable?: boolean;
    description?:string;
    blur?:boolean;
};

const ServiceCard: React.FC<Service> = (service) => {

   return (
        <Animation>
        <a
            href={service?.link}
            className={`px-2 py-4 ${service?.blur ? "backdrop-blur-lg": ''} transition duration-300 group flex flex-col justify-between gap-2 items-center text-white rounded-lg border border-white border-opacity-15 flex-1 w-[98%] h-[300px] hover:translate-y-[-3px] hover:border-opacity-100 ${
                service.clickable ? 'cursor-pointer' : ''
            }`}
        >
            <img
                src={service.src}
                className="h-[50%] transition duration-300 group-hover:scale-110 overflow-hidden"
            />
            <h3 className="text-xl text-center font-medium">{service.label}</h3>
            <p className="text-sm w-full text-justify text-white font-extralight opacity-75">
                {service.description}
            </p>
        </a>
        </Animation>
    );
};

export default ServiceCard