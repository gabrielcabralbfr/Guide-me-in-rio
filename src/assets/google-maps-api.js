export function GetPlacesFrom(placeType, coords) {
  let map, service;

  const local = new google.maps.LatLng(coords.lat, coords.long);

  map = new google.maps.Map(document.getElementById("map"), {
    center: local,
    zoom: 15
  });

  const request = {
    location: local,
    radius: "2000",
    types: [placeType]
  };

  let places = [];
  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.map(place => {
        if (
          place.types[0] == placeType &&
          place.rating &&
          place.opening_hours
        ) {
          places.push(place);
        }
      });
    }
  });

  return places;
}

export function GetDetailsById(id, coords) {
  let map, service;

  const request = {
    placeId: id
  };

  const local = new google.maps.LatLng(coords.lat, coords.long);

  const myLatLng = { lat: coords.lat, lng: coords.long };

  map = new google.maps.Map(document.getElementById("map"), {
    center: local,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Hello World!"
  });

  var placeResult;

  service = new google.maps.places.PlacesService(map);

  service.getDetails(request, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      placeResult = place;
      console.log(place);
      // return place;
    }
  });

  return placeResult;
}
