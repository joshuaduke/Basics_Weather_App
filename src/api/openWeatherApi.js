const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
let cityName = "Mississauga";
let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;


 export async function getData(){
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        //console.log(json);


    } catch (error) {
        console.error(error.message)
    }
 }

 export async function getCurrentCityWeather(lat, lng){
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&limit=5&appid=${API_KEY}&units=metric`
        //let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=${API_KEY}`

                const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        //console.log("Current City", json);
        return json;

    } catch (error) {
        console.error(error.message)
    }
 }