import TireHero from "@/Components/TiresHero"
import TireChangePricing from "@/Components/TiresPricing"
import TiresForm from '@/Components/TiresForm'
import { Metadata } from "next"

export const metadata:Metadata = {
    title:'Сервиз гуми',
    description:'Сервиз Misfire предлага монтаж, демонтаж и баланс на гуми за леки автомобили, SUV, дижпове и runflat гуми в град Пловдив. Разгледайте ценоразпис.',
     keywords: [
        "сервиз гуми Пловдив", 
        "смяна на гуми Пловдив", 
        "баланс на гуми", 
        "монтаж на гуми", 
        "демонтаж на гуми", 
        "гуми за SUV", 
        "гуми за джип", 
        "гуми runflat", 
        "Misfire Пловдив"
    ],
} 

const Tires = () =>{
    return (
        <main className="w-full mx-auto max-w-container flex flex-col justify-center items-center mt-[70px] sm:mt-[100px] md:mt-[70px]">
        <TireHero />
        <TireChangePricing />
        <TiresForm />
        </main>
    )
}
export default Tires