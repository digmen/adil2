import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        x: "100vw",
    },
    in: {
        opacity: 1,
        scale: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        scale: 1.05,
        x: "-100vw",
    },
};

const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
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
                style={{ position: 'relative', width: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default TransitionWrapper;
