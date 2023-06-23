"use client"

import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

interface Props {
    children: JSX.Element,
    delay?: number,
    styles?: string
}

const ImageReveal = ({ children, delay = 0, styles='' }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div ref={ref} animate={isInView ? "visible" : "hidden"} className={styles}
            variants={{
                hidden: { opacity: 0, translateX: '-70%', filter: 'blur(2px)'},
                visible: { filter: 'blur(0)', opacity: 1, translateX: 0}
            }}
            transition={{ duration: isInView ? .6 : 0.1, delay: isInView ? delay : 0 }}
            initial='hidden'
        >
            {children}
        </motion.div>
    );
};

export default ImageReveal;