// Function to create the grid
const createGrid = (x) => {
	const size = 500;
	const boxsize = 500 / x;
	const wrap = $('.grid').html("");
	for (let rows = 0; rows < x; rows++) {
	  for (let columns = 0; columns < x; columns++) {
		wrap.append($("<div></div>").addClass("square").height(boxsize).width(boxsize));
	  }
	  wrap.append($("<div></div>").css("clear", "both"));
	}
  };
  
  // Function to clear the grid
  const clear = () => {
	$('.square').css('background', 'white');
  };
  
  // Function to generate a random rainbow color
  const rainbow = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `#${red.toHex()}${green.toHex()}${blue.toHex()}`;
  };
  
  // Extend Number prototype to convert numbers to hexadecimal representation
  Number.prototype.toHex = function () {
	return (this < 16) ? `0${this.toString(16)}` : this.toString(16);
  };
  
  // Main function to set up the interactions
  $(() => {
	createGrid(16);
  
	$('.square').mouseenter(function () {
	  $(this).css('background', 'black');
	});
  
	$('#clear-button').click(clear);
  
	$('#new-button').click(() => {
	  $('.square').unbind();
	  const input = prompt("Enter number of squares between 1 and 100");
	  if (input > 1 && input <= 100) {
		createGrid(input);
		clear();
	  } else {
		alert('Please enter a number from 1 to 100');
	  }
	  $('.square').mouseenter(function () {
		$(this).css('background', 'black');
	  });
	});
  
	$('#rainbow-button').click(() => {
	  $('.square').unbind();
	  const input = prompt("Enter number of squares between 1 and 100");
	  if (input > 1 && input <= 100) {
		createGrid(input);
		clear();
	  } else {
		alert('Please enter a number from 1 to 100');
	  }
	  $('.square').mouseenter(function () {
		$(this).css('background', rainbow());
	  });
	});
  
	$('#trail-button').click(() => {
		$('.square').unbind();
		const input = prompt("Enter number of squares between 1 and 100");
		if (input > 1 && input <= 100) {
		  createGrid(input);
		  clear();
		} else {
		  alert('Please enter a number from 1 to 100');
		  return; // Return early if input is invalid
		}
	  
		$('.square').hover(
		  function () {
			$(this).css('opacity', 0);
		  },
		  function () {
			$(this).fadeTo('fast', 1);
		  }
		);
	});
  });
  