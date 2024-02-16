import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": c4cee8eac3msh6627151f97b1022p1e632cjsnc5d5520df3bd,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsLoading(false);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };

}

export default useFetch