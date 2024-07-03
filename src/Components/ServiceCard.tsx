import Animation from './Animation';

type Service = {
    label: string;
    src: string;
    link?: string;
    clickable?: boolean;
};

const ServiceCard: React.FC<Service> = (service) => {

   return (
        <Animation opacity={0} start={1.5}>
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
        </Animation>
    );
};

export default ServiceCard