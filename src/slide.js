var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "/yellow.jpeg";
images[1] = "/jean.jpg";
images[2] = "/guys.jpg";
images[3] = "/jersey.jpg";
images[4] = "/girls.jpg";
images[5] = "/waste.jpg";
images[6] = "/shirt.jpg";


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