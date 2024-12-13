import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';

export function useFetch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFetch()
            .then(setData)
            .then(() => setIsLoading(false));
    }, []);

    return {
        isLoading,
        data,
    };
}
