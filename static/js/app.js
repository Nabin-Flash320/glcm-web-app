


$(document).ready(function(){


	function to2D(target_array, cols){
		let newArr = new Array();
		while(target_array.length){
			newArr.push(target_array.splice(0,cols));
		} 
		return newArr;
	}

	function generate_random(){
		return String(parseInt(Math.random() * (9 - 1) + 1));
	}


	var output_array = new Array();
	for (var i = 0; i < 30; i++) {
		output_array.push(generate_random());
		$('.output-grid-container').append('<div class="output-grid-item" id="output-button-'+ 
			String(i) +'">'+ output_array[i] +'</div>');
	}

	var distance = $('#select-distance').val();
	var angle = $('#select-angle').val();



	$('#select-distance').change(function(){
		var distance = $('#select-distance').val();
		var angle = $('#select-angle').val();
		$(".input-buttons").each(function(){
			if($.inArray('input-clicked', $(this).attr('class'))){
				$(this).removeClass('input-clicked');
			}
		})
		$('.output-grid-container').empty();
		output_array = [];
		for (var i = 0; i < 30; i++) {
			output_array.push(generate_random());
			$('.output-grid-container').append('<div class="output-grid-item" id="output-button-'+ 
				String(i) +'">'+ output_array[i] +'</div>');
		}
	});

		$(".input-buttons").click(function(event){
		var clicked_button = event.target.id;
		$("#"+clicked_button).addClass('input-clicked');
	});

	console.log(to2D(output_array, 5, 6));


});