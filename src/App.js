import './App.css';
import CitySearch from './components/citysearch';

function App() {

  const handleOnSearchChange = (searchValue) => {
    console.log(searchValue);
  }
  return (
    <div className="App">
      <CitySearch onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
