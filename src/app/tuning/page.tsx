import TuningHero from "@/Components/TuningHero";
import TuningServices from "@/Components/TuningServices";

const Tuning = () => {


  return ( 
    <main id="home" className="mt-[60px] flex justify-center items-center flex-col relative w-full min-h-[70vh]">
      <TuningHero />
      <TuningServices/>
</main>
  );
};

export default Tuning

{/* <div className="text-white py-6 w-full flex flex-1 flex-col justify-center items-center">
           В Автосервиз Мисфайър предлагаме професионална помощ за покупка, изработка и монтаж на:
           <ul className="list-disc list-inside">
             <li>Ъпгрейди за горивни помпи за високо и ниско налягане</li>
             <li>Даунпайпи</li>
             <li>Заместващи OPF/DPF тръби</li>
             <li>Спортни изпускателни системи</li>
             <li>Cold Air Intake системи</li>
             <li>Интеркулери</li>
             <li>Други</li>
           </ul>
           Изготвяме необходимите софтуери за подкрепа на хардуерния тунинг и предлагаме индивидуални софтуерни решения за:
           <ul className="list-disc list-inside">
             <li>Спиране на DPF</li>
             <li>Спиране на EGR</li>
             <li>Заключване на електромагнитни съединители на компресори (за CREC 3.0TFSI)</li>
             <li>Заличаване на грешки от Fault Memory на моторния блок при премахване на определени системи или т.нар DTC OFF</li>
             <li>И още много други</li>
           </ul>
         </div> */}