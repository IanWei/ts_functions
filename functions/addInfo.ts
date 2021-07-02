import { Handler } from '@netlify/functions';
import { URL, URLSearchParams } from 'url';
import fetch from 'node-fetch';

export const handler: Handler = async ( event ) => {
    const { queryStringParameters } = event;
    const url = new URL(`${process.env.API_URL}/add_info`);
    const params = {
        ...queryStringParameters,
        outputFormat: 'rapidJSON'
    };
    const headers = {
        'Authorization': `apikey ${process.env.API_KEY}`
    }
    url.search = new URLSearchParams(params).toString();
    try {
        const response = await fetch(url, {
            headers
        });
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch ( e ) {
        console.log(e);
    }
}
