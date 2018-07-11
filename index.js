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

	var locationInfo = {
		venice : '<div><img src="./BridgeOfSighs.jpg" class="infoWindowImage"></div><div><p></p></div>'
	};

	var locations = [
		new Location('Arlington', {lat:38.88 , lng:-77.11}, 'home'),
		new Location('San Francisco', {lat:37.79 , lng:-122.42}, 'not home'),
		new Location('Chicago', {lat:41.95, lng:-87.66}, 'Chi-town'),
		new Location('Miami', {lat:25.72, lng:-80.28}, 'go canes'),
		new Location('Paris', {lat:48.85, lng:2.35}, 'bonjour'),
		new Location('London', {lat:51.51, lng:-0.09}, 'fish and chips'),
		new Location('Sydney', {lat:-33.87, lng:151.21}, 'down under'),
		new Location('Queenstown', {lat:-45.03, lng:168.66}, 'kiwis'),
		new Location('Playa Del Carmen', {lat:20.63, lng:-87.06}, 'hola'),
		new Location('Montego Bay', {lat:18.46, lng:-78.01}, 'hola'),
		//new Location('Costa Rica', {lat:, lng:}, ''),
		new Location('Milan', {lat:45.46, lng:9.19}, '<img src="./MilanDuomo.jpg" class="infoWindowImage">'),
		new Location('Lake Como', {lat:45.99, lng:9.26}, '<img src="./LakeComo.jpg" class="infoWindowImage">'),
		new Location('Venice', {lat:45.44, lng:12.33},  ),
		//new Location('Provence', {lat:, lng:}, ''),
		new Location('Niagara Falls', {lat:43.08, lng:-79.07}, ''),
		new Location('Reynisfjara', {lat:63.41, lng:-19.09}, '<img src="./Reynisfjara.jpg" class="infoWindowImage">'),
		new Location('Skogafoss', {lat:63.53, lng:-19.51}, '<img src="./Skogafoss.jpg" class="infoWindowImage">'),
		new Location('Svinafellsjokull', {lat:63.98, lng:-16.96}, '<img src="./Iceland.jpg" class="infoWindowImage">'),

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