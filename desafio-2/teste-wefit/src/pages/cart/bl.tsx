import { useRef, useEffect, useState } from "react";

export const ShowcaseListener = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [active, setActive] = useState("OFF");

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (ref.current) {
            const quarterWindowHeight = windowHeight * 0.25;
            if (ref.current.offsetHeight > quarterWindowHeight) return setActive("ON");
            return setActive("OFF");
        }
    }, [windowHeight]);

    return {
        ref,
        active
    };
}