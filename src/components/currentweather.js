import "./currentweather.css"

function CurrentWeather(){
    return <div className="weatherbox">
        <div className="topweather">
            <p className="cityname">Lucknow</p>
            <p className="weatherdesc">Sunny</p>
        </div>
        <image className="weathericon" alt="weathericon" src="../../public/logo192.png"/>
    </div>
}

export default CurrentWeather;