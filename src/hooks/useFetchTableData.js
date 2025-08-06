import { useState, useEffect } from 'react';

const useFetchTableData = (url) => {
    const [data, setData] = useState({ headers: [], rows: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${ response.status }`);
                }
                const textData = await response.text();
                const lines = textData.trim().split('\n');
                const headers = lines[0].split('\t');
                const rows = lines.slice(1).map(line => line.split('\t'));

                setData({ headers, rows });
            } catch (e) {
                setError(e.message);
                console.error("Failed to fetch table data:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchTableData;