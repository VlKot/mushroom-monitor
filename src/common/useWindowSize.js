import { useEffect, useState } from "react";

export const useWindowSize = () =>{
    const [windowWidth, setwindowWidth] = useState();

    useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowWidth;
}

