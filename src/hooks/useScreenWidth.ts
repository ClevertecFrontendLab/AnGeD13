import { useEffect, useState } from 'react';

export function useScreenWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return { screenWidth: width };
}
