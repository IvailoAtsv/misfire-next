import React from "react";
import Animation from "./Animation";

const tdStyles = "border w-[70px] px-2 border-white border-opacity-15 text-md whitespace-nowrap py-2"
const thStyles = "border-l border-r w-[70px] px-2 border-white bg-opacity-85 bg-accent border-opacity-15 text-md whitespace-nowrap py-2"

const TireChangePricing: React.FC = () => {
    return (
        <section className="my-6 w-full flex flex-col justify-center items-center max-w-container">
            <Animation>
                <div className="bg-background overflow-x-auto p-6 md:w-[95%] rounded-md text-white max-w-container mx-auto w-full">
                    <h2 className="text-white w-full mb-10 text-center text-4xl font-semibold">Ценoразпис</h2>
                    <h3 className="text-xl font-semibold mb-4">ЛЕКИ АВТОМОБИЛИ</h3>
                    <table className="w-full max-w-container overflow-x-auto font-extralight text-center mb-8">
                        <thead>
                            <tr>
                                <th className={thStyles}>Цол</th>
                                <th className={thStyles}>Монтаж</th>
                                <th className={thStyles}>Демонтаж</th>
                                <th className={thStyles}>Баланс</th>
                                <th className={thStyles}>Сваляне/Качване</th>
                                <th className={thStyles}>Общо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={tdStyles}>13"</td>
                                <td className={tdStyles}>2.50 лв.</td>
                                <td className={tdStyles}>2.50 лв.</td>
                                <td className={tdStyles}>4.00 лв.</td>
                                <td className={tdStyles}>6.00 лв.</td>
                                <td className={tdStyles}>15.00 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>14"</td>
                                <td className={tdStyles}>3.00 лв.</td>
                                <td className={tdStyles}>3.00 лв.</td>
                                <td className={tdStyles}>4.50 лв.</td>
                                <td className={tdStyles}>7.20 лв.</td>
                                <td className={tdStyles}>17.70 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>15"</td>
                                <td className={tdStyles}>3.50 лв.</td>
                                <td className={tdStyles}>3.50 лв.</td>
                                <td className={tdStyles}>5.50 лв.</td>
                                <td className={tdStyles}>7.80 лв.</td>
                                <td className={tdStyles}>20.30 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>16"</td>
                                <td className={tdStyles}>4.00 лв.</td>
                                <td className={tdStyles}>4.00 лв.</td>
                                <td className={tdStyles}>6.00 лв.</td>
                                <td className={tdStyles}>8.50 лв.</td>
                                <td className={tdStyles}>22.50 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>17"</td>
                                <td className={tdStyles}>5.00 лв.</td>
                                <td className={tdStyles}>5.00 лв.</td>
                                <td className={tdStyles}>7.50 лв.</td>
                                <td className={tdStyles}>9.80 лв.</td>
                                <td className={tdStyles}>27.30 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>18"</td>
                                <td className={tdStyles}>6.00 лв.</td>
                                <td className={tdStyles}>6.00 лв.</td>
                                <td className={tdStyles}>8.50 лв.</td>
                                <td className={tdStyles}>11.60 лв.</td>
                                <td className={tdStyles}>32.10 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>19"</td>
                                <td className={tdStyles}>7.00 лв.</td>
                                <td className={tdStyles}>7.00 лв.</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>14.00 лв.</td>
                                <td className={tdStyles}>38.70 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>20"</td>
                                <td className={tdStyles}>8.20 лв.</td>
                                <td className={tdStyles}>8.50 лв.</td>
                                <td className={tdStyles}>12.00 лв.</td>
                                <td className={tdStyles}>16.20 лв.</td>
                                <td className={tdStyles}>44.90 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>21"</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>14.00 лв.</td>
                                <td className={tdStyles}>18.40 лв.</td>
                                <td className={tdStyles}>52.40 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>22"</td>
                                <td className={tdStyles}>10.20 лв.</td>
                                <td className={tdStyles}>10.20 лв.</td>
                                <td className={tdStyles}>15.00 лв.</td>
                                <td className={tdStyles}>19.10 лв.</td>
                                <td className={tdStyles}>54.50 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>23-25"</td>
                                <td className={tdStyles}>11.50 лв</td>
                                <td className={tdStyles}>11.50 лв</td>
                                <td className={tdStyles}>16.00 лв</td>
                                <td className={tdStyles}>20.90 лв</td>
                                <td className={tdStyles}>59.50 лв</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Animation>
            <Animation>

                <div className="bg-background overflow-x-auto p-6 rounded-md text-white md:w-[95%] max-w-container mx-auto w-full">
                    <h3 className="text-xl font-semibold mb-4">SUV, ДЖИП И БУС</h3>
                    <table className="w-full overflow-x-auto font-extralight text-center border-collapse mb-8">
                        <thead>
                            <tr>
                                <th className={thStyles}>Цол</th>
                                <th className={thStyles}>Монтаж</th>
                                <th className={thStyles}>Демонтаж</th>
                                <th className={thStyles}>Баланс</th>
                                <th className={thStyles}>Сваляне/Качване</th>
                                <th className={thStyles}>Общо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={tdStyles}>14"</td>
                                <td className={tdStyles}>3.40 лв.</td>
                                <td className={tdStyles}>3.40 лв.</td>
                                <td className={tdStyles}>5.00 лв.</td>
                                <td className={tdStyles}>7.40 лв.</td>
                                <td className={tdStyles}>19.20 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>15"</td>
                                <td className={tdStyles}>4.20 лв.</td>
                                <td className={tdStyles}>4.20 лв.</td>
                                <td className={tdStyles}>6.70 лв.</td>
                                <td className={tdStyles}>9.10 лв.</td>
                                <td className={tdStyles}>24.20 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>16"</td>
                                <td className={tdStyles}>5.20 лв.</td>
                                <td className={tdStyles}>5.20 лв.</td>
                                <td className={tdStyles}>7.50 лв.</td>
                                <td className={tdStyles}>10.10 лв.</td>
                                <td className={tdStyles}>28.10 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>17"</td>
                                <td className={tdStyles}>5.80 лв.</td>
                                <td className={tdStyles}>5.80 лв.</td>
                                <td className={tdStyles}>8.50 лв.</td>
                                <td className={tdStyles}>11.60 лв.</td>
                                <td className={tdStyles}>31.70 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>18"</td>
                                <td className={tdStyles}>6.60 лв.</td>
                                <td className={tdStyles}>6.60 лв.</td>
                                <td className={tdStyles}>9.60 лв.</td>
                                <td className={tdStyles}>13.40 лв.</td>
                                <td className={tdStyles}>36.90 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>19"</td>
                                <td className={tdStyles}>8.30 лв.</td>
                                <td className={tdStyles}>8.30 лв.</td>
                                <td className={tdStyles}>11.80 лв.</td>
                                <td className={tdStyles}>15.90 лв.</td>
                                <td className={tdStyles}>44.30 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>20"</td>
                                <td className={tdStyles}>9.10 лв.</td>
                                <td className={tdStyles}>9.10 лв.</td>
                                <td className={tdStyles}>12.40 лв.</td>
                                <td className={tdStyles}>17.70 лв.</td>
                                <td className={tdStyles}>48.30 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>21"</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>15.00 лв.</td>
                                <td className={tdStyles}>20.60 лв.</td>
                                <td className={tdStyles}>55.60 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>22"</td>
                                <td className={tdStyles}>11.50 лв.</td>
                                <td className={tdStyles}>11.50 лв.</td>
                                <td className={tdStyles}>17.10 лв.</td>
                                <td className={tdStyles}>22.80 лв.</td>
                                <td className={tdStyles}>63.90 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>23"-25"</td>
                                <td className={tdStyles}>13.20 лв.</td>
                                <td className={tdStyles}>13.20 лв.</td>
                                <td className={tdStyles}>17.50 лв.</td>
                                <td className={tdStyles}>24.60 лв.</td>
                                <td className={tdStyles}>68.50 лв.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Animation>
            <Animation>
                <div className="bg-background overflow-x-auto p-6 rounded-md text-white md:w-[95%] max-w-container mx-auto w-full">
                    <h3 className="text-xl font-semibold mb-4">Runflat Гуми</h3>
                    <table className="w-full overflow-x-auto font-extralight text-center border-collapse mb-8">
                        <thead>
                            <tr>
                                <th className={thStyles}>Цол</th>
                                <th className={thStyles}>Монтаж</th>
                                <th className={thStyles}>Демонтаж</th>
                                <th className={thStyles}>Баланс</th>
                                <th className={thStyles}>Сваляне/Качване</th>
                                <th className={thStyles}>Общо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={tdStyles}>15"-16"</td>
                                <td className={tdStyles}>7.60 лв.</td>
                                <td className={tdStyles}>7.60 лв.</td>
                                <td className={tdStyles}>6.90 лв.</td>
                                <td className={tdStyles}>11.20 лв.</td>
                                <td className={tdStyles}>33.30 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>17"-18"</td>
                                <td className={tdStyles}>11.00 лв.</td>
                                <td className={tdStyles}>11.00 лв.</td>
                                <td className={tdStyles}>10.00 лв.</td>
                                <td className={tdStyles}>15.00 лв.</td>
                                <td className={tdStyles}>47.00 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>19"-20"</td>
                                <td className={tdStyles}>16.50 лв.</td>
                                <td className={tdStyles}>16.50 лв.</td>
                                <td className={tdStyles}>12.00 лв.</td>
                                <td className={tdStyles}>20.40 лв.</td>
                                <td className={tdStyles}>65.40 лв.</td>
                            </tr>
                            <tr>
                                <td className={tdStyles}>21"-24"</td>
                                <td className={tdStyles}>18.00 лв.</td>
                                <td className={tdStyles}>18.00 лв.</td>
                                <td className={tdStyles}>16.80 лв.</td>
                                <td className={tdStyles}>25.70 лв.</td>
                                <td className={tdStyles}>78.50 лв.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </Animation>
            <Animation>
                <div className="bg-background overflow-x-auto p-6 rounded-md text-white md:w-[95%] max-w-container mx-auto w-full">
                    <h3 className="text-xl font-semibold mb-4">Runflat Гуми</h3>
                    <table className="w-full overflow-x-auto font-extralight text-left border-collapse mb-8">
                        <thead>
                            <tr>
                                <th className={`${thStyles} w-1/2`}>Услуга</th>
                                <th className={`${thStyles} w-1/2`}>Цена (От)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж двигател, лек автомобил</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>800 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж двигател, бус/джип</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>1300 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж глава</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>300 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на ангренажно задвижване</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>300 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на семеринг вал</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>40 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на гарнитура глава</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на гарнитура всмукателен колектор</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на гарнитура изпускателен колектор</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>70 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на гарнитура капак глава</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на гарнитура картер</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>120 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на обслужващ ремък</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на масло и всички филтри</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>80 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на стартер</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>100 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на алтернатор</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>100 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Подмяна на антифриз + промивка</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>100 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж скоростна кутия на лек автомобил</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>400 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж скоростна кутия на бус/джип</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>500 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на масло ръчна трансмисия</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>40 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на масло автоматична трансмисия</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>120 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на масло в раздатъчна кутия и диференциал</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Демонтаж + монтаж на мехатроник на автоматична скоростна кутия</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>120 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на шарнир</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на носач</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на тампон (запресоване)</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>35 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на шенкел</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>120 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на амортисьор</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>80 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на кормилен накрайник</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>60 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на колесен лагер/главина</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>160 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на макферсън</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>160 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на пружина</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>70 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на стабилизираща щанга</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>80 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на тампон стабилизираща щанга</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>30 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на биалетка</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>40 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на полуоска</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>100 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на маншон каре</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>80 лв</td>
                            </tr>
                            <tr>
                                <td className={`${tdStyles} w-1/2`}>Смяна на маншон кормилна рейка</td>
                                <td className={`${tdStyles} w-1/2 text-center`}>80 лв</td>
                            </tr>
                        </tbody>
                    </table>



                </div>
            </Animation>
        </section>
    )
}
export default TireChangePricing