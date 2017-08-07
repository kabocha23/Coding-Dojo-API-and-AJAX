$(document).ready(function() {

    $('#form_1').submit(function() {
		var city = $('#search').val();

		$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=d14ae1863b7e1483314d4ec367a366fc", function(res) {
			console.log(res);

	        var html_str = "";
	        html_str += "<h1>" + res.name + "</h1>";
			html_str += "<h2>" + res.main.temp + " degrees Farenheit</h2>";
	    	$("#results_container").html(html_str);
			}, "json");
	        return false;
	});
});