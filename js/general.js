function isNull(value) {
	return value == null ? 0 : ( value[1] || 0 );
}

function isUndefined(value) {
	if(typeof(value) === 'undefined') {
		return '-';
	}
}

function reachability(){
    if(navigator.network.connection.type == Connection.NONE || navigator.network.connection.type == Connection.UNKNOWN) {
        return false;
    }
    else {
        return true;
    }
}

function numLength(len, num) {
	var num = '' + num;
	
	if (num.length < len) {
		for(i = 1; i < len; i++) {
			num = "0" + num;
		}
	}
	return num;
}

function userRegistrationDisplay() {
	document.getElementById('userRegistrationSection').setAttribute('style', 'display: block !important;');
	document.getElementById('userLoginLink').setAttribute('style', 'display: block !important;');
	
	document.getElementById('userLoginSection').setAttribute('style', 'display: none !important;');
	document.getElementById('userRegistrationLink').setAttribute('style', 'display: none !important;');
}

function userLoginDisplay() {
	document.getElementById('userLoginSection').setAttribute('style', 'display: block !important;');
	document.getElementById('userRegistrationLink').setAttribute('style', 'display: block !important;');
	
	document.getElementById('userRegistrationSection').setAttribute('style', 'display: none !important;');
	document.getElementById('userLoginLink').setAttribute('style', 'display: none !important;');
}
