$(document).ready(function(){

	for(var i = 1; i < 152; i++){
		$('#pokemon_container').append(
		'<img src="http://pokeapi.co/media/img/'+[i]+'.png">');
	}
})