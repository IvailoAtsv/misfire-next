import { FaPhone } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

const Towing = () => {
    return (
        <main className="w-full relative mt-[80px] sm:mt-[100px] xl:mt-[60px] flex flex-col justify-normal items-center">
            <section className="w-full h-[500px] max-w-[1400px] flex flex-col lg:flex-row justify-center items-center">
                <div className="text-white py-6 w-[100%] flex flex-1 flex-col justify-center items-center ">
                    <h1 className="w-[90%] my-2 text-center lg:text-left font-semibold text-5xl">Пътна Помощ</h1>
                    <p className="w-[90%] font-extralight text-center lg:text-left text-lg">Надеждна пътна помощ 24/7. Бърза реакция, професионална помощ и достъпни цени.</p>
                </div>
                <img src="towBg.webp" className="flex-1 w-[90%] h-[90%] lg:w-1/2 object-cover rounded-md" />
            </section>
            <div className="border-2 border-white  border-dashed border-opacity-15 w-full my-6 min-h-[150px] bg-background flex flex-col lg:flex-row">
                <span className="flex-1 w-full h-[150px] text-white py-4 flex justify-center lg:border-r-0 items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/non-stop.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto " />
                        <div className="text-white">
                            <p className="opacity-75">работим всеки ден</p>
                            <p className="text-lg font-normal">24ч. в денонощието</p>
                        </div>
                    </div>
                </span>
                <a target="_blank"
                    href="tel:097648567539" className="w-full mx-auto flex-1 h-[150px] py-4 gap-4 flex justify-center items-center overflow-hidden border border-accent bg-accent">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/phonecall.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="opacity-75">при нужда от помощ</p>
                            <p className="text-lg font-semibold">позвънете на 097648567539</p>
                        </div>
                    </div>
                </a>
                <span className="flex-1 w-full h-[150px] text-white  py-4 flex justify-center items-center gap-4">
                    <div className="max-w-[400px] flex-1 mx-auto flex items-center justify-start gap-6">
                        <img src="/quality.svg" className="h-[65%] max-h-[70px] max-w-[70px] w-auto" />
                        <div className="text-white">
                            <p className="opacity-75">Работим по ДДС</p>
                            <p className="text-lg font-semibold">Лицензирана фирма</p>
                        </div>
                    </div>
                </span>
            </div>
        </main>
    )
}

export default Towing