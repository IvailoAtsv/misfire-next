import Link from "next/link"
import { FaInstagram } from "react-icons/fa";

const iconStyle = "hover:text-accent transition duration-300 text-white"

export const Hero = () => {

    return (
        <main
            id="home"
            className="relative w-full md:bg-[url('/hero.mp4')] h-[60vh] bg-[url('/mobileHero.mp4')] bg-cover"
        >
            <span className="absolute flex justify-center items-center top-0 left-0 w-full h-[60vh] bg-black bg-opacity-35"></span>
            <div className="relative border-white border-dashed border-opacity-30 border-2 border-t-0 z-20 bg-transparent mx-auto mt-6 flex-col h-[90%] w-[90%] max-w-[1400px] flex items-center justify-center">
                {/* <div className="absolute z-50 gap-2 top-10 right-[-18px] flex flex-col items-center justify-center">
                    <FaInstagram className={iconStyle} size={32}/>
                    <FaInstagram className={iconStyle} size={32}/>
                    <FaInstagram className={iconStyle} size={32}/>
                    </div> */}
                <h1 className="font-semibold leading-tight text-white text-h1clamp">Misfire </h1>
                <p className="text-white opacity-80 w-[80%] md:w-[50%] text-center mb-4 font-light">Трябват ми текстове Габо</p>
                <div className="flex flex-col md:flex-row w-auto items-center justify-center gap-2">
                    <button className="flex-1 w-full whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm"><a href="#contact">Свържете се с нас!</a></button>
                    <Link href='/tuning' className="flex-1 w-full whitespace-nowrap hover:bg-accent hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-transparent border border-accent px-6 py-3 text-white font-semibold text-md rounded-sm">Информация за тунинг</Link>
                </div>
            </div>
        </main>
    )
}
