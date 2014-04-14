var watchID = null;

function accelerometer() {
	var options = { frequency: 3000 };
	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopAccelerometer() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

function onSuccess(acceleration) {
	var element = document.getElementById('accelerometer');
	
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

function onError() {
	alert('onError!');
}