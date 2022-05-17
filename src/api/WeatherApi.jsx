// 037308f261eee19e33817488249dee46
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function WeatherApi(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=037308f261eee19e33817488249dee46`)
    .then(res => res.json());
}