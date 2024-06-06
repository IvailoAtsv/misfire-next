export const TuningCTA = () =>{
    return (
        <section className=" my-10 relative w-full bg-[url('/tuning.mp4')] bg-cover bg-no-repeat bg-center min-h-[55vh]">
            <span className="w-full gap-8 h-full flex justify-center items-center flex-col absolute top-auto bg-black bg-opacity-30">
                <h2 className="text-h2clamp text-center text-white opacity-85">Вдъхнете живот на автомобила си</h2>
                <button className=" whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">Заявка за тунинг!</button>
            </span>
        </section>
    )
}