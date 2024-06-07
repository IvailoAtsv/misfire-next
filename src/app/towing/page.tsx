import { FaPhone } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Towing = () => {
    return (
        <main className="w-full relative mt-[80px] flex flex-col justify-normal items-center">
            <section className="w-full h-[600px] max-w-[1400px] flex flex-col md:flex-row justify-center items-center">
                <div className="text-white w-[100%] flex flex-1 flex-col justify-center items-center ">
                    <h1 className="w-[90%] my-2 font-semibold text-5xl">Пътна Помощ</h1>
                    <p className="w-[90%] font-extralight text-lg">Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени. Доверете ни се да ви върнем на пътя.</p>
                </div>
                <img src="towBg.jpg" className="flex-1 w-[90%] h-[90%] md:w-1/2 object-cover rounded-md" />
            </section>
            <div className="w-full my-6 min-h-[150px] bg-background flex flex-col md:flex-row">
                <span className="flex-1 w-full h-[150px] text-white border-2 border-white  border-dashed border-opacity-15 py-4 flex justify-center md:border-r-0 items-center gap-4">
                    <img src="/non-stop.svg" className="h-[65%] " />
                     <div className="text-white">
                        <p className="opacity-75">работим всеки ден</p>
                        <p className="text-lg font-normal">Работим 24ч. в денонощието</p>
                    </div>
                </span>
                <a target="_blank"
                    href="tel:097648567539" className="flex-1 h-[150px] py-4 gap-4 flex justify-center items-center overflow-hidden border border-accent bg-accent">
                    <img src="/phonecall.svg" className="h-[65%]" />
                   <div className="text-white">
                        <p className="opacity-75">при нужда от помощ</p>
                        <p className="text-lg font-semibold">позвънете на 097648567539</p>
                    </div>
                </a>
                <span className="flex-1 w-full h-[150px] text-white border-2 border-white  border-dashed border-opacity-15 py-4 flex justify-center md:border-l-0 items-center gap-4">
                    <img src="/quality.svg" className="h-[65%] " />
                     <div className="text-white">
                        <p className="opacity-75">Гаранция за качествo</p>
                        <p className="text-lg font-semibold">Професиолано обслужване</p>
                    </div>
                </span>
            </div>
        </main>
    )
}

export default Towing