export const Hero = () => {

    return (
        <main
            id="home"
            className="relative w-full md:bg-[url('/hero.mp4')] h-[60vh] bg-[url('/mobileHero.mp4')] bg-cover"
        >
            <span className="absolute top-0 left-0 w-full h-[60vh] bg-black opacity-35"></span>
            <div className="border-white border-dashed border-opacity-30 border-b-2 border-l-2 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 bg-transparent flex-col h-[90%] w-[90%] max-w-[1400px] mx-auto flex items-center justify-center">
                <h1 className="font-semibold leading-tight text-white text-h1clamp">Misfire </h1>
                <p className="text-white opacity-80 w-[80%] md:w-[50%] text-center mb-4 font-light">Трябват ми текстове Габо</p>
                <div className="flex flex-col md:flex-row w-auto items-center justify-center gap-2">
                    <button className="flex-1 w-full whitespace-nowrap hover:bg-accentDark hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-accent border border-accent hover:border-accentDark px-6 py-3 text-white font-semibold text-md rounded-sm">Свържете се с нас!</button>
                    <button className="flex-1 w-full whitespace-nowrap hover:bg-accent hover:translate-y-[-3px] transition duration-300 hover:shadow-xl bg-transparent border border-accent px-6 py-3 text-white font-semibold text-md rounded-sm">Запитване за тунинг</button>
                </div>
            </div>
        </main>
    )
}
