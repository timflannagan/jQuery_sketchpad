$(document).ready(function() {	
	createGrid();
	var block = '.grid_block';
	var block_color = 'rgb(29, 49, 54)';
		
	// when user clicks 'reset grid' button, all blocks within div container are reset
	// to original css properties
	$('#reset_button').click(function() {
		resetColor(block, block_color);
	});

	// when user clicks 'random color' button, all blocks within div container are reset
	// and with each block hovered over, the background color changes to a random color
	$('#reset_color').click(function() {
		resetColor(block, block_color);
		$(block).hover(function() {
			$(this).css('background-color', getRandomColor());
		});
	});
	
	// when user clicks 'pixel trail' button, all blocks hovered are 
	$('#pixel_trail').click(function() {
		resetColor(block, block_color);
		
		$(block).mouseenter(function() {
			$(this).css('background-color', 'white');

		});
		$(block).mouseleave(function() {
			$(this).fadeTo('fast', 1.0, function() {
				$(this).css('background-color', block_color);
			});
		});
		
	});
	
	// when user hovers over a single div block, it changes bg color to white, with a green border
	$(block).hover(function() {
		$(this).css('background-color', 'white');
		$(this).css('outline', '2px solid white');
	});
});

// precondition: none
// postcondition: psuedorandom color is chosen and returned
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';

	for (var i = 0; i < 6; i++ ) 
	{
    	color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

// precondition: given div class to reset css properties and a color to reset the block's background color 
// postcondition: target div class' background color and outline have been reset to given color
function resetColor(target, color) {
	createGrid();
	$(target).css('background-color', color);
	$(target).hover(function() {
		$(this).css('background-color', 'white');
		$(this).css('outline', '2px solid white');
	});
}

// precondition: none
// postcondition: prompts user for number of blocks per row, calculates block width, 
//	and displays calculated X blocks per row/column 
function createGrid() {
	deleteGrid();
	var block = '.grid_block';
	var user_input = prompt("Enter the number of blocks per row: ");
	var total_width = 700;
	var block_dimension = (total_width / user_input) - 1;
	
	console.log(block_dimension);
	
	for (i = 0; i < user_input; i++)
	{ 
		for (j = 0; j < user_input; j++) 
		{
			$(".grid_container").append("<div class='grid_block'></div>");
			$(block).css('height', block_dimension);
			$(block).css('width', block_dimension);
		}
	}	
}

function deleteGrid() {
	$('.grid_block').remove();
}
