const key = 'nysrG3uBbXl6PSEXfjhB1DLEGzjrliBo';

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}
const getWeather = async (id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const res = await fetch(base + query);
    const data = await res.json();
    return data[0];
}