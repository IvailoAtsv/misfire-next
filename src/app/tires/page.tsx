import TireHero from "@/Components/TiresHero"
import TireChangePricing from "@/Components/TiresPricing"
import TiresForm from '@/Components/TiresForm'
const Tires = () =>{
    return (
        <main className="w-full max-w-container flex flex-col justify-center items-center mt-[70px] sm:mt-[100px] md:mt-[70px]">
        <TireHero />
        <TireChangePricing />
        <TiresForm />
        </main>
    )
}
export default Tires