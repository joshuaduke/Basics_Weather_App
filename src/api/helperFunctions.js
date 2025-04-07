import { getCurrentCityWeather } from "./openWeatherApi";


export  function getCurrentLocation(){
      //check if geolocation is supported by the browser
  if ("geolocation" in navigator) {

    // prompt user  for permission to access their location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let positionObj = {}
        //Get the user's latitude and longiture coordinates
        positionObj.lat = position.coords.latitude;
        positionObj.lng = position.coords.longitude;
        console.log(positionObj);
        //console.log(`Lat: ${lat} - long: ${lng}`);
        //getCurrentCityWeather(lat, lng);
        return positionObj;
      },
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
        return error;
      }
    );


    


  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }

}