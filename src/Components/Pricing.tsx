import React from "react"
import Animation from "./Animation";

const Pricing: React.FC = () => {
    return (
        <Animation>
            <section className="my-6 max-w-screen-xl mx-auto  mt-12 w-full flex items-center justify-center flex-col">
                <h2 className="text-white w-full text-center text-3xl font-semibold mb-4">Ценoразпис</h2>
                <div className="bg-background w-full p-2 rounded-md text-white">
                    <table className="w-full font-extralight text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b border-white border-opacity-15 py-2">Услуга</th>
                                <th className="border-b border-white border-opacity-15 py-2">Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-b border-white border-opacity-15 py-2">Транспорт в чужбина</td>
                                <td className="border-b border-white border-opacity-15 py-2">Цена по заявка, в зависимост от локацията</td>
                            </tr>
                            <tr>
                                <td className="border-b border-white border-opacity-15 py-2">Транспорт в страната</td>
                                <td className="border-b border-white border-opacity-15 py-2">
                                    <p>Пристигане на пътна помощ - 1.50 лв / км</p>
                                    <p>Транспорт на автомобил до 2т. - 2.50 лв / км</p>
                                    <p>Натоварване и разтоварване на автомобил до 2 т. - 15 лв.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b border-white border-opacity-15 py-2">Транспорт на аварирали автомобили</td>
                                <td className="border-b border-white border-opacity-15 py-2">Преференциални цени за наши клиенти, в зависимост от локацията</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 text-accent text-lg">Всички цени са с ДДС и могат да бъдат предоговаряни.</p>
                </div>
            </section>
        </Animation>
    )
}
export default Pricing