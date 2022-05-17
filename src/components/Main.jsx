export default function Main(weather) {
    return (
        <div className='weather'>
            <div className='weather-icon'>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} width={100} alt="" />
                <span><i className="fas fa-map-marker-alt"></i> {weather.name}</span>
            </div>
            <div className='weather-details'>
                <span>{parseInt(weather.temp)}&deg;</span>
                <span>C</span>
            </div>
        </div>
    );
}