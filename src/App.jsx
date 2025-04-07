import { getData, getCurrentCityWeather } from "./api/openWeatherApi";
import { getCurrentLocation } from "./api/helperFunctions";
import CurrentDayHeader from "./features/CurrentDay/CurrentDayHeader";

function App() {
  // getData();
  //getCurrentLocation();

  return (
    <>
      <CurrentDayHeader />
    </>
  );
}

export default App;
