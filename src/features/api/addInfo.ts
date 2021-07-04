import { ADD_INFO } from './constant';

export const addInfo = async (filterDateValid?: string, itdLPxx_selStop?: string) => {
    const url = new URL(`${ADD_INFO}`, window.location.href);
    const params: Record<string, string> = {};
    filterDateValid && Object.assign(params, { filterDateValid });
    itdLPxx_selStop && Object.assign(params, { itdLPxx_selStop });
    url.search = new URLSearchParams(params).toString();
    try {
        const response = await fetch(url.toString());
        return await response.json();
    } catch ( e ) {
        console.log(e);
    }
}
