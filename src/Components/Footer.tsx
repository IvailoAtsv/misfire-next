import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const socialIconStyle = "hover:text-accent transition duration-300 text-white";

  return (
    <footer className="w-full bg-black min-h-min md:pt-8 pb-2 md:px-4 pt-4 px-2 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 flex-1 w-full md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Misfire</h2>
          <p className="text-sm md:pr-8 opacity-65">© 2024 Автосервиз Misfire. All rights reserved.</p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1 w-full mb-4 md:mb-0">
            <h2 className='font-bold mb-1 text-lg'>Полезни линкове</h2>
            <div className='w-full flex justify-center items-center gap-4'>
          <Link href="/" className="hover:text-accent transition duration-300">Начало</Link>
          <Link href="/tuning" className="whitespace-nowrap hover:text-accent transition duration-300">Тунинг</Link>
          <Link href="/towing" className="whitespace-nowrap hover:text-accent transition duration-300">Пътна помощ</Link>
          <Link href="/tires" className="whitespace-nowrap hover:text-accent transition duration-300">Сервиз гуми</Link>
            </div>
        </div>
        <div className="flex flex-1 w-full justify-center md:justify-end items-center gap-4">
          <Link href="tel:0877220311" target="_blank" rel="noopener noreferrer">
            <FaPhone size={22} className={socialIconStyle} />
          </Link>
          <Link href="https://www.facebook.com/p/Автосервиз-Мисфайър-61552471806879/?locale=bg_BG" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className={socialIconStyle} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className={socialIconStyle} />
          </Link>
        </div>
      </div>
      <div className="mt-4 border-t border-opacity-20 border-white flex items-center justify-center py-2 text-center text-sm opacity-85">
        <p className='py-4'>Powered by <a target='_blank' href='https://webdiv.studio' className='underline cursor-pointer transition duration-300 hover:text-accent'>WebDiv</a></p>
      </div>
    </footer>
  );
};

export default Footer;
