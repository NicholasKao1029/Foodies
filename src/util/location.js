
const Location = {

  options: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  },

  where(){
    if("geolocation" in navigator){
      console.log(navigator);
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          console.log('latitude', position.coords.latitude, 
                      'longitude', position.coords.longitude);
          return [position.coords.latitude, position.coords.longitude];
        },function error(error_message){
          console.error(error_message);
        }, Location.options
      )
    }else{
      console.log('browser does not have geolocation services');
      return [];
    }
  },

  async findCity(){
    const url = "https://revgeocode.search.hereapi.com/v1/revgeocode?at="
    const pos = Location.where();

    if(pos.length == undefined || pos.length === 0){
      return;
    }

    const endpoint = `${url}${pos[0]}?C`

    const response = fetch()
  }

}

export default Location