'use client'
import React from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Animation from './Animation';

const schema = yup.object().shape({
  width: yup.string().required('Ширината е задължителна'),
  height: yup.string().required('Височината е задължителна'),
  radius: yup.string().required('Радиусът е задължителен'),
  phoneNumber: yup.string().matches(/^(0|\+359)\d{9}$/, 'Невалиден телефонен номер').required('Телефонният номер е задължителен'),
});

const TireRequestForm: React.FC = () => {
  const { register,handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Animation maxW='3440px'>
    <section className="bg-opacity-40 my-6 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2 bg-backgroundDark p-6 rounded-lg text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <h3 className="text-4xl mb-4 font-semibold">Запитване за гуми</h3>
        <div>
          <label htmlFor="width" className="block text-lg font-light">*Ширина:</label>
          <input
            type="text"
            id="width"
            {...register('width')}
            className={`w-full p-2 mt-1 rounded-md bg-white text-black ${errors.width ? 'border-red-500' : ''}`}
            placeholder="Въведете ширина"
          />
          {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width.message}</p>}
        </div>
        <div>
          <label htmlFor="height" className="block text-lg font-light">*Височина:</label>
          <input
            type="text"
            id="height"
            {...register('height')}
            className={`w-full p-2 mt-1 rounded-md bg-white text-black ${errors.height ? 'border-red-500' : ''}`}
            placeholder="Въведете височина"
          />
          {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>}
        </div>
        <div>
          <label htmlFor="radius" className="block text-lg font-light">*Радиус:</label>
          <input
            type="text"
            id="radius"
            {...register('radius')}
            className={`w-full p-2 mt-1 rounded-md bg-white text-black ${errors.radius ? 'border-red-500' : ''}`}
            placeholder="Въведете радиус"
          />
          {errors.radius && <p className="text-red-500 text-sm mt-1">{errors.radius.message}</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-lg font-light">*Телефон за връзка:</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="phoneNumber"
                className={`w-full p-2 mt-1 rounded-md bg-white text-black ${errors.phoneNumber ? 'border-red-500' : ''}`}
                placeholder="Въведете телефонен номер"
              />
            )}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
        </div>
        <button type="submit" className="w-full bg-accent hover:bg-accentDark transition duration-300 text-white font-semibold py-2 rounded-md">Изпрати</button>
      </form>
      <div className="relative w-full mx-auto md:w-[90%] h-64 md:h-auto flex items-center justify-center">
        <Image
          src="/tires.webp"
          alt="Tire"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
    </Animation>
  );
};

export default TireRequestForm;
