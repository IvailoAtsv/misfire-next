import Pricing from "@/Components/Pricing";
import ServiceCard from "@/Components/ServiceCard";
import TowHero from "@/Components/TowHero";

const Towing = () => {

    return (
        <main className="w-full relative mt-[80px] sm:mt-[100px] xl:mt-[60px] flex flex-col justify-normal items-center">
            <TowHero />
            <section className="my-6 w-[90%] gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl">
                <ServiceCard label="Транспорт в страната" src="/towed-car.svg"/>
                <ServiceCard label="Транспорт на аварирали автомобили" src="/car-crash.svg"/>
                <ServiceCard label="Транспорт в чужбина" src="/car-breakdown.svg"/>
            </section>
           <Pricing />
        </main>
    )
}

export default Towing;
