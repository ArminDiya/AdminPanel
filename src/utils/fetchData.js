export const locations =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'referential.p.rapidapi.com'
    }
  };


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
}
