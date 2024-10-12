'use client'
import { FaAnglesRight } from "react-icons/fa6";
import React from "react";
import Animation from "./Animation";
import Link from "next/link";
const ShapeOne = () => (
  <>
    <svg
      className="absolute blur-[30px] opacity-55 bottom-[10%] left-[5%] -z-[1] text-gray-50 dark:text-[#1E2735]"
      width="499"
      height="499"
      viewBox="0 0 600 600"
      fill="#A30A15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="249.5"
        cy="249.5"
        r="249.5"
        fill="#A30A15"
        fillOpacity="1"
      />
    </svg>
  </>
);
const ShapeThree = () => (
  <svg
    className="absolute blur-[30px] opacity-55 bottom-[15%] left-[2%] -z-[1] text-gray-50 dark:text-[#1E2735]"
    width="223"
    height="262"
    viewBox="0 0 223 262"
    fill="#A30A15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M212.555 100.254C224.477 169.763 239.522 246.47 170.132 258.373C100.741 270.275 36.3657 251.51 24.443 182C12.5203 112.491 -30.8157 14.839 38.5748 2.93669C107.965 -8.96565 200.632 30.7447 212.555 100.254Z"
      fill="#A30A15"
      fillOpacity="0.8"
    />
  </svg>
);
const ShapeFour = () => (
  <svg
    className="absolute blur-[30px] opacity-55 bottom-[22%] right-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
    width="155"
    height="166"
    viewBox="0 0 155 166"
    fill="#A30A15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M141.003 54.264C153.758 98.3055 169.054 146.771 125.088 159.504C81.1214 172.237 38.1659 164.793 25.4108 120.751C12.6556 76.7097 -22.4405 16.769 21.5258 4.03561C65.4921 -8.69781 128.248 10.2226 141.003 54.264Z"
      fill="#A30A15"
      fillOpacity="0.8"
    />
  </svg>
);
const ShapeOne2 = () => (
  <>
    <svg
      className="absolute blur-[30px] opacity-55 bottom-[10%] right-[5%] -z-[1] text-gray-50 dark:text-[#1E2735]"
      width="499"
      height="499"
      viewBox="0 0 600 600"
      fill="#A30A15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="249.5"
        cy="249.5"
        r="249.5"
        fill="#A30A15"
        fillOpacity="1"
      />
    </svg>
  </>
);
const ShapeThree2 = () => (
  <svg
    className="absolute blur-[30px] opacity-55 bottom-[15%] right-[2%] -z-[1] text-gray-50 dark:text-[#1E2735]"
    width="223"
    height="262"
    viewBox="0 0 223 262"
    fill="#A30A15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M212.555 100.254C224.477 169.763 239.522 246.47 170.132 258.373C100.741 270.275 36.3657 251.51 24.443 182C12.5203 112.491 -30.8157 14.839 38.5748 2.93669C107.965 -8.96565 200.632 30.7447 212.555 100.254Z"
      fill="#A30A15"
      fillOpacity="0.8"
    />
  </svg>
);
const ShapeFour2 = () => (
  <svg
    className="absolute blur-[30px] opacity-55 bottom-[22%] left-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
    width="155"
    height="166"
    viewBox="0 0 155 166"
    fill="#A30A15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M141.003 54.264C153.758 98.3055 169.054 146.771 125.088 159.504C81.1214 172.237 38.1659 164.793 25.4108 120.751C12.6556 76.7097 -22.4405 16.769 21.5258 4.03561C65.4921 -8.69781 128.248 10.2226 141.003 54.264Z"
      fill="#A30A15"
      fillOpacity="0.8"
    />
  </svg>
);

const TuningServices: React.FC = () => {
  return (
    <>
      <h2 className="w-full  mx-auto text-center mt-12 text-white font-bold text-3xl md:text-4xl lg:text-5xl">Misfire предлага:</h2>
      <section className="max-w-[1560px] w-[95%] my-6 w-full container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <Animation>
          <section className="relative w-full flex flex-col justify-center items-center py-14 text-white">
            <div className="container w-full px-4">
              <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-x-8">
                <div>
                  <h2 className="md:text-end  text-4xl md:text-6xl leading-tight md:leading-tight font-extralight mb-0">
                    Хардуерни Услуги
                  </h2>
                  <ShapeThree2 />
                  <ShapeThree />
                  <ShapeFour2 />
                </div>
                <div className="lg:px-4 my-6 lg:my-0">
                  <img
                    src="/img2.webp"
                    className="object-cover min-h-[300px] w-full rounded-lg md:h-full max-h-[500px] bg-center bg-cover"
                  />
                </div>
                <div className="pr-7">
                  <ul className=" text-xl list-inside space-y-2 font-extralight flex-1">
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Ъпгрейди за горивни помпи за високо и ниско налягане</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Даунпайпи</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Заместващи OPF/DPF тръби</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Спортни изпускателни системи</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Cold Air Intake системи</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Интеркулери</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-red-400" size={28} />Други</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Animation>
        <Animation>
          <section className="relative flex flex-col justify-center items-center w-full py-14 text-white">
            <div className="container rounded-lg p-4 w-full px-4">
              <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-x-8">
                <div>
                  <h2 className="md:text-end text-4xl md:text-6xl leading-tight md:leading-tight font-extralight mb-0">
                    Софтуерни Решения
                  </h2>
                  <ShapeOne2 />
                  <ShapeThree2 />
                  <ShapeFour2 />
                </div>
                <div className="lg:px-4 my-6 lg:my-0">
                  <img
                    src="/img6.webp"
                    className="object-cover min-h-[300px] w-full rounded-lg md:h-full max-h-[500px] bg-center bg-cover"
                  />
                </div>
                <div className="pr-7">
                  <ul className=" text-xl text-white list-inside space-y-2 font-extralight flex-1">
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-blue-400" size={28} />Спиране на DPF</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-blue-400" size={28} />Спиране на EGR</li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-blue-400" size={28} />
                      Заключване на електромагнитни съединители на компресори (за
                      CREC 3.0TFSI)
                    </li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-blue-400" size={28} />
                      Заличаване на грешки от Fault Memory на моторния блок при
                      премахване на определени системи или т.нар DTC OFF
                    </li>
                    <li className="flex items-start justify-start gap-2"><FaAnglesRight className="min-w-[30px] text-blue-400" size={28} />И още много други</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Animation>
        <p className="col-span-1 md:col-span-2 text-white my-4 text-lg text-center">
          За повече информация и персонализирани решения <Link className="underline trnasition duration-300 hover:text-accent" href='/#contact-form'>направете запитване</Link>
        </p>
      </section>
    </>
  );
};

export default TuningServices;
