import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css'

const CustomCursor = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Track the mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="cursor"
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            // Add scale or rotation when hovering over elements
            whileHover={{ scale: 1.5 }} // เพิ่มขนาดเมื่อ hover
        />
    );
};

export default CustomCursor;
