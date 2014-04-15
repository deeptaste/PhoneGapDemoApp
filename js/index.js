$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
   defaultPageTransition: 'none'
  });
});

////////////////////////////////////////////////
/* home page */
////////////////////////////////////////////////
$(document).on('pageshow', '#home', function(){  
	
	// User Login via Ajax Functionalities
	$(document).on('click', '#login', function(e) {
		var uName = $('#username').val();
		var pWord = $('#password').val();
		
		if(uName.length > 0 && pWord.length > 0) {
			navigator.notification.alert('Please wait...', null, 'Error', 'Login');
			
			if(!reachability()){
		        navigator.notification.alert('No internet connection available', null, '', 'OK');
		    }
		    else{
		    	$.ajax({
				    url        		: "http://localhost/SoapWebServiceForMobileApp/register.php?callback=myCallBack",
				    type       		: "POST",
				    crossDomain		: true,
				    data       		: {username : uName, password : pWord},
				    contentType		: "application/json; charset=utf-8",
				    dataType		: "jsonp",
				    jsonp			: "callback",
				    jsonpCallback	: "jsonpCallbackfunction",
				    success    		: function(data) {
				    	navigator.notification.alert(data, null, '', 'OK');
				    },
				    error      		: function(xhr, ajaxOptions, thrownErrorw) {
				        navigator.notification.alert('Some error occurred. Please try again later.', null, '', 'OK');           
				    }
				});
		    }
		}
		else {
			navigator.notification.alert('Please provide the required login details.', null, 'Error: Form validation', 'Login');
		}
	});
	
	// User Registration via Ajax Functionalities
	$(document).on('click', '#register', function(e) {
		var uName = $('#username').val();
		var pWord = $('#password').val();
		var cWord = $('#confirmPassword').val();
		var eMail = $('#email').val();
		
		if(uName.length > 0 && pWord.length > 0 && eMail.length > 0) {
			if(pWord == cWord) {
				navigator.notification.alert('Trying to login...', null, '', 'Login');
				
				if(!reachability()){
			        navigator.notification.alert('No internet connection available', null, '', 'OK');
			    }
			    else{
			    	$.ajax({
					    url        		: "http://localhost/SoapWebServiceForMobileApp/login.php?callback=myCallBack",
					    type       		: "POST",
					    crossDomain		: true,
					    //beforeSend 	: function() {$.mobile.loading('show');},
					    //complete   	: function() {$.mobile.loading('hide');},
					    data       		: {username : uName, password : pWord, email: eMail},
					    contentType		: "application/json; charset=utf-8",
					    dataType		: "jsonp",
					    jsonp			: "callback",
					    jsonpCallback	: "jsonpCallbackfunction",
					    success    		: function(data) {
					    	navigator.notification.alert(data, null, '', 'OK');
					    },
					    error      		: function(xhr, ajaxOptions, thrownErrorw) {
					        navigator.notification.alert('Some error occurred. Please try again later.', null, '', 'OK');        
					    }
					});
			    }
		    }
			else {
				navigator.notification.alert('Password does not match.', null, 'Form validation error!!', 'Login');
			}
		}
		else {
			navigator.notification.alert('Please provide the required login details.', null, 'Form validation error!!', 'Login');
		}
	});

});

////////////////////////////////////////////////
/* deviceInfo page */
////////////////////////////////////////////////
$(document).on('pageshow', '#deviceInfo', function() {
	deviceInfo();
});

function deviceInfo() {
	var element = document.getElementById('deviceProperties');
	element.innerHTML = '<label class=\'data-title\'>Device Name:</label> '     + 
						'<label class=\'data-info\'>' + device.name + '</label>' + 
						'<label class=\'data-title\'>Device Cordova:</label> '  + 
						'<label class=\'data-info\'>' + device.cordova + '</label>' + 
						'<label class=\'data-title\'>Device Platform:</label> ' + 
						'<label class=\'data-info\'>' + device.platform + '</label>' + 
						'<label class=\'data-title\'>Device UUID:</label> '     + 
						'<label class=\'data-info\'>' + device.uuid + '</label>' + 
						'<label class=\'data-title\'>Device Version:</label> '  + 
						'<label class=\'data-info\'>' + device.version + '</label>';
}

////////////////////////////////////////////////
/* accelerometer page */
////////////////////////////////////////////////
$(document).on('pageshow', '#accelerometer', function() {
	accelerometer();
});

var accelerometerWatchID = null;

function accelerometer() {
	var options = { frequency: 3000 };
	accelerometerWatchID = navigator.accelerometer.watchAcceleration(startAccelerometer, onError, options);
}

