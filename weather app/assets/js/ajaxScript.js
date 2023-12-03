console.log('Script Loaded');

$('#searchBtn').click( (e) => {
	e.preventDefault();

	// Getting Labels
	var cityName = $('#city').val();
	var city = $('.place');
	var temp = $('.temp');
	var weather = $('.weatherCondition');
	var weatherDes = $('.weatherDes');
	var date = $('.date');
	var icon = $('.icon');


	var cityName = cityName.toLowerCase();

	var cardTitle = $('.card-title');


	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://the-weather-api.p.rapidapi.com/api/weather/'+cityName,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3768d98e86msh2cf1be51a839228p12c7e1jsn52eb4fe77c90',
			'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
		}
	};

	$.ajax(settings).done(function (data) {
		console.log(data);
		let x = data.data;
		$('.card-box').fadeIn(1000);
		
		city.html(cityName.toUpperCase());
		weather.html(x.current_weather);
		weatherDes.html("AQI: "+x.aqi);
		icon.attr("src", x.bg_image);
		temp.html(x.temp +" °C");
	});







	// $.ajax({
	// 	url: url,
	// 	method: "GET",
	// 	responseType: "json",
	// 	success: function (data) {
	// 		console.log(data);
	// 		$('.card-box').fadeIn(1000);
	// 		city.html(data.location.name);
	// 		weather.html(data.current.condition.text);
	// 		weatherDes.html(data.current.humidity);
	// 		icon.attr("src", "https:" + data.current.condition.icon);
	// 		// temp.html(data.current.temp_c);
	// 	},
	// 	error: function () {
	// 		alert('City Not Found');
	// 	},
	// });

});