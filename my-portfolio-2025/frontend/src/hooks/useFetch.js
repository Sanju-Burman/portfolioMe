import { useState, useEffect, useCallback } from 'react';

export function useFetch(fetchFn, options = {}) {
    const { immediate = true, fallbackData = null } = options;
    const [data, setData] = useState(fallbackData);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState(null);

    const execute = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFn(...args);
            setData(result);
            return result;
        } catch (err) {
            console.warn('API call failed, falling back to local mock data:', err);
            setError(err instanceof Error ? err.message : String(err));
            if (fallbackData !== undefined) {
                setData(fallbackData);
            }
            throw err;
        } finally {
            setLoading(false);
        }
    }, [fetchFn, fallbackData]);

    useEffect(() => {
        if (immediate) {
            execute().catch(() => {
                // Squelch unhandled promise errors because the UI displays the fallback/error
            });
        }
    }, [immediate, execute]);

    return { data, loading, error, execute };
}
