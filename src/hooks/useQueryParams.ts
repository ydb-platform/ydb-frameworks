// src/hooks/useQueryParams.ts
import { useCallback } from 'react';

export const useQueryParams = () => {
    const getQueryParam = useCallback((param: string): string | null => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }, []);

    const setQueryParam = useCallback((param: string, value: string): void => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(param, value);

        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }, []);

    return { getQueryParam, setQueryParam };
};
