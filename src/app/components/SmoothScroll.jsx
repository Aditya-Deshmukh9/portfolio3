'use client';

import { frame, cancelFrame } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null)


    useEffect(() => {
        function update(data) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])


    return (
        <ReactLenis
            root
            options={{
                autoRef: false
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
}
