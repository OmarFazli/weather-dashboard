import './App.css';
import CitySearch from './components/citysearch';
import CurrentWeather from './components/currentweather';

function App() {

  const handleOnSearchChange = (searchValue) => {
    console.log(searchValue);
  }
  return (
    <div className="App">
      <CitySearch onSearchChange={handleOnSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
