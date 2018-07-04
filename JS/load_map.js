
window.addEventListener('load',function(){
    if(document.getElementById('map-canvas')){
      google.load("maps", "3",{
        callback:function(){
           new google.maps.Map(document.getElementById('map-canvas'), {
              center: new google.maps.LatLng(19.2372, 72.8441),
              zoom: 10
            });
        }
      });     
    }
  },false);