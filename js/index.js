function init() {
    document.addEventListener("deviceready", onDeviceReady, true);
}


var onDeviceReady = function() {
    navigator.notification.alert(device.name, null, 'ERROR', 'OK');
    
    document.getElementById('info').innerHTML = device.name; 
};