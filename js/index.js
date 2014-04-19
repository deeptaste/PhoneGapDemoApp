function load() {
    document.addEventListener("deviceready", onDeviceReady, true);
}


var onDeviceReady = function() {
    document.getElementById('deviceName').innerHTML = device.name;
};