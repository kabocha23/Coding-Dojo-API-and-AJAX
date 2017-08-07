// $(document).ready(function() {


$(document).on('click', 'img', function() { 

	var house_no = $(this).attr('num');

	// $(this).toggleClass(
	// 	function(){$(this).css("border", "5px solid #aedb97");}, 
	// 	function(){$(this).css("border", "2px solid darkgrey;");}
	// 	);


		$.get("https://anapioficeandfire.com/api/houses/"+ house_no +"/", function(res) {
			console.log(res);

	        var got_str = "";
	  		got_str += "<div id='pop_up'>";
	  		got_str += "<h1>House Details</h1>";
	  		got_str += "<p>Name: " + res.name + "</p>";
	  		got_str += "<p>Words: " + res.words + "</p>";
	  		got_str += "<p>Titles:";
	  		// got_str += " " + res.titles[0];	
	  	        //for(var t = 1; t < res.titles.length; t++) {		
				// got_str += ", " + res.titles[t];
				// }
			got_str += " " + res.titles.join(", ");
			got_str += "</div>"
	    	$("#details_container").html(got_str);
			}, "json");
	        return false;
// });

});