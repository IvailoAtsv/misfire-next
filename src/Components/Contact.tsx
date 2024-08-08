'use client'
import React, { ReactNode } from 'react';
import { FaPhone, FaCity, FaLink } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Animation from './Animation';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const labelStyles = 'text-xl font-extralight text-white';
export const inputStyles = 'bg-accentDark text-lg outline-white p-3 rounded-md w-[100%]';

const schema = yup.object().shape({
  name: yup.string().required('Името е задължително'),
  phoneNumber: yup.string().matches(/^(0|\+359)\d{9}$/, 'Невалиден телефонен номер').required('Телефонният номер е задължителен'),
  message: yup.string().required('Запитването е задължително'),
});

export const Contact = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Animation maxW='3440px' moveY={120} opacity={0.6} start={0.7}>
      <div className="relative py-6 max-w-[3440px] mx-auto w-full h-auto bg-accent flex justify-center items-center">
        <img
          id='contact-form'
          src="wave.svg"
          className="object-cover h-[200px] absolute bottom-[99%] w-[100%]"
        />
        <section className="w-full gap-3 lg:max-h-[700px] bg-accent rounded-lg container min-h-[70vh] flex-col lg:flex-row items-center flex justify-between">
          <form onSubmit={handleSubmit(onSubmit)} className="text-white max-w-2xl font-normal w-full flex-1 h-full flex p-2 gap-3 flex-col justify-between items-start">
            <div className="text-white font-normal w-full flex-1 h-full gap-2 flex flex-col justify-evenly items-start">
            <h2 className="text-3xl mb-auto font-bold py-4">Свържете се с нас!</h2>
              <FormPair>
                <label className={labelStyles}>* Име:</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`${inputStyles} ${errors.name ? 'border-red-500' : ''}`}
                    />
                  )}
                />
                {errors.name && <p className="text-red-800 text-lg mt-1">{errors.name.message}</p>}
              </FormPair>
              <FormPair>
                <label className={labelStyles}>* Телефонен номер:</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`${inputStyles} ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    />
                  )}
                />
                {errors.phoneNumber && <p className="text-red-800 text-lg mt-1">{errors.phoneNumber.message}</p>}
              </FormPair>
              <FormPair>
                <label className={labelStyles}>* Запитване:</label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`${inputStyles} ${errors.message ? 'border-red-500' : ''}`}
                    />
                  )}
                />
                {errors.message && <p className="text-red-800 text-lg mt-1">{errors.message.message}</p>}
              </FormPair>
              <button type="submit" className="transition duration-300 bg-white text-accent font-bold w-[30%] ml-auto rounded-md px-4 py-2 mt-2 hover:bg-accentDark hover:text-white">
                Изпрати
              </button>
            </div>
            <Link target='_blank' className='w-full mt-6' href='https://www.google.com/maps/place/Теди+снакс/@42.1446234,24.8017632,18z/data=!4m6!3m5!1s0x14acd1e8da946b17:0xa8f6964e940d48c5!8m2!3d42.1446477!4d24.8031488!16s%2Fg%2F11j600hyzq?entry=ttu'>
              <img
                src='/location.png'
                className="object-cover mx-auto md:hidden mb-6 bg-transparent rounded-blob hover:rounded-blobHover max-h-[450px] transition-all duration-300 hover:scale-105 cursor-pointer h-[80%]"
                alt="location"
              />
            </Link>
            <section className="w-[100%] text-md mt-auto flex-col gap-2 lg:flex-row py-2 border-t-2 border-accentDark font-extralight whitespace-nowrap flex justify-between items-start lg:items-center">
              <div className="flex flex-col gap-2 text-left justify-center items-start">
                <p className="font-extralight whitespace-nowrap flex items-center gap-2">
                  <FaCity />
                  жк. Тракия, Пловдив
                </p>
                <a
                  className="font-extralight whitespace-nowrap flex cursor-pointer no-underline items-center gap-2"
                  target="_blank"
                  href="https://www.google.com/maps/place/Автосервиз+Мисфайър+Misfire+Service,+NPZ+Iskar,+ul.+%225001-va%22+п.к.+25,+1528+Sofia/data=!4m2!3m1!1s0x40aa87fb134b59fd:0x774ef5f2cc3c7204?utm_source=mstt_1&entry=gps&g_ep=CAESCjExLjExOS4xMDEYACDXggMqJCw0NzA3NTkxNSw0NzA4NzExOCw0NzA4NDM4Nyw5NDIxMzE5NEICQkc%3D"
                >
                  <FaLocationDot />Ягодовско шосе 17 <FaLink />
                </a>
                <a
                  target="_blank"
                  href="tel:0877220311"
                  className="font-extralight whitespace-nowrap cursor-pointer flex items-center gap-2"
                >
                  <FaPhone /> 0877220311 <FaLink />
                </a>
              </div>
              <div className="flex flex-col text-left justify-center gap-2 items-start">
                <p className="text-lg font-bold whitespace-nowrap">Работно време:</p>
                <p className='font-extralight whitespace-nowrap opacity-90'>Понеделник-Петък: 10:00-20:00</p>
                <p className='font-extralight whitespace-nowrap opacity-90'>Събота: 10:00-14:00</p>
                <p className='font-extralight whitespace-nowrap opacity-90'>Неделя: Затворено</p>
              </div>
            </section>
          </form>
          <Link target='_blank' href='https://www.google.com/maps/place/Теди+снакс/@42.1446234,24.8017632,18z/data=!4m6!3m5!1s0x14acd1e8da946b17:0xa8f6964e940d48c5!8m2!3d42.1446477!4d24.8031488!16s%2Fg%2F11j600hyzq?entry=ttu'>
            <img
              src='/location.png'
              className="object-cover hidden md:block mb-6 bg-transparent rounded-blob hover:rounded-blobHover max-h-[450px] transition-all duration-300 hover:scale-105 cursor-pointer h-[80%]"
              alt="location"
            />
          </Link>
        </section>
      </div>
    </Animation>
  );
};

export const FormPair = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-col justify-center items-start">
      {children}
    </div>
  );
};
