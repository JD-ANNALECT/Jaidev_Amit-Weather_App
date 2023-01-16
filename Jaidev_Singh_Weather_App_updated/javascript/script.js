const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d1ec04cb0mshe8581d8cbbe5179p109c97jsn29eb356c3d20',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getNewyork() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctn.innerHTML = response.cloud_pct
			tempn.innerHTML = response.temp
			feels_liken.innerHTML = response.feels_like
			humidityn.innerHTML = response.humidity
			min_tempn.innerHTML = response.min_temp
			max_tempn.innerHTML = response.max_temp
			wind_speedn.innerHTML = response.wind_speed
			wind_degreesn.innerHTML = response.wind_degrees
			sunrisen.innerHTML = response.sunrise
			sunsetn.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getHongkong() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hongkong', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pcth.innerHTML = response.cloud_pct
			temph.innerHTML = response.temp
			feels_likeh.innerHTML = response.feels_like
			humidityh.innerHTML = response.humidity
			min_temph.innerHTML = response.min_temp
			max_temph.innerHTML = response.max_temp
			wind_speedh.innerHTML = response.wind_speed
			wind_degreesh.innerHTML = response.wind_degrees
			sunriseh.innerHTML = response.sunrise
			sunseth.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getTokyo() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctt.innerHTML = response.cloud_pct
			tempt.innerHTML = response.temp
			feels_liket.innerHTML = response.feels_like
			humidityt.innerHTML = response.humidity
			min_tempt.innerHTML = response.min_temp
			max_tempt.innerHTML = response.max_temp
			wind_speedt.innerHTML = response.wind_speed
			wind_degreest.innerHTML = response.wind_degrees
			sunriset.innerHTML = response.sunrise
			sunsett.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getSydney() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pcts.innerHTML = response.cloud_pct
			temps.innerHTML = response.temp
			feels_likes.innerHTML = response.feels_like
			humiditys.innerHTML = response.humidity
			min_temps.innerHTML = response.min_temp
			max_temps.innerHTML = response.max_temp
			wind_speeds.innerHTML = response.wind_speed
			wind_degreess.innerHTML = response.wind_degrees
			sunrises.innerHTML = response.sunrise
			sunsets.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getMoscow() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=moscow', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctm.innerHTML = response.cloud_pct
			tempm.innerHTML = response.temp
			feels_likem.innerHTML = response.feels_like
			humiditym.innerHTML = response.humidity
			min_tempm.innerHTML = response.min_temp
			max_tempm.innerHTML = response.max_temp
			wind_speedm.innerHTML = response.wind_speed
			wind_degreesm.innerHTML = response.wind_degrees
			sunrisem.innerHTML = response.sunrise
			sunsetm.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getLondon() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctl.innerHTML = response.cloud_pct
			templ.innerHTML = response.temp
			feels_likel.innerHTML = response.feels_like
			humidityl.innerHTML = response.humidity
			min_templ.innerHTML = response.min_temp
			max_templ.innerHTML = response.max_temp
			wind_speedl.innerHTML = response.wind_speed
			wind_degreesl.innerHTML = response.wind_degrees
			sunrisel.innerHTML = response.sunrise
			sunsetl.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
function getBeijing() {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=beijing', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctb.innerHTML = response.cloud_pct
			tempb.innerHTML = response.temp
			feels_likeb.innerHTML = response.feels_like
			humidityb.innerHTML = response.humidity
			min_tempb.innerHTML = response.min_temp
			max_tempb.innerHTML = response.max_temp
			wind_speedb.innerHTML = response.wind_speed
			wind_degreesb.innerHTML = response.wind_degrees
			sunriseb.innerHTML = response.sunrise
			sunsetb.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()           //now page with not reload
	getWeather(city.value)
});
getWeather('DELHI');
getNewyork();
getBeijing();
getHongkong();
getLondon();
getMoscow();
getSydney();
getTokyo();
