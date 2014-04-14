var watchID = null;

function geoLocation() {
	if(!reachability()){
        navigator.notification.alert('No internet connection available', null, '', 'OK');
    }
    else{
    	//var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
    	//var options = { maximumAge: 5000, enableHighAccuracy: true };
    	var options = { enableHighAccuracy: true };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }
}

function onSuccess(position) {
	showDetails(position);
	showMap(position);
}

function showDetails(position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var alt = position.coords.altitude;
	var acc = position.coords.accuracy;
	var alc = position.coords.altitudeAccuracy;
	var hed = position.coords.heading;
	var spd = position.coords.speed;
	
	var geoInfo = document.getElementById('geolocation');
	
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

function onError(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
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
    if (watchID != null) {
        navigator.geolocation.clearWatch(watchID);
        watchID = null;
    }
}