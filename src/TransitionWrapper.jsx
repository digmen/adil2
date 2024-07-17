import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
    initial: {
        x: "100vw",
    },
    in: {
        x: 0,
    },
    out: {
        x: "-100vw",
    },
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
};


const TransitionWrapper = ({ children }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ position: 'relative', width: '100%' }} // Ensuring full width and absolute positioning
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default TransitionWrapper;
