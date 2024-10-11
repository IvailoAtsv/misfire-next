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
    '/gallery/IMG_1393.webp',
    '/gallery/IMG_1394.webp',
    '/gallery/IMG_1395.webp',
    '/gallery/IMG_1396.webp',
    '/gallery/IMG_1397.webp',
    '/gallery/IMG_1398.webp',
    '/gallery/IMG_1399.webp',
    '/gallery/IMG_1400.webp',
    '/gallery/IMG_1401.webp',
    '/gallery/IMG_1402.webp',
    '/gallery/IMG_1403.webp',
    '/gallery/IMG_1404.webp',
    '/gallery/IMG_1405.webp',
    '/gallery/IMG_1406.webp',
    '/gallery/IMG_1407.webp',
    '/gallery/IMG_1408.webp',
    '/gallery/IMG_1409.webp',
    '/gallery/IMG_1410.webp',
    '/gallery/IMG_1411.webp',
    '/gallery/IMG_1412.webp',
    '/gallery/IMG_1413.webp',
    '/gallery/IMG_1414.webp',
    '/gallery/IMG_1415.webp',
    '/gallery/IMG_1416.webp',
    '/gallery/IMG_1417.webp',
    '/gallery/IMG_1418.webp',
    '/gallery/IMG_1419.webp',
    '/gallery/IMG_1420.webp',
    '/gallery/IMG_1421.webp',
    '/gallery/IMG_1422.webp',
    '/gallery/IMG_1423.webp',
    '/gallery/IMG_1424.webp',
    '/gallery/IMG_1425.webp',
    '/gallery/IMG_1426.webp',
    '/gallery/IMG_1427.webp',
    '/gallery/IMG_1428.webp',
    '/gallery/IMG_1429.webp',
    '/gallery/IMG_1430.webp',
    '/gallery/IMG_1431.webp',
    '/gallery/IMG_1432.webp',
    '/gallery/IMG_1433.webp',
    '/gallery/IMG_1434.webp',
    '/gallery/IMG_1435.webp',
    '/gallery/IMG_1436.webp',
    '/gallery/IMG_1437.webp',
    '/gallery/IMG_1438.webp',
    '/gallery/IMG_1439.webp',
    '/gallery/IMG_1440.webp',
    '/gallery/IMG_1441.webp',
    '/gallery/IMG_1442.webp',
    '/gallery/IMG_1443.webp',
    '/gallery/IMG_1444.webp',
    '/gallery/IMG_1445.webp',
    '/gallery/IMG_1446.webp',
    '/gallery/IMG_1447.webp',
    '/gallery/IMG_1448.webp',
    '/gallery/IMG_1449.webp',
    '/gallery/IMG_1450.webp',
    '/gallery/IMG_1451.webp',
    '/gallery/IMG_1452.webp',
    '/gallery/IMG_1453.webp',
    '/gallery/IMG_1454.webp',
    '/gallery/IMG_1455.webp',
    '/gallery/IMG_1456.webp',
    '/gallery/IMG_1457.webp',
    '/gallery/IMG_1458.webp',
    '/gallery/IMG_1459.webp',
    '/gallery/IMG_1460.webp',
    '/gallery/IMG_1461.webp',
    '/gallery/IMG_1462.webp',
    '/gallery/IMG_1463.webp',
    '/gallery/IMG_1464.webp',
    '/gallery/IMG_1465.webp',
    '/gallery/IMG_1466.webp',
    '/gallery/IMG_1467.webp',
    '/gallery/IMG_1468.webp',
    '/gallery/IMG_1469.webp',
    '/gallery/IMG_1470.webp',
    '/gallery/IMG_1471.webp',
    '/gallery/IMG_1472.webp'

];