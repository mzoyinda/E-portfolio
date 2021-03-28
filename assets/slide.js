var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "./public/yellow.jpeg";
images[1] = "./public/jean.jpg";
images[2] = "./public/guys.jpg";
images[3] = "./public/jersey.jpg";
images[4] = "./public/girls.jpg";
images[5] = "./public/waste.jpg";
images[6] = "./public/shirt.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;