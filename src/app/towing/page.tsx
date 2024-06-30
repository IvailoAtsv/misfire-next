import Pricing from "@/Components/Pricing";
import ServiceCard from "@/Components/ServiceCard";
import { FaPhone } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Towing = () => {
    return (
        <main className="w-full relative mt-[80px] sm:mt-[100px] xl:mt-[60px] flex flex-col justify-normal items-center">
            <section className="mb-6 md:mb-0 w-full h-[500px] max-w-7xl flex flex-col lg:flex-row justify-center items-center">
                <div className="text-white py-6 w-[100%] flex flex-1 flex-col justify-center items-center ">
                    <h1 className="w-[90%] my-2 text-center lg:text-left font-semibold text-5xl">Пътна Помощ</h1>
                    <p className="w-[90%] font-extralight opacity-75 text-center lg:text-left text-lg">Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени.</p>
                </div>
                <img src="towBg.webp" className="flex-1 w-[90%] h-[90%] lg:w-1/2 object-cover rounded-md" />
            </section>
            <div className="w-full md:my-4 my-12 min-h-[150px] bg-background flex flex-col lg:flex-row">
                <span className="flex-1 border-t lg:border-b border-dashed border-opacity-15 border-white  w-full h-[150px]  text-white py-4 flex justify-center lg:border-r-0 items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/non-stop.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto " />
                        <div className="text-white">
                            <p className="opacity-75">работим всеки ден</p>
                            <p className="text-lg font-normal">24ч. в денонощието</p>
                        </div>
                    </div>
                </span>
                <a target="_blank"
                    href="tel:097648567539" className="w-full border-t border-b border-dashed border-opacity-15 mx-auto flex-1 h-[150px] py-4 gap-4 flex justify-center items-center overflow-hidden border border-accent bg-accent">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/phonecall.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="opacity-75">при нужда от помощ</p>
                            <p className="text-lg font-semibold">позвънете на 097648567539</p>
                        </div>
                    </div>
                </a>
                <span className="border-dashed border-opacity-15 border-white lg:border-t border-b  flex-1 w-full h-[150px] text-white  py-4 flex justify-center items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/quality.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="opacity-75">Работим по ДДС</p>
                            <p className="text-lg font-semibold">Лицензирана фирма</p>
                        </div>
                    </div>
                </span>
            </div>
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
