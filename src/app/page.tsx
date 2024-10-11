import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { Services } from "@/Components/Services";
import FAQ from "@/Components/FAQ";
import Gallery from "@/Components/Gallery";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="mt-[70px] flex flex-col items-center justify-start">
      <Analytics />
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <Services />
      <About />
      <FAQ faqs={faqs}/>
      <Contact />
    </main>
  );
}

const faqs = [
  {
    question: 'Предлагате ли гаранция?',
    answer: 'В автосервиз "Мисфайър" се стремим да предоставим услуги с най-високо качество и увереност в извършената работа. В зависимост от типа ремонт или обслужване, предлагаме гаранция, която покрива вложените части и извършените трудови дейности. Нашата цел е да осигурим спокойствие и сигурност на нашите клиенти, като гарантираме, че техните автомобили ще функционират оптимално и безпроблемно след посещение в нашия сервиз.'
  },
  {
    question: 'Какви са цените?',
    answer: 'Цените за услугите, предлагани от нас, варират в зависимост от сложността и обхвата на извършените ремонти или поддръжка. Стремим се да предложим конкурентни и прозрачни цени, съобразени с качеството на вложените части и експертния труд на нашите специалисти. Част от тях може да намерите в секцията ценоразпис.'
  },
  {
    question: 'Работите ли с BMW?',
    answer: 'Да, автосервиз "Мисфайър" работи с BMW и има богат опит в обслужването и ремонтите. Запознати сме със специфичните нужди и технически характеристики на автомобилите BMW. Предлагаме услуги като ремонт на двигатели, скоростни кутии, диференциали и раздатъчни кутии, окачване и електрически системи, като използваме оргиниални части и съвременни технологии за диагностика и ремонт.'
  },
  {
    question: 'Работите ли с Audi?',
    answer: 'Да, ние в автосервиз "Мисфайър" специализираме и в обслужването и ремонта на автомобили Audi. Нашият екип има задълбочен опит в работата с този бранд и е добре запознат с абсолютно всички технически аспекти на автомобилите Audi.'
  },
  {
    question: 'Работите ли с Mercedes?',
    answer: 'Да, обслужваме, ремонтираме и диагностицираме автомобили от марката Mercedes-Benz. Нашият екип има опит в работата с този бранд и разбира спецификите и високите стандарти на марката. Предлагаме пълна гама от услуги, неразличаваща се от тази за марките BMW и Audi.'
  },
  {
    question: 'С кои други марки автомобили работите?',
    answer: 'В автосервиз "Мисфайър" основната ни специализация е в немските автомобили, включително Porsche, Mercedes-Benz, BMW, Audi и VW. В допълнение, ние също така предлагаме услуги за автомобили от японски производители като Toyota, Honda и Nissan, както и марки от VW групата, като Škoda и SEAT, а също и марки от BMW групата, като MINI. Важно е да отбележим, че НЕ извършваме ремонти, а само и единствено обслужвания на френски автомобили.'
  },
  {
    question: 'Колко време отнема ремонт?',
    answer: (
      <>
        Времето, необходимо за ремонт в при нас може да варира в зависимост от вида и сложността на услугата, която е необходима.
        <ol className="list-decimal list-inside">
          <li>
            <strong>Обслужване</strong> (като смяна на масла, филтри, ремонт на окачване, спирачна система...) обикновено отнемат няколко часа.
          </li>
          <li>
            <strong>Сложни ремонти</strong> (като ремонт на двигатели или скоростни кутии) могат да изискват повече време, обикновено от два до няколко дни, в зависимост от необходимите части и обема на работа.
          </li>
        </ol>
      </>
    )
  },
  {
    question: 'Какви са начините за плащане?',
    answer: (
      <>
        Предлагаме различни удобни начини за плащане, за да улесним нашите клиенти. Можете да извършите плащане по следните начини:
        <ol className="list-decimal list-inside">
          <li>
            <strong>В брой</strong>: Приемаме плащания в брой, което е удобен вариант за много клиенти.
          </li>
          <li>
            <strong>Дебитни и кредитни карти</strong>: Поддържаме плащания с дебитни и кредитни карти, което осигурява бързо и сигурно плащане.
          </li>
          <li>
            <strong>Превод по банка</strong>: За по-големи ремонти или услуги, можете да извършите плащане чрез банков превод. В този случай, ще ви предоставим необходимите данни за извършване на превода.
          </li>
          <li>
            <strong>Мобилни приложения</strong>: Приемаме плащания чрез популярни мобилни приложения и платформи за разплащания, което добавя допълнителна гъвкавост.
          </li>
        </ol>
      </>
    )
  },
  {
    question: 'Имате ли отстъпки?',
    answer: 'Да, предлагаме отстъпки и специални промоции за нашите клиенти. В зависимост от вида на услугите, можем да предоставим отстъпки за:\n- Пакетни услуги: При комбинирано извършване на ремонти или поддръжка на автомобила.\n- Сезонни промоции: Периодично организираме сезонни промоции и специални оферти, свързани с определени услуги или проверки.'
  },
  {
    question: 'Кога е работното ви време?',
    answer: 'Автосервиз "Мисфайър" работи по следното работно време:\n- Понеделник - Петък: 08:30 - 18:00\n- Събота: 09:00 - 14:00\n- Неделя: Почивен ден.'
  }
];