function startAccelerometer(acceleration) {
	var element = document.getElementById('accelerometer-details');
	
	var xVal = acceleration.x;
	var yVal = acceleration.y;
	var zVal = acceleration.z;
	
	var d = new Date(acceleration.timestamp);
	
	var date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
	date += ' ' + d.getHours() + ':' + numLength(2, d.getMinutes()) + ':' + numLength(2, d.getSeconds());
	
	element.innerHTML = '<table class=\'tbl-info\'>' +
						'<tr><th>Acceleration X</th><td>: ' + xVal + '</td></tr>' +
						'<tr><th>Acceleration Y</th><td>: ' + yVal + '</td></tr>' +
						'<tr><th>Acceleration Z</th><td>: ' + zVal + '</td></tr>' + 
						'<tr><th>Timestamp</th><td>: ' + date + '</td></tr></table>';
						
	var cell1 = document.getElementById('cell1');
	var cell2 = document.getElementById('cell2');
	var cell3 = document.getElementById('cell3');
	var cell4 = document.getElementById('cell4');
	var cell5 = document.getElementById('cell5');
	var cell6 = document.getElementById('cell6');
	var cell7 = document.getElementById('cell7');
	var cell8 = document.getElementById('cell8');
	var cell9 = document.getElementById('cell9');
	
	cell1.setAttribute('style','');
	cell2.setAttribute('style','');
	cell3.setAttribute('style','');
	cell4.setAttribute('style','');
	cell5.setAttribute('style','');
	cell6.setAttribute('style','');
	cell7.setAttribute('style','');
	cell8.setAttribute('style','');
	cell9.setAttribute('style','');
	
	var darkShadow = 'background: linear-gradient(45deg,#D8E2E9,#8BAABC);';
	var lightShadow = 'background: linear-gradient(45deg,#CBD9E2,#ECF1F4);';
	
	if(xVal == 0) {
		if(yVal > 0) {
			if(yVal < 2) {
				cell2.setAttribute('style',lightShadow);
			}
			else {
				cell2.setAttribute('style',darkShadow);
			}
		}
		else if(yVal < 0) {
			if(yVal > -2) {
				cell5.setAttribute('style',lightShadow);
			}
			else {
				cell8.setAttribute('style',darkShadow);
			}
		}
		else {
			cell5.setAttribute('style',darkShadow);
		}
	}
	
	if(xVal > 0) {
		if(yVal > 0) {
			if(yVal < 2) {
				if(xVal < 2) {
					cell2.setAttribute('style',lightShadow);
					cell3.setAttribute('style',lightShadow);
					cell6.setAttribute('style',lightShadow);
				}
				else {
					cell2.setAttribute('style',lightShadow);
					cell3.setAttribute('style',lightShadow);
					cell6.setAttribute('style',darkShadow);
				}
			}
			else {
				if(xVal < 2) {
					cell2.setAttribute('style',darkShadow);
					cell3.setAttribute('style',lightShadow);
					cell6.setAttribute('style',lightShadow);
				}
				else {
					cell2.setAttribute('style',lightShadow);
					cell3.setAttribute('style',darkShadow);
					cell6.setAttribute('style',lightShadow);
				}
			}
		}
		else if(yVal < 0) {
			if(yVal > -2) {
				if(xVal < 2) {
					cell6.setAttribute('style',lightShadow);
					cell8.setAttribute('style',lightShadow);
					cell9.setAttribute('style',lightShadow);
				}
				else {
					cell6.setAttribute('style',darkShadow);
					cell8.setAttribute('style',lightShadow);
					cell9.setAttribute('style',lightShadow);
				}
			}
			else {
				if(xVal < 2) {
					cell6.setAttribute('style',lightShadow);
					cell8.setAttribute('style',darkShadow);
					cell9.setAttribute('style',lightShadow);
				}
				else {
					cell6.setAttribute('style',lightShadow);
					cell8.setAttribute('style',lightShadow);
					cell9.setAttribute('style',darkShadow);
				}
			}
		}
	}
	
	if(xVal < 0 ){
		if(yVal > 0) {
			if(yVal < 2) {
				if(xVal > -2) {
					cell1.setAttribute('style',lightShadow);
					cell2.setAttribute('style',lightShadow);
					cell4.setAttribute('style',lightShadow);
				}
				else {
					cell1.setAttribute('style',lightShadow);
					cell2.setAttribute('style',lightShadow);
					cell4.setAttribute('style',darkShadow);
				}
			}
			else {
				if(xVal > -2) {
					cell1.setAttribute('style',lightShadow);
					cell2.setAttribute('style',darkShadow);
					cell4.setAttribute('style',lightShadow);
				}
				else {
					cell1.setAttribute('style',darkShadow);
					cell2.setAttribute('style',lightShadow);
					cell4.setAttribute('style',lightShadow);
				}
			}
		}
		else if(yVal < 0) {
			if(yVal > -2) {
				if(xVal > -2) {
					cell4.setAttribute('style',lightShadow);
					cell7.setAttribute('style',lightShadow);
					cell8.setAttribute('style',lightShadow);
				}
				else {
					cell4.setAttribute('style',darkShadow);
					cell7.setAttribute('style',lightShadow);
					cell8.setAttribute('style',lightShadow);
				}
			}
			else {
				if(xVal > -2) {
					cell4.setAttribute('style',lightShadow);
					cell7.setAttribute('style',lightShadow);
					cell8.setAttribute('style',darkShadow);
				}
				else {
					cell4.setAttribute('style',lightShadow);
					cell7.setAttribute('style',darkShadow);
					cell8.setAttribute('style',lightShadow);
				}
			}
		}
	}
}

