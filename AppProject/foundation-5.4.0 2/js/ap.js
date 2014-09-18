
function capturePhoto(){
	//alert("capture button working");
	navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
}

function upoloadPhoto(data){
	//this is where you would send the image file to server
}

	cameraPic.src = data;
	//cameraPic.src = "data:image/jpeg;base64," + data;
	// Successful upload to the server
	navigator.notification.alert(
		'YOur Photo has been uploaded' //message
		okay,							//Callback
		'Photo Uploaded',            //title
		'OK'						//buttonName
		);
}

function okay(){
		// Do Something
}