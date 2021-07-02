export const addInfo = async () => {
    try {
        const response = await fetch('/api/addInfo');
        return await response.json();
    } catch ( e ) {
        console.log(e);
    }
}
