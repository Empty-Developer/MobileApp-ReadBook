import { useEffect, useState } from "react";
/*
    the user types a new character, 
    and the request is sent after 
    500 milliseconds. this is done 
    to avoid sending a request every 
    time a new character is entered, 
    which would overload the server
*/
export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>
    (value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}