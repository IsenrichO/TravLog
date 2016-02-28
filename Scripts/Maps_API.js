function initMap() {

	var fusionTablesId = "1atL7oaDB6nSPSQ6inNg5lZwHjTfHbPXIidWZ_5f3";
	/* [Ref. URL]: < https://www.google.com/fusiontables/DataSource?docid=1atL7oaDB6nSPSQ6inNg5lZwHjTfHbPXIidWZ_5f3 > */


	// Defined styles array:
	var styles = [
		{
			stylers: [
				{ hue: "#35acf2" }, 
				{ saturation: 30 }
			]
		}, {
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{ lightness: 40 },
				{ visibility: "simplified" }
			]
		}, {
			featureType: "road",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		}, {
			featureType: "water",
			elementType: "all",
			stylers: [
				{ visibility: "on" },
				{ color: "#3a3a3a" }	// rgb(21, 25, 24);
			]
		}, {
			featureType: "administrative.country",
			elementType: "geometry.stroke",
			stylers: [
				{ visibility: "on" },
				{ color: "#ffffff" },
				{ weight: 1 }
			]
		}
	];


	// Create a new StyledMapType ojbect, passing it the array of styles:
	var styledMap = new google.maps.StyledMapType(styles, 
		{name: "Styled Map"});

	// Create a mapOptions object, including a MapTypeId to add to the map type control:
	var mapOptions = {
		

		zoom: 2,
		minZoom: 2,
		maxZoom: 11,
		center: new google.maps.LatLng(33.996168, -37.588240),
		
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER,
			style: google.maps.ZoomControlStyle.LARGE
		},
		
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_LEFT,
			mapTypeIds: [
				google.maps.MapTypeId.TERRAIN,
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.SATELLITE,
				google.maps.MapTypeId.HYBRID,
				"map_style"
			]
		},

		rotateControl: true,
		rotateControlOptions: {
			position: google.maps.ControlPosition.RIGHT_CENTER
		},

		scaleControl: true,
		scaleControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},

		scrollwheel: false,

		streetViewControl: true,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},

		fullscreenControl: true,
		fullscreenControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		}
	};

	// Create a map object:
	var map = new google.maps.Map(document.getElementById("mapContainer"),
		mapOptions);

	map.mapTypes.set("map_style", styledMap);
	map.setMapTypeId("map_style");


	var layer = new google.maps.FusionTablesLayer();
	layer.setMap(map);
	/*{
		query: {
			select: "geometry",
			from: "1atL7oaDB6nSPSQ6inNg5lZwHjTfHbPXIidWZ_5f3"
		},
		styles: [{
			polygonOptions: {
				fillColor: "#151918",		// rgb(21, 25, 24);
				fillOpacity: 0.28,
				strokeColor: "#ffffff",
				strokeWeight: 1
			}
		}]
	}); */

	


	google.maps.event.addDomListener(
		document.getElementById("submitBtn"),
		"click",
		function() {
			filterMap(layer, fusionTablesId, map);
		}
	);

	function pinIt() {
		setTimeout(function() {
			var marker = new google.maps.Marker({
				map: map,
				position: {lat: 38.905, lng: 77.016},
				draggable: true,
				animation: google.maps.Animation.DROP
			}, 2000);
		});
	}

}


function filterMap(layer, fusionTablesId, map) {

	var queryStr = "CountryName IN (" + listArr.join(",") + ")";

	layer.setOptions({
		query: {
			select: "geometry",
			from: fusionTablesId,
			where: queryStr
		}, 
		styles: [{
			polygonOptions: {
				fillColor: "#12f902", //"#1E90FF",
				fillOpacity: 0.2,
				strokeColor: "#10a396", //"#20d6a5"
				strokeOpacity: 0.95,
				strokeWeight: 2
			}
		}]
	});

	layer.setMap(map);
}




