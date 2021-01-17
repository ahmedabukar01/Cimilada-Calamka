const form = document.querySelector('form');
const deg = document.querySelector('#deg');
const cityName = document.querySelector('#city-name');
const cloud = document.querySelector('#cloud');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    getApiData(city)
    .then(data=>updataDom(data))
    .catch(err=>console.log(err.message));
});
const  getApiData = async(city) =>{
    const cityInfo = await getCity(city);
    const weatherInfo = await getWeather(cityInfo.Key);

    return {
        cityInfo,
        weatherInfo
    };
}

function updataDom(data){
    const {cityInfo, weatherInfo} = data;
    console.log(cityInfo, weatherInfo);
    cityName.textContent = cityInfo.EnglishName;
    cloud.textContent = weatherInfo.WeatherText;
    deg.innerHTML =  `${weatherInfo.Temperature.Metric.Value}&deg; C`;
}

