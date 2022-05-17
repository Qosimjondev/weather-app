import { useEffect, useState } from 'react';
import WeatherApi from './api/WeatherApi';
import './App.css';
import Box from './components/Box';
import Search from './components/Search';

// weather app


function App() {
  const [city, setCity] = useState('Ferghana');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    const getWeather = async () => {
      const res = await WeatherApi(city);
      if (res.cod === '404') {
        setError(true);
      } else {
        setWeather({name: res.name, weather:res.weather[0].main, temp: res.main.temp, humidity:res.main.humidity, wind:res.wind.speed, pressure:res.main.pressure, sunrise:res.sys.sunrise, icon:res.weather[0].icon});
        setError(false);
      }
      setLoading(false);
    }; 
    setTimeout(getWeather, 2000);

  }, [city]);


  return (
    <div className="App">
      <div id="openweathermap-widget-15"></div>
      <header className="App-header">
        <Search {...city} setCity={setCity} />
        {error ? <h1>Not found</h1>:
        (
          loading? <h1>Loading...</h1>:<Box {...weather} />
        )}
      </header>
    </div>
  )
}

export default App;
