import { useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(
                    "http://localhost:3001/api/products/allProducts"
                );
                setData(response);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export default useDataFetch;