function stopAccelerometer() {
	if (accelerometerWatchID) {
		navigator.accelerometer.clearWatch(accelerometerWatchID);
		accelerometerWatchID = null;
	}
}

////////////////////////////////////////////////
/* camera page */
////////////////////////////////////////////////
$(document).on('pageshow', '#camera', function() {
	camera();
});

var pictureSource;
var destinationType; 

function camera() {
	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
	var smallImage = document.getElementById('smallImage');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	largeImage.src = imageURI;
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onError, { quality: 50,
	destinationType: destinationType.DATA_URL });
}

function capturePhotoEdit() {
	navigator.camera.getPicture(onPhotoDataSuccess, onError, { quality: 20, allowEdit: true,
	destinationType: destinationType.DATA_URL });
}

function getPhoto(source) {
	navigator.camera.getPicture(onPhotoURISuccess, onError, { quality: 50, 
	destinationType: destinationType.FILE_URI,
	sourceType: source });
}

////////////////////////////////////////////////
/* geolocation page */
////////////////////////////////////////////////
$(document).on('pageshow', '#geolocation', function() {
	geolocation();
});

var geolocationWatchID = null;

function geolocation() {
	if(!reachability()){
        navigator.notification.alert('No internet connection available', null, '', 'OK');
    }
    else{
    	//var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    	//var options = { maximumAge: 5000, enableHighAccuracy: true };
    	var options = { enableHighAccuracy: true };
        geolocationWatchID = navigator.geolocation.watchPosition(startGeolocation, onError, options);
    }
}

function startGeolocation(position) {
	showGpsDetails(position);
	showMap(position);
}

function showGpsDetails(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var alt = position.coords.altitude;
	var acc = position.coords.accuracy;
	var alc = position.coords.altitudeAccuracy;
	var hed = position.coords.heading;
	var spd = position.coords.speed;
	
	var geoInfo = document.getElementById('geolocation-details');
	
	geoInfo.innerHTML = '<table class=\'tbl-info\'>' +
						'<tr><th>Latitude</th><td>: ' + lat + '</td></tr>' +
						'<tr><th>Longitude</th><td>: ' + lng + '</td></tr>' +
						'<tr><th>Altitude</th><td>: ' + alt + '</td></tr>' +
						'<tr><th>Accuracy</th><td>: ' + acc + '</td></tr>' +
						'<tr><th>Altitude Accuracy</th><td>: ' + alc + '</td></tr>' +
						'<tr><th>Heading</th><td>: ' + hed + '</td></tr>' +
						'<tr><th>Speed</th><td>: ' + isNull(spd) + '</td></tr></table>';
}

function showMap(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	
	var mapFrame 	= document.getElementById('map-frame');
	var curLocation = new google.maps.LatLng(lat, lng);
	
	var map = new google.maps.Map(mapFrame, {
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		center : curLocation,
		zoom : 11
	});
	
	var homeMarker = createMarker(map, curLocation, "YOU ARE HERE");
	
	iconFile = 'css/images/icons-png/green-dot.png';
	homeMarker.setIcon(iconFile);
}

function createMarker(map, placeLoc, desc) {
	var marker = new google.maps.Marker({
		map : map,
		position : placeLoc,
		title: desc
	});
	
	var infowindow = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(desc);
		infowindow.open(map, this);
	});
	
	return marker;
}

function stopGeolocation() {
    if (geolocationWatchID != null) {
        navigator.geolocation.clearWatch(geolocationWatchID);
        geolocationWatchID = null;
    }
}

////////////////////////////////////////////////
/* contacts page */
////////////////////////////////////////////////
$(document).on('pageshow', '#contacts', function() {
	
});

////////////////////////////////////////////////
/* media page */
////////////////////////////////////////////////
$(document).on('pageshow', '#media', function() {
	
});

////////////////////////////////////////////////
/* aboutUs page */
////////////////////////////////////////////////
$(document).on('pageshow', '#aboutUs', function() {
	
});

////////////////////////////////////////////////
/* more page */
////////////////////////////////////////////////
$(document).on('pageshow', '#more', function() {
	
});
