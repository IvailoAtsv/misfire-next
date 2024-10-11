'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function Gallery() {
    const [fullscreenImage, setFullscreenImage] = useState(null)

    const enterFullscreen = (src) => {
        setFullscreenImage(src)
    }

    const exitFullscreen = () => {
        setFullscreenImage(null)
    }

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                exitFullscreen()
            }
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    return (
        <main className="w-full min-h-screen bg-bg flex flex-col">
            <div className="w-full py-32 mx-auto max-w-screen-2xl px-8">
                <h2 className="text-white mx-auto pb-16 text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center">Галерия</h2>
                <div className="columns-1 sm:columns-3 lg:columns-4 gap-4">
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={300}
                            onClick={() => enterFullscreen(src)}
                            className="h-auto transition-all duration-300 my-4 w-full break-inside-avoid object-cover cursor-pointer hover:z-20 hover:-translate-y-1"
                        />
                    ))}
                </div>
            </div>
            {fullscreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    <button
                        onClick={exitFullscreen}
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                        aria-label="Close fullscreen"
                    >
                        <X size={32} />
                    </button>
                    <Image
                        src={fullscreenImage}
                        alt="Fullscreen image"
                        layout="fill"
                        objectFit="contain"
                        onClick={exitFullscreen}
                    />
                </div>
            )}
        </main>
    )
}

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