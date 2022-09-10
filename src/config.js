export const baseApiUrl = 'https://referential.p.rapidapi.com/v1/';
export const countriesUrl = new URL(`${baseApiUrl}country`),
    params = {fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
    limit: '250'}
    Object.keys(params).forEach(key => countriesUrl.searchParams.append(key, params[key]));