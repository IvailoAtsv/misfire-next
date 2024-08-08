'use client'
import React from "react";
import Animation from "./Animation";
import Link from "next/link";
const ShapeOne = () => (
	<>
		<svg
			className="absolute blur-md bottom-[10%] left-[5%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
		className="absolute blur-md bottom-[15%] left-[2%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
		className="absolute blur-md bottom-[22%] right-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
			className="absolute blur-md bottom-[10%] right-[5%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
		className="absolute blur-md bottom-[15%] right-[2%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
		className="absolute blur-md bottom-[22%] left-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
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
    <h2 className="w-full mx-auto text-center mt-12 text-white font-bold text-h2clamp">Misfire предлага:</h2>
    <section className="my-6 w-full container mx-auto px-4 flex flex-col gap-6">
      {/* <Animation>
        <div className=" z-20 relative p-4 bg-opacity-45 min-h-[600px] rounded-lg text-white flex flex-col">          
          <img
            src="/img1.webp"
            className="object-cover w-full rounded-t-lg h-64 mb-6"
            alt="Hardware Services"
          />
          <div className="flex flex-col flex-1">
            <h3 className="text-4xl mb-4 font-semibold">Хардуерни Услуги</h3>
            <ul className="list-disc list-inside space-y-2 font-extralight flex-1">
              <li>Ъпгрейди за горивни помпи за високо и ниско налягане</li>
              <li>Даунпайпи</li>
              <li>Заместващи OPF/DPF тръби</li>
              <li>Спортни изпускателни системи</li>
              <li>Cold Air Intake системи</li>
              <li>Интеркулери</li>
              <li>Други</li>
            </ul>
          </div>
        </div>
    </Animation>
    */}
        {/* <Animation>

        <div className="bg-backgroundDark p-4 bg-opacity-45 min-h-[600px] rounded-lg text-white shadow-lg flex flex-col">
          <img
            src="/img6.webp"
            className="object-cover w-full rounded-t-lg h-64 mb-6"
            alt="Software Solutions"
          />
          <div className="flex flex-col flex-1">
            <h3 className="text-4xl mb-4 font-semibold">Софтуерни Решения</h3>
            <ul className="list-disc list-inside space-y-2 font-extralight flex-1">
              <li>Спиране на DPF</li>
              <li>Спиране на EGR</li>
              <li>
                Заключване на електромагнитни съединители на компресори (за
                CREC 3.0TFSI)
              </li>
              <li>
                Заличаване на грешки от Fault Memory на моторния блок при
                премахване на определени системи или т.нар DTC OFF
              </li>
              <li>И още много други</li>
            </ul>
          </div>
        </div>
        </Animation>  */}
      <Animation>

      <section className="relative w-full py-14 text-white">
        <div className="container w-full px-4">
          <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-x-8">
            <div>
              <h2 className="md:text-end text-4xl md:text-6xl leading-tight md:leading-tight font-extralight mb-0">
                Хардуерни Услуги
              </h2>
              <ShapeThree2 />
              <ShapeThree />
              <ShapeFour2 />
            </div>
            <div className="lg:px-4 my-6 lg:my-0">
              <img
              src="/img2.webp"
                className="object-cover min-h-[300px] w-full rounded-lg md:h-full max-h-[600px] bg-center bg-cover"
             />
            </div>
            <div className="pr-7">
             <ul className="list-disc text-xl list-inside space-y-2 font-extralight flex-1">
              <li>Ъпгрейди за горивни помпи за високо и ниско налягане</li>
              <li>Даунпайпи</li>
              <li>Заместващи OPF/DPF тръби</li>
              <li>Спортни изпускателни системи</li>
              <li>Cold Air Intake системи</li>
              <li>Интеркулери</li>
              <li>Други</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
      </Animation>
      <Animation>
      <section className="relative w-full py-14 text-white">
        <div className="container w-full px-4">
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
                className="object-cover min-h-[300px] w-full rounded-lg md:h-full max-h-[600px] bg-center bg-cover"
             />
            </div>
            <div className="pr-7">
            <ul className="list-disc text-xl text-white list-inside space-y-2 font-extralight flex-1">
              <li>Спиране на DPF</li>
              <li>Спиране на EGR</li>
              <li>
                Заключване на електромагнитни съединители на компресори (за
                CREC 3.0TFSI)
              </li>
              <li>
                Заличаване на грешки от Fault Memory на моторния блок при
                премахване на определени системи или т.нар DTC OFF
              </li>
              <li>И още много други</li>
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
