import { ADD_INFO } from './constant';

export const addInfo = async (filterDateValid?: string) => {
    const url = new URL(`${ADD_INFO}`, window.location.href);
    const params: Record<string, string> = {};
    filterDateValid && (params['filterDateValid'] = filterDateValid);
    url.search = new URLSearchParams(params).toString();
    try {
        const response = await fetch(url.toString());
        return await response.json();
    } catch ( e ) {
        console.log(e);
    }
}
