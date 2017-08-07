// $(document).ready(function(){

// 	for(var i = 1; i < 152; i++){
// 		$('#pokemon_container').append(
// 		'<img id="'+[i]+'" src="http://pokeapi.co/media/img/'+[i]+'.png">');
// 	}

// });

// $(document).on('click', 'img', function() { 

// 	$.get("http://pokeapi.co/api/v1/pokemon/"+$(this).attr('id')+"/", function(res) {
// 		console.log(res);
//         var html_str = "";
//         html_str += "<div id='popup'>"
//         html_str += "<h2>" + res.name + "</h2>";
//         html_str += "<img src='http://pokeapi.co/media/img/1.png'>";
//         html_str += "<h4>Types</h4>";
//         html_str += "<ul>"; 
//         for(var i = 0; i < res.types.length; i++) {
//         html_str += "<li>" + res.types[i].name + "</li>";
// 		}
// 		html_str += "</ul>";
// 		html_str += "<h4>Height</h4>";
// 		html_str += "<p>" + res.height + "</p>";
// 		html_str += "<h4>Weight</h4>";
// 		html_str += "<p>" + res.weight + "</p>";
// 		html_str += "</div>"
//     	$("#pokedex").html(html_str);
// 		}, "json");

// 	$(window).scroll(function() {
// 		$('#pokedex').toggleClass('sticky', $(window.scrollTop() > $('#pokedex').offset().top())
// 	});
// });

//SECOND VERSION STRTS HERE

// $(document).ready(function(){

// 	for(var i = 1; i < 152; i++){
// 		$('#pokemon_container').append(
// 		'<img id="'+[i]+'" src="http://pokeapi.co/media/img/'+[i]+'.png">');
// 	}

// });

// $(document).on('click', 'img', function() { 

// 	$.get("http://pokeapi.co/api/v1/pokemon/"+$(this).attr('id')+"/", function(res) {
// 		// console.log(res);
//         var html_str = "";
//         html_str += "<div id='popup'>"
//         html_str += "<h2>" + res.name + "</h2>";
//         html_str += "<img src='http://pokeapi.co/media/img/1.png'>";
//         html_str += "<h4>Types</h4>";
//         html_str += "<ul>"; 
//         for(var i = 0; i < res.types.length; i++) {html_str += "<li>" + res.types[i].name + "</li>";}
// 		    html_str += "</ul>";
//     		html_str += "<h4>Height</h4>";
//     		html_str += "<p>" + res.height + "</p>";
//     		html_str += "<h4>Weight</h4>";
//     		html_str += "<p>" + res.weight + "</p>";
//     		html_str += "</div>";
//     	$("#pokedex").html(html_str);
// 		}, "json");

// 	$(window).scroll(function() {$('#pokedex').toggleClass('sticky', $(window).scrollTop() > $('#pokedex').offset().top());
// 	});
// });

$(document).ready(function(){

	for(var i = 1; i < 152; i++){
		$('#pokemon_container').append(
		'<img id="'+[i]+'" src="http://pokeapi.co/media/img/'+[i]+'.png">');
	}

});

$(document).on('click', 'img', function() { 

	var images = $(this).attr('id');

	$.get("http://pokeapi.co/api/v1/pokemon/"+$(this).attr('id')+"/", function(res) {
		console.log(res);

        var html_str = "";
        html_str += "<div id='popup'>"
        html_str += "<h2>" + res.name + "</h2>";
        html_str += "<img src='http://pokeapi.co/media/img/" + images + ".png'>";
        html_str += "<h4>Types</h4>";
        html_str += "<ul>"; 
        for(var i = 0; i < res.types.length; i++) {html_str += "<li>" + res.types[i].name + "</li>";}
	    html_str += "</ul>";
		html_str += "<h4>Height</h4>";
		html_str += "<p>" + res.height + "</p>";
		html_str += "<h4>Weight</h4>";
		html_str += "<p>" + res.weight + "</p>";
		html_str += "</div>";
    	$("#pokedex").html(html_str);
		}, "json");

	$(window).scroll(function() {$('#pokedex').toggleClass('sticky', $(window).scrollTop());
	});
});