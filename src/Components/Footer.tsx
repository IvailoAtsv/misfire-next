import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const socialIconStyle = "hover:text-accent transition duration-300 text-white";

  return (
    <footer className="w-full bg-black min-h-min md:pt-8 pb-2 md:px-4 pt-4 px-2 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 flex-1 w-full md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Misfire</h2>
          <p className="text-sm opacity-65">© 2024 Misfire. All rights reserved.</p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1 w-full mb-4 md:mb-0">
            <h2 className='font-bold mb-1 text-lg'>Полезни линкове</h2>
            <div className='w-full flex justify-center items-center gap-4'>
          <Link href="/" className="hover:text-accent transition duration-300">Начало</Link>
          <Link href="/tuning" className="whitespace-nowrap hover:text-accent transition duration-300">Тунинг</Link>
          <Link href="/towing" className="whitespace-nowrap hover:text-accent transition duration-300">Пътна помощ</Link>
          <Link href="/wheels" className="whitespace-nowrap hover:text-accent transition duration-300">Гуми & Джанти</Link>
            </div>
        </div>
        <div className="flex flex-1 w-full justify-center md:justify-end items-center gap-4">
          <Link href="tel:097648567539" target="_blank" rel="noopener noreferrer">
            <FaPhone size={22} className={socialIconStyle} />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className={socialIconStyle} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className={socialIconStyle} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className={socialIconStyle} />
          </Link>
        </div>
      </div>
      <div className="mt-4 border-t border-opacity-20 border-white flex items-center justify-center py-2 text-center text-sm opacity-85">
        <p className='py-4'>Powered by оur clients' wives</p>
      </div>
    </footer>
  );
};

export default Footer;
