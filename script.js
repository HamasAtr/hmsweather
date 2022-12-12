const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a0dd06407dmshae5d93f23a2219ep1dbd8djsn7ddfce58de3c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
}

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        // wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed





        console.log(response)
    })


    .catch(err => console.error(err));

}
let submit = document.getElementById("submit");
// addEventListener
submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Karachi")