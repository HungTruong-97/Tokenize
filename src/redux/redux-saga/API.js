import {baseURL} from '../../common/constants/baseURL';

const headers={
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json;charset=utf-8",
    "user-agent": "Android;1.15.0",
    "TOK-DEVICE-ID": "ea278b7741967a5e"
};

function* getMarketSummaries()
{
    const response = yield fetch(`${baseURL}/public/v1/market/get-summaries`,{
        method:"GET",
        headers
    });
    return yield response.json();
}

function* getMarkets()
{
    const response = yield fetch(`${baseURL}/mobile-api/market/getmarkets`,{
        method:"GET",
        headers
    });
    return yield response.json();
}

export const API={
    getMarketSummaries,
    getMarkets
};