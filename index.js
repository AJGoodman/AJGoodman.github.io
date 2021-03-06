function initMap() {
	var infowindow = new google.maps.InfoWindow();
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 38.917, lng: -77.232},
		zoom: 3
	});

	function Location(name, coordinates, content) {
		this.name = name;
		this.coordinates = coordinates;
		this.content = content;
	}



	var locations = [
		new Location('Arlington', {lat:38.88 , lng:-77.11}, locationInfo.arlington),
		new Location('San Francisco', {lat:37.79 , lng:-122.42}, locationInfo.sanFrancisco),
		new Location('Chicago', {lat:41.95, lng:-87.66}, locationInfo.chicago),
		new Location('Miami', {lat:25.72, lng:-80.28}, locationInfo.miami),
		new Location('Paris', {lat:48.85, lng:2.35}, locationInfo.paris),
		new Location('London', {lat:51.51, lng:-0.09}, locationInfo.london),
		new Location('Sydney', {lat:-33.87, lng:151.21}, locationInfo.sydney),
		new Location('Queenstown', {lat:-45.03, lng:168.66}, locationInfo.queenstown),
		new Location('Playa Del Carmen', {lat:20.63, lng:-87.06}, locationInfo.playaDelCarmen),
		new Location('Montego Bay', {lat:18.46, lng:-78.01}, locationInfo.montegoBay),
		//new Location('Costa Rica', {lat:, lng:}, ''),
		new Location('Milan', {lat:45.46, lng:9.19}, locationInfo.milan),
		new Location('Lake Como', {lat:45.99, lng:9.26}, locationInfo.lakeComo),
		new Location('Venice', {lat:45.44, lng:12.33}, locationInfo.venice),
		//new Location('Provence', {lat:, lng:}, ''),
		new Location('Niagara Falls', {lat:43.08, lng:-79.07}, ),
		new Location('Reynisfjara', {lat:63.41, lng:-19.09}, locationInfo.reynisfjara),
		new Location('Skogafoss', {lat:63.53, lng:-19.51}, locationInfo.skogafoss),
		new Location('Svinafellsjokull', {lat:63.98, lng:-16.96}, locationInfo.svinafellsjokull),
		new Location('Alaska', {lat:61.22, lng:-149.90}, locationInfo.alaska),
		new Location('Hawaii', {lat:21.28, lng:-157.83}, locationInfo.hawaii),
		new Location('Lake McAlester', {lat:35.03, lng:-95.83}, locationInfo.lakeMcAlester),
		new Location('Big Sky', {lat:45.28, lng:-111.40}, locationInfo.bigSky),
		new Location('Wisp', {lat:39.56, lng:-79.36}, locationInfo.wisp),
		new Location('New Orleans', {lat:29.95, lng:-90.07}, locationInfo.newOrleans),
		new Location('Las Vegas', {lat:36.11, lng:-115.17}, locationInfo.lasVegas),
		new Location('Dublin', {lat:53.35, lng:-6.26}, locationInfo.dublin),


	]

	function placeMarker(location) {
		var marker = new google.maps.Marker({
			position : location.coordinates,
			title : location.name,
			map : map
		})

		google.maps.event.addListener(marker, 'click', function(){
		    infowindow.close(); // Close previously opened infowindow
		    infowindow.setContent( "<div id='infowindow'>"+ location.content +"</div>");
		    infowindow.open(map, marker);
		})
	}

	for (var i = 0; i < locations.length; i++) {
		placeMarker(locations[i]);
	}

	console.log(locations);
}