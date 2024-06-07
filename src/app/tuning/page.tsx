import React from 'react';

interface ArticleProps{
    title:string;
    content:string;
    image:string;
    reverse?:boolean;
}

const Article:React.FC<ArticleProps> = ({ title, content, image, reverse }) => {
    return (
        <article className={`w-[90%] my-4 flex lg:gap-8 flex-col gap-2 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center items-center`}>
            <img src={image} alt="Tuning" className="flex-1 w-full lg:max-w-[50%] rounded-lg" />
            <div className="flex-1 flex flex-col items-start justify-center gap-4">
                <h2 className="text-4xl font-bold text-textMain">
                    {title}
                </h2>
                <p className="text-md text-justify hyphens-auto text-textMain opacity-85">
                    {content}
                </p>
            </div>
        </article>
    );
};

const Tuning = () => {
    return (
        <section className="w-full mt-8 text-white flex flex-col justify-center items-center">
            <section className="my-10 relative w-full bg-cover bg-no-repeat bg-center min-h-[55vh]" style={{ backgroundImage: "url('/tuning.mp4')" }}>
                <span className="w-full gap-8 h-full flex justify-center items-center flex-col absolute top-0 bg-black bg-opacity-50 ">
                    <h2 className="text-4xl text-center font-semibold text-white ">Вдъхнете живот на автомобила си</h2>
                    <p className='w-[90%] text-center opacity-75 md:w-[65%]'>Тунингът подобрява производителността, увеличава горивната ефективност, подобрява шофьорското изживяване, увеличава мощността на двигателя и позволява персонализиране според личните предпочитания, водещо до по-отзивчив и приятен автомобил.</p>
                {/* <img className="w-full opacity-35 object-cover" src='/heartline-turbo.png'/> */}
                </span >
            </section>
            <Article
                title="Тунинг за дизелови двигатели"
                content="Тунингът на дизелов двигател включва модификация на параметрите и компонентите му за подобряване на производителността и ефективността. Това може да включва ремапинг на ECU (контролния блок на двигателя), подобряване на турбокомпресора, изпускателната система и инсталиране на въздушни филтри за висока производителност.

Основните предимства на тунинга на дизелов двигател включват значително увеличение на мощността и въртящия момент, което води до по-добро ускорение и способности за теглене. Освен това, правилният тунинг оптимизира гориво-въздушната смес, което подобрява горивната ефективност и прави автомобила по-икономичен.

Тунингът също така подобрява отзивчивостта на двигателя, осигурявайки по-гладко и динамично шофиране. Оптимизирането на работата на двигателя може да намали износването на критичните компоненти, като потенциално удължава живота му. Накрая, тунингът позволява персонализиране на производителността според нуждите и навиците на шофиране.

В заключение, тунингът на дизелов двигател може значително да подобри шофьорското изживяване, правейки автомобила по-мощен, ефективен и приятен за шофиране."
                image="/diesel.webp"
                reverse={true}
            />
            <Article
                title="Тунинг за бензинови двигатели"
                content="Тунингът на бензинов двигател включва модификация на различни параметри и компоненти за повишаване на производителността и ефективността. Тези модификации могат да включват ремапинг на ECU (контролния блок на двигателя), инсталиране на по-ефективни изпускателни системи, подобряване на въздушните филтри и използване на по-добри горивни инжектори.

Основните предимства на тунинга на бензинов двигател включват значително увеличение на мощността и въртящия момент, което води до по-добро ускорение и обща динамика на автомобила. Правилният тунинг оптимизира гориво-въздушната смес, което води до по-добра горивна ефективност и по-нисък разход на гориво.

Тунингът също така подобрява отзивчивостта на двигателя, осигурявайки по-гладко и динамично шофиране. Оптимизирането на работата на двигателя може да намали износването на критичните компоненти, като потенциално удължава живота му. Освен това, тунингът позволява персонализиране на производителността според нуждите и предпочитанията на шофьора.

В заключение, тунингът на бензинов двигател може значително да подобри шофьорското изживяване, правейки автомобила по-мощен, ефективен и приятен за шофиране."
                image="/diesel.webp"
            />
        </section>
    );
};

export default Tuning;
