const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0bb3c72f8msh62d549f120a8e7ap10c60cjsna5e0d8e672b9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gurugram', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp.innerHTML = response.temp
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp


	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)


		temp1.innerHTML = response.temp
		humidity1.innerHTML = response.humidity
		min_temp1.innerHTML = response.min_temp
		max_temp1.innerHTML = response.max_temp


	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp2.innerHTML = response.temp
		humidity2.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp


	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {

		console.log(response)


		temp3.innerHTML = response.temp
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp


	})
	.catch(err => console.error(err));