import { ReactNode } from 'react'
import location from '../images/location.png'
import { FaPhone, FaCity, FaLink } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Animation from './Animation'
import Link from 'next/link'

export const labelStyles = 'text-2xl text-white'
export const inputStyles =
    'bg-accentDark text-lg outline-white p-3 rounded-md w-[100%]'
export const Contact = () => {
    return (
        <Animation maxW='3440px' moveY={120} opacity={0.6} start={0.7}>
            <div

                className="relative max-w-[3440px] mx-auto w-full h-auto  bg-accent flex justify-center items-center"
            >
                <img
                    id='contact-form'
                    src="wave.svg"
                    className="object-cover h-[200px] absolute bottom-[99%] w-[100%]"
                />

                {/* <img
        src="wave-8.svg"
        className=" object-cover rotate-180 absolute h-[150px] top-[98%] w-full"
      /> */}
                <section className="w-full gap-2 lg:max-h-[600px] bg-accent rounded-lg max-w-7xl min-h-[70vh] flex-col lg:flex-row items-center flex justify-center">
                    <form className="text-white max-w-3xl font-normal w-full flex-1 h-full flex p-6 gap-3 flex-col justify-between items-start">
                        <h2 className="text-3xl mb-auto font-bold">Свържете се с нас!</h2>
                        <div className="text-white font-normal w-full flex-1 h-full gap-2 flex flex-col justify-evenly items-start">
                            <FormPair>
                                <label className={labelStyles}>Име:</label>
                                <input type="text" className={inputStyles} />
                            </FormPair>
                            <FormPair>
                                <label className={labelStyles}>Телефонен номер:</label>
                                <input type="text" className={inputStyles} />
                            </FormPair>
                            <FormPair>
                                <label className={labelStyles}>Запитване:</label>
                                <input
                                    type="text"
                                    name="message"
                                    className={inputStyles}
                                />
                            </FormPair>
                            <button className="transition duration-300 bg-white text-accent font-bold w-[30%] ml-auto rounded-md px-4 py-2 mt-2  hover:bg-accentDark hover:text-white">
                                Изпрати
                            </button>
                        </div>
                    <Link target='_blank' className='w-full mt-6' href='https://www.google.com/maps/place/Теди+снакс/@42.1446234,24.8017632,18z/data=!4m6!3m5!1s0x14acd1e8da946b17:0xa8f6964e940d48c5!8m2!3d42.1446477!4d24.8031488!16s%2Fg%2F11j600hyzq?entry=ttu'>
                        <img
                            src='/location.png'
                            className="object-cover mx-auto lg:hidden  mb-6 bg-transparent rounded-blob hover:rounded-blobHover max-h-[450px] transition-all duration-300 hover:scale-105 cursor-pointer h-[80%]"
                            alt="location"
                        />
                    </Link>
                        <section className="w-[100%] text-lg mt-auto flex-col gap-2 lg:flex-row py-2 border-t-2 border-accentDark font-extralight whitespace-nowrap flex justify-between items-start lg:items-center">
                            <div className="flex flex-col gap-2 text-left justify-center items-start">

                                <p className="font-extralight whitespace-nowrap flex items-center gap-2">
                                    <FaCity />
                                    жк. Тракия, Пловдив
                                </p>
                                <a
                                    className="font-extralight whitespace-nowrap flex cursor-pointer  no-underline items-center gap-2"
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Автосервиз+Мисфайър+Misfire+Service,+NPZ+Iskar,+ul.+%225001-va%22+п.к.+25,+1528+Sofia/data=!4m2!3m1!1s0x40aa87fb134b59fd:0x774ef5f2cc3c7204?utm_source=mstt_1&entry=gps&g_ep=CAESCjExLjExOS4xMDEYACDXggMqJCw0NzA3NTkxNSw0NzA4NzExOCw0NzA4NDM4Nyw5NDIxMzE5NEICQkc%3D"
                                >
                                    <FaLocationDot />Ягодовско шосе 17 <FaLink />
                                </a>

                                <a
                                    target="_blank"
                                    href="tel:097648567539"
                                    className="font-extralight whitespace-nowrap cursor-pointer flex items-center gap-2"
                                >
                                    <FaPhone /> 097648567539 <FaLink />
                                </a>
                            </div>
                            <div className="flexflex-col text-left justify-center gap-2 items-start">
                                <p className="text-xl font-bold whitespace-nowrap">Работно време:</p>
                                <p className='font-extralight whitespace-nowrap opacity-90'>Понеделник-Петък: 10:00-20:00</p>
                                <p className='font-extralight whitespace-nowrap opacity-90'>Събота: 10:00-14:00</p>
                                <p className='font-extralight whitespace-nowrap opacity-90'>Неделя: Затворено</p>
                            </div>
                        </section>
                    </form>
                     <Link target='_blank' href='https://www.google.com/maps/place/Теди+снакс/@42.1446234,24.8017632,18z/data=!4m6!3m5!1s0x14acd1e8da946b17:0xa8f6964e940d48c5!8m2!3d42.1446477!4d24.8031488!16s%2Fg%2F11j600hyzq?entry=ttu'>
                        <img
                            src='/location.png'
                            className="object-cover hidden lg:block mb-6 bg-transparent rounded-blob hover:rounded-blobHover max-h-[450px] transition-all duration-300 hover:scale-105 cursor-pointer h-[80%]"
                            alt="location"
                        />
                    </Link>
                </section>

            </div>
        </Animation>
    )
}
export const FormPair = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex w-full flex-col justify-center items-start">
            {children}
        </div>
    )
}
