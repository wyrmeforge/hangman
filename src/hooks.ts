import React, {useEffect} from "react";


export const useHandleKeyPress = (fn: (e: KeyboardEvent) => void, deps?: React.DependencyList): void => {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => fn(e);

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [deps]);
};

