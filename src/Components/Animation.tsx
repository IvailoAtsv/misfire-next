'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationProps = {
    children: ReactNode;
    moveY?: number;
    maxW?: string;
    height?: string;
    delay?: number;
    opacity?: number;  // Add opacity to the type definition
}

const Animation: React.FC<AnimationProps> = ({
    moveY = 100, // Default moveY: element will slide up by 100px
    maxW = '7xl',
    height = 'auto',
    delay = 0,
    opacity = 0,  // Default opacity to 0 (fully hidden)
    children
}) => {
    return (
        <motion.div
            initial={{ y: moveY, opacity }}  // Start with the given opacity and position
            whileInView={{ y: 0, opacity: 1 }}  // Animate to visible position and full opacity
            transition={{ duration: 0.8, ease: "easeOut", delay }} // Animation timing
            viewport={{ once: true }}  // Ensures animation happens only once
            className={`h-${height} w-full mx-auto max-w-${maxW}`}
            style={{ position: 'relative' }}
        >
            {children}
        </motion.div>
    );
}

export default Animation;
