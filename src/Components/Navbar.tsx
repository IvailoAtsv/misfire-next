'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'

const navBtnStyle = `hover:text-accent z-40 whitespace-nowrap bg-background  text-lg p-2 md:p-1 transition duration-300 p-1 w-[100%] text-gray-800`
const liStyles = `text-sm bg-background  z-40 whitespace-nowrap block flex justify-center items-center my-1 md:m:0 md:max-w-[180px] rounded`

export function Navbar({ }) {
    const [nav, setNav] = useState(false)
    // const navigate = useNavigate()
    return (
        <nav
            className={`bg-background   text-white font-light flex justify-center items-center fixed w-full z-50 top-0 start-0 shadow-xl`}
        >
            <div
                className={`relative container z-50 flex justify-center items-center w-[95%] min-h-[70px] ${nav ? 'flex justify-center items-center flex-col' : ''
                    }`}
            >
                {/* {nav && <div className='w-screen h-screen z-0 bg-black opacity-40'></div>} */}
                <Link onClick={()=>setNav(false)} href={"/"} className='px-6 py-3 h-[60px] w-[180px]'>
                    <Image alt='logo' src="/misfire-1.png" width={500} height={500} className={`absolute h-[60px] py-1 w-auto top-0 left-0 `} />
                </Link>
                {/* <img
                    // src={logo}
                    className="absolute top-[5px] md:top-[5%] left-[0%] h-[60px] object-cover"
                /> */}
                <button
                    onClick={() => setNav(!nav)}
                    className={` absolute ${nav ? 'top-[15px]' : 'top-[50%] translate-y-[-50%]'} right-0 md:hidden text-black`}
                >
                    {nav ? <IoMdClose size={40} color='white'/> : <IoMenu size={40} color='white'/>}
                </button>

                <ul
                    className={`transition-all z-50 duration-300 ease-out overflow-hidden sm:overflow-auto w-full flex flex-col ${nav ? 'h-auto min-h-[40vh] mt-20' : 'md:h-auto h-0'} md:flex md:flex-row mx-auto  md:justify-end md:gap-4 justify-start items-center rounded-lg`}
                >
                     <li className={liStyles}>
                        <Link className={navBtnStyle} onClick={()=>setNav(false)} href="/tuning">
                                Тунинг
                        </Link>
                    </li>
                     <li className={liStyles}>
                        <Link className={navBtnStyle} onClick={()=>setNav(false)} href="/towing">
                                Пътна помощ
                        </Link>
                    </li>
                     <li className={liStyles}>
                        <Link className={navBtnStyle} onClick={()=>setNav(false)} href="/tires">
                             Гуми
                        </Link>
                    </li>
                     <li className={liStyles}>
                        <Link className={navBtnStyle} onClick={()=>setNav(false)} href="/gallery">
                                Галерия
                        </Link>
                    </li>
                     <li className={liStyles}>
                        <Link className={navBtnStyle} onClick={()=>setNav(false)} href="/pricing">
                                Ценоразпис
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}