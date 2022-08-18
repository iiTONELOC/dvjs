import { useState, useEffect } from 'react';

export function Fetch({ url }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(_data => {
                setData(_data);
                setLoading(false);
            }).catch(_error => {
                setError(_error);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return { data, error, isLoading };
}

export default Fetch;
