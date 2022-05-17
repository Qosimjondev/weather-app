export default function Footer(weather) {
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = hour + ':' + min + ':' + sec ;
        return time;
      }

    return (

        <div className='footer'>
            <div className='box-footer'>
                <i className="fas fa-sun"></i>
                <span>Sunrise</span>
                <span>{timeConverter(weather.sunrise)}</span>
            </div>
            <div className='box-footer'>
                <i className="fas fa-wind"></i>
                <span>Wind</span>
                <span>{weather.wind} m/s</span>
            </div>
            <div className='box-footer'>
                <i className="fas fa-temperature-high"></i>
                <span>Pressure</span>
                <span>{weather.pressure} hPa</span>

            </div>
            <div className='box-footer'>
                <i className="fas fa-tint"></i>
                <span>Humidity</span>
                <span>{weather.humidity} %</span>
            </div>
        </div>
    );
}