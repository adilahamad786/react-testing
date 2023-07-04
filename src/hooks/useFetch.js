import { useState, useCallback } from "react";

const useFetch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const sendRequest = useCallback(async (configData, apply) => {
        setLoading(true);
        setError(false)
        try {
            const response = await fetch(configData.url, {
                method: configData.method ? configData.method : "GET",
                body: configData.body ? configData.body : null,
                headers: configData.headers ? configData.headers : { "Content-Type": "application/json"}
            });
    
            if (!response.ok) {
                throw new Error("Somthing went wrong!");
            }

            const data = await response.json();

            apply(data);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [])

    return {
        loading,
        error,
        sendRequest
    }
}

export default useFetch;