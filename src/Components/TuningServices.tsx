import React from "react";
import Animation from "./Animation";

const TuningServices: React.FC = () => {
  return (
      <section className="my-6 w-full max-w-7xl">
        <div className="bg-background p-6 flex flex-col justify-center items-center gap-10 rounded-md text-white">
         <section className="flex flex-col md:flex-row justify-start md:justify-center items-center gap-10 px-4 w-full">
          <img src="/img1.webp" className="object-cover w-[100%] rounded-lg flex-1 lg:max-w-[50%] max-h-[600px] h-[50vh]"/>
          <ul className="list-disc flex-1 w-full list-inside mb-4 font-extralight">
          <h3 className="text-4xl w-full mb-8 mx-auto text-start font-semibold">Хардуерни Услуги</h3>
            <li>Ъпгрейди за горивни помпи за високо и ниско налягане</li>
            <li>Даунпайпи</li>
            <li>Заместващи OPF/DPF тръби</li>
            <li>Спортни изпускателни системи</li>
            <li>Cold Air Intake системи</li>
            <li>Интеркулери</li>
            <li>Други</li>
          </ul>
          </section>
            <section className="flex flex-col-reverse md:flex-row justify-start md:justify-center items-center gap-4 px-4 w-full">
          <ul className="list-disc flex-1 list-inside mb-4 font-extralight">
          <h3 className="text-4xl w-full mb-8 mx-auto text-start font-semibold">Софтуерни Решения</h3>
           <li>Спиране на DPF</li>
            <li>Спиране на EGR</li>
            <li>Заключване на електромагнитни съединители на компресори (за CREC 3.0TFSI)</li>
            <li>Заличаване на грешки от Fault Memory на моторния блок при премахване на определени системи или т.нар DTC OFF</li>
            <li>И още много други</li>
          </ul>
          <img src="/img6.webp" className="object-cover w-[100%] rounded-lg flex-1 lg:max-w-[50%] max-h-[600px] h-[50vh]"/>
          </section>
          <p className="mt-4 text-accent text-lg">За повече информация и персонализирани решения, се свържете с нас.</p>
        </div>
      </section>
  );
};

export default TuningServices;
