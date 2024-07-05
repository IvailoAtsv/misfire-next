'use client'
import React from "react";
import Animation from "./Animation";
import Link from "next/link";

const TuningServices: React.FC = () => {
  return (
    <section className="my-6 w-full container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <Animation>
        <div className="bg-backgroundDark z-20 relative p-4 bg-opacity-45 min-h-[600px] rounded-lg text-white shadow-lg flex flex-col">          
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
        <Animation>

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
        </Animation>
        <p className="col-span-1 md:col-span-2 text-white my-4 text-lg text-center">
          За повече информация и персонализирани решения <Link className="underline trnasition duration-300 hover:text-accent" href='/#contact-form'>направете запитване</Link>
        </p>
      </section>
  );
};

export default TuningServices;
