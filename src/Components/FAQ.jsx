import Animation from "./Animation"
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "./ui/accordion"
export default function FAQ({ faqs }) {
    return (
        <div className="container mb-[250px] w-full max-w-screen-lg px-4 md:px-6">
            <Animation>
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8">
                    Често задавани въпроси
                </h2>
                <Accordion type="single" collapsible className="w-full max-w-screen-lg mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} className="border-accent" value={`item-${index}`}>
                            <AccordionTrigger className="text-white text-left text-[16px]">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-slate-300">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <section>
                    <p className="text-sm text-white opacity-65 pt-8">Ако имате конкретни въпроси относно условията на гаранцията, не се колебайте да се свържете с нас за повече информация.<br /><br />
                        За да получите конкретна информация относно цените за ремонт препоръчваме да се свържете директно с нас. Ние ще ви предоставим индивидуална оферта и ще ви консултираме относно най-добрите решения за вашия автомобил.<br /><br />
                        При записване на час, нашият екип ще ви предостави по-точна оценка на времето, необходимо за конкретния ремонт, след като извърши предварителна диагностика на автомобила ви. Ние сме ангажирани да осигурим бързо и качествено обслужване, като същевременно запазваме високи стандарти на работа.<br /><br />
                        Ако имате специфични предпочитания за плащане или въпроси относно опциите, не се колебайте да се свържете с нас. Нашият екип е на разположение да ви помогне!<br /><br />
                        Свържете се с нас, за да се запознаете с текущите отстъпки и промоции, ако имате нужда от услуги в извънработно време, решение на нестандартни проблеми и за всички останали въпроси</p>
                </section>
            </Animation>
        </div>
    )
}