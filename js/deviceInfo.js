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