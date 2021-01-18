// this app is undermaintenance
// i got a bug and soon working on it to fix.
const form = document.querySelector('form');
const deg = document.querySelector('#deg');
const cityName = document.querySelector('#city-name');
const cloud = document.querySelector('#cloud');
const icon = document.querySelector('.icon');
const imgStatus = document.querySelector('.bg-image');
const display = document.querySelector('#weather-info');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();

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
    cityName.textContent = cityInfo.EnglishName;
    cloud.textContent = weatherInfo.WeatherText;
    deg.innerHTML =  `${weatherInfo.Temperature.Metric.Value}&deg; C`;

    let imgSrc = '';
    // const imgSrc = weatherInfo.IsDayTime? 'img/day.svg' : 'img/night.svg';
    if(weatherInfo.IsDayTime){
        imgSrc = 'img/day.svg';
    } else{
        imgSrc = 'img/night.svg';
    }
    imgStatus.setAttribute('src', imgSrc);

    const iconSrc = `img/icons/${weatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    if(display.classList.contains('d-none')){
        display.classList.remove('d-none');
    }
}

// local storage
localStorage.name="ahmed";
localStorage.setItem('age',20);

const name = localStorage.name;
const age = localStorage.age;
console.log(name,age);
const unknown = localStorage.getItem('age');
console.log(unknown);
localStorage.removeItem('name');
localStorage.clear();

const todos = [
    {text:'hacking the the computers', author:'ahmed'},
    {text:'goes to school', author:'abukar'},
    {text:'leads the world', author:'cumar'}
];
console.log(name)