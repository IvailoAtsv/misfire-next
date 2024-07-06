import Pricing from "@/Components/Pricing";
import ServiceCard from "@/Components/ServiceCard";
import TowHero from "@/Components/TowHero";

const Towing = () => {

    return (
        <main className="w-full relative mt-[70px] sm:mt-[100px] md:mt-[70px] flex flex-col justify-normal items-center">
            <TowHero />
                <h2 className="text-3xl text-white font-semibold w-full mx-auto text-center mt-6 mb-3">Услуги</h2>
            <section className="my-6 w-[90%] gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container">
                <ServiceCard label="Транспорт в страната" src="/towed-car.svg"/>
                <ServiceCard label="Транспорт на аварирали автомобили" src="/car-crash.svg"/>
                <ServiceCard label="Транспорт в чужбина" src="/car-breakdown.svg"/>
            </section>
           <Pricing />
        </main>
    )
}

export default Towing;
