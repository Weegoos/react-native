import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryAfter, setRetryAfter] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '256af64ad3msh4daaf4a56c84c78p1523e8jsne13287cb490c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        setIsLoading(true);
    
        try {
            const response = await axios(options);
            setData(response.data.data);
        } catch (error) {
            if (error.response && error.response.status === 429) {
               
                const retryAfterValue = error.response.headers['retry-after'];
                if (retryAfterValue) {
                   
                    setRetryAfter(parseInt(retryAfterValue, 10) * 1000); 
                } else {
                  
                    setRetryAfter(5000000); 
                }
            } else {
               
                setError(error);
                console.error('Error fetching data:', error); 
            }
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (retryAfter !== null) {
          
            const timer = setTimeout(() => {
                fetchData();
                setRetryAfter(null); 
            }, retryAfter);

            return () => clearTimeout(timer); 
        }
    }, [retryAfter]);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
