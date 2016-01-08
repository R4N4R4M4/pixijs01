var latitude;
var longitude;
var altitude;
var accuracy;
var altitudeAccuracy;
var heading;
var speed;
var timestamp;

function geolocation()
  {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  
function onSuccess(position) 
    {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    altitude = position.coords.altitude;
    accuracy = position.coords.accuracy;
    altitudeAccuracy = position.coords.altitudeAccuracy;
    heading = position.coords.heading;
    speed = position.coords.speed;
    timestamp = position.timestamp;
}
    
function onError(error) 
    {
    alert('code:'+error.code+'\n'+'message:'+error.message+'\n');
    }
