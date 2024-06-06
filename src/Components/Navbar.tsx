'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
const navBtnStyle = `hover:text-accent bg-background text-xl px-4 py-2 md:p-1 bg-background mt-1 border-b-4 hover:border-accentLight border-background md:border-background font-mono transition duration-300 md:px-2 p-1 w-[100%] text-gray-800`
const liStyles = `text-sm bg-background whitespace-nowrap block flex justify-center items-center my-2 md:m:0 'w-[90%] md:max-w-[150px] text-lg sm:text-sm rounded`

export function Navbar({ }) {
    const [nav, setNav] = useState(false)
    // const navigate = useNavigate()
    return (
        <nav
            className={`bg-background text-white font-light overflow-hidden flex justify-center items-center fixed w-full z-50 top-0 start-0 shadow-xl`}
        >
            <div
                className={`relative max-w-[1400px] z-50 flex justify-center items-center w-[90%] min-h-[70px] ${nav ? 'flex justify-center items-center flex-col' : ''
                    } py-1`}
            >
                <Link href={"/"}>
                    <Image alt='logo' src="/misfire-1 2.png" width={500} height={500} className={`absolute h-full max-h-[60px] pb-[3px] w-auto top-[-0px] left-0 `} />
                </Link>
                {/* <img
                    // src={logo}
                    className="absolute top-[5px] md:top-[5%] left-[0%] h-[60px] object-cover"
                /> */}
                <button
                    onClick={() => setNav(!nav)}
                    className={` absolute ${nav ? 'top-[8px]' : 'top-[50%] translate-y-[-50%]'} right-0 md:hidden text-black`}
                >
                    {nav ? <IoMdClose size={40} color='white'/> : <IoMenu size={40} color='white'/>}
                </button>

                <ul
                    className={`transition-all duration-300 ease-out overflow-hidden w-full flex flex-col ${nav ? 'h-auto min-h-[40vh]  pt-[15%]' : 'md:h-auto h-0'} md:flex md:flex-row mx-auto sm:mb-0 mb-10 md:justify-end md:gap-4 justify-start items-center rounded-lg`}
                >
                    <li className={liStyles}>
                        <Link href="/">
                            <button

                                className={navBtnStyle}
                            >
                                Начало
                            </button>
                        </Link>
                    </li>
                    <li className={liStyles}>
                        <Link href="/about">
                            <button

                                className={navBtnStyle}
                            >
                                Пътна помощ
                            </button>
                        </Link>
                    </li>
                    <li className={liStyles}>
                            <button

                                className={navBtnStyle}
                            >
                                Услуги
                            </button>
                    </li>

                    <li className={liStyles}>
                        <Link href="/tuning">
                            <button

                                className={navBtnStyle}
                            >
                                Тунинг
                            </button>
                        </Link>
                    </li>

                    <li className={liStyles}>
                            <button

                                className={navBtnStyle}
                            >
                                Контакти
                            </button>
                    </li>
                    
                </ul>
            </div>
        </nav>

    )
}