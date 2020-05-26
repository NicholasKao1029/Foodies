const Location = {

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  },

  where(){
    if("geolocation" in navigator){
      console.log(navigator);
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          // for when getting location is a success
          console.log('latitude', position.coords.latitude, 
                      'longitude', position.coords.longitude);
        },function error(error_message){
          console.error(error_message);
        }, options
      )
    }else{
      console.log('browser does not have geolocation services');
    }
  }
}

export default Location