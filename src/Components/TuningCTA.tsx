export const TuningCTA = () =>{
    return (
        <section className=" my-10 relative w-full bg-[url('/tuning.mp4')] object-cover bg-fixed bg-no-repeat bg-center h-[50vh]">
            <span className="w-full h-[50vh] flex justify-center items-center flex-col absolute top-auto bg-black bg-opacity-30">
                <h2 className="text-h2clamp text-center text-white opacity-85">Вдъхнете живот на автомобила си</h2>
                    <button className=" whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">Свържете се с нас!</button>
            </span>
        </section>
    )
}