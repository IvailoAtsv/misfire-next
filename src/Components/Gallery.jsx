import { AccordionItem, AccordionTrigger, AccordionContent, Accordion } from "@/components/ui/accordion";


export default function Gallery() {
    const images = [
        '/gallery/1.webp',
        '/gallery/2.webp',
        '/gallery/3.webp',
        '/gallery/4.webp',
        '/gallery/5.webp',
        '/gallery/6.webp',
        '/gallery/7.webp',
        '/gallery/8.webp',
        '/gallery/9.webp',
        '/gallery/10.webp',
        '/gallery/11.webp',
        '/gallery/12.webp',
        // Add your image URLs here
    ];

    return (
        <div className="w-full mx-auto max-w-screen-xl px-4 py-8">
            <h2 className="text-white mx-auto text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center">Галерия</h2>
            <Accordion type="single" collapsible className=" text-white">
                {/* Accordion Item */}
                <AccordionItem className="mx-auto" value="gallery">
                    {/* Title (Trigger) */}
                    <AccordionTrigger className=" text-lg font-semibold">
                        Показване на Галерията {/* "Show Gallery" in Bulgarian */}
                    </AccordionTrigger>

                    {/* Accordion Content */}
                    <AccordionContent>
                        <div className="flex flex-wrap gap-4">
                            {images.map((src, index) => (
                                <img
                                    loading="lazy"
                                    key={index}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="h-[350px] w-auto object-cover"
                                />
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
