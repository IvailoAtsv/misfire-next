'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type AnimationProps = {
    children: ReactNode;
    start?: number;
    opacity?: number;
    height?: string;
    maxW?: string;
    moveY?:number;
}

const Animation: React.FC<AnimationProps> = ({ moveY = 100,maxW='7xl', height='auto', children, start = 1, opacity = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", `${start} 1`]
    });

    const yProgress = useTransform(scrollYProgress, [0, 1], [moveY, 0]); // Move up from 100px to 0px
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [opacity, 1]);

    return (
        <motion.div
            style={{
                y: yProgress,
                opacity: opacityProgress,
            }}
            className={`h-${height} w-full mx-auto max-w-${maxW}`}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}

export default Animation;
