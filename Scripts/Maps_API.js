
function initMap() {

	var fusionTablesId = "1atL7oaDB6nSPSQ6inNg5lZwHjTfHbPXIidWZ_5f3";
	// [Ref. URL]: < https://www.google.com/fusiontables/DataSource?docid=1atL7oaDB6nSPSQ6inNg5lZwHjTfHbPXIidWZ_5f3 >


	// Defined styles array:
	var styles = [
		{
			stylers: [
				{ hue: "#35ACF2" }, 
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
				{ color: "#787878" }		// DarkGrey: "#3A3A3A"		|		rgb(21, 25, 24);
			]
		}, {
			featureType: "administrative.country",
			elementType: "geometry.stroke",
			stylers: [
				{ visibility: "on" },
				{ color: "#FFFFFF" },
				{ weight: 1 }
			]
		}
	];


	// Create a new StyledMapType ojbect, passing it the array of styles:
	var styledMap = new google.maps.StyledMapType(styles, 
		{ name: "TravLog Map" }
	);

	// Create a mapOptions object, including a MapTypeId to add to the map type control:
	var mapOptions = {
	
		draggableCursor: "crosshair",
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

		panControl: true,

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


	var coords_Div = document.getElementById("coords_Div"),
		coord_Lat = document.getElementById("coord_Lat"),
		coord_Lng = document.getElementById("coord_Lng");

	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(coords_Div);
	map.addListener("mousemove", function(evt) {
		coord_Lat.textContent = "Latitude: " + Number(evt.latLng.lat().toFixed(3));
		coord_Lng.textContent = "Longitude: " + Number(evt.latLng.lng().toFixed(3));
	});
			// Math.round(evt.latLng.lat())
			// Math.round(evt.latLng.lng())


	// Binding of DOM event listeners:	
	google.maps.event.addDomListener(document.getElementById("path_Btn"), "click", function() {
		var myDraw;
		if (document.getElementById("path_Btn").classList.contains("activated")) {
			activeDraw = true;
			myDraw = userDraw(map, activeDraw);
		} else if (document.getElementById("path_Btn").classList.contains("deactivated")) {
			// newUserMap = undefined;
			// userDraw

			activeDraw = false;
			//myDraw = userDraw(map, activeDraw);
			
		} 

	});


	google.maps.event.addDomListener(document.getElementById("submit_Btn"), "click", function() {
		filterMap(layer, fusionTablesId, map);
	});




	google.maps.event.addDomListener(document.getElementById("delete_Trip"), "click", 
		
		//function() {}
			// removeLast('tripsContainer');
			
			function removeLastTrip() {
				var promptInput = confirm("Are you sure you wish to remove your last trip? This cannot be undone.");
		
				if (promptInput) {
					removeLast("tripsContainer"); 
				

					daysAbroad_Arr.pop();
					
					listArr.pop();
						console.log(listArr);
						console.log(listArr.pop);

					clearPath();

					// travelPath.setMap(null);

					clearMarkers();
						console.log(markers_Arr);

					// tripCoordinates.pop();
						console.log(tripCoordinates);

					// fixMarkers();
					// fixLine();
					// fixList();
					
					// travelPath.setMap(null);
						console.log(travelPath);
		
					filterMap(layer, fusionTablesId, map);
				}
			}
		
	);

	// Define a symbol using SVG path notation, with an opacity of 1.
	
}


// Function 'filterMap' sets the Maps overlay to the current display based on user actions:
function filterMap(layer, fusionTablesId, map) {

	// var queryStr = "CountryName IN (" + listArr.join(",") + ")";
	var queryStr = "CountryName IN ('";
	if (listArr.length > 1) {
		queryStr += listArr.join("' ,'") + "')";
	} else if (listArr.length === 1) {
		queryStr += listArr[0] + "')";
	} else {
		queryStr += "')";
	}

	layer.setOptions({
		query: {
			select: "geometry",
			from: fusionTablesId,
			where: queryStr
		}, 
		styles: [{
			polygonOptions: {
				fillColor: "#12F902", 			// #1E90FF
				fillOpacity: 0.2,
				strokeColor: "#FFFFFF",			// #10A396"		|	"#20D6A5"
				strokeOpacity: 0.95,
				strokeWeight: 1
			}
		}]
	});

	layer.setMap(map);


	function addTravelPathLayer(map) {
		
		// clearPath();
		tripCoordinates = [];

		// travelPath;
		// travelPath.setMap(null);

		forEach(listArr, function(countryCoords) {
			// var country_Ref = listArr[listArr.length - 1];
			var	latitude = countryObject[countryCoords]["coords"]["lat"],
				longitude = countryObject[countryCoords]["coords"]["lng"];
					console.log(latitude);
					console.log(longitude);

			tripCoordinates.push({
				// lat: countryObject[countryName]["coords"]["lat"],
				// lat: latitude,
				lat: countryObject[countryCoords]["coords"]["lat"],

				// lng: countryObject[countryName]["coords"]["lng"]
				// lng: longitude
				lng: countryObject[countryCoords]["coords"]["lng"]
			});
				console.log(tripCoordinates);
		});		
		
		travelPath = new google.maps.Polyline({
			path: tripCoordinates,
			map: map,
			geodesic: true,
			strokeColor: "#3cb371",					// CSS3 'MediumSeaGreen', Hex Color Code: "#3CB371"		|		CSS3 'DodgerBlue', Hex Color Code: "#1E90FF"	|	"#ED5353"
			strokeOpacity: 0.95,
			strokeWeight: 3
		});

		// travelPath.setMap(map);
			console.log(travelPath);			

	}

	addTravelPathLayer(map);


	function addMarkersLayer(map) {
		forEach(listArr, function(countryMarker) {
			// var country_Ref = listArr[listArr.length - 1];
			
			var	latitude = countryObject[countryMarker]["coords"]["lat"],
				longitude = countryObject[countryMarker]["coords"]["lng"];
			// var	latitude = countryObject[listArr[listArr.length - 1]]["coords"]["lat"],
			//	longitude = countryObject[listArr[listArr.length - 1]]["coords"]["lng"];
					console.log(latitude);
					console.log(longitude);		

			var marker = new google.maps.Marker({
				map: map,
				title: listArr[listArr.length - 1],
				draggable: false,
				animation: google.maps.Animation.DROP,
				position: {lat: latitude, lng: longitude},
				icon: "../Graphics/Custom Marker.png",
				zIndex: google.maps.Marker.MAX_ZINDEX
			});

			function toggleAnimationState() {
				(marker.getAnimation() !== null) ? marker.setAnimation(null) : marker.setAnimation(google.maps.Animation.BOUNCE);
			}

			marker.addListener("click", toggleAnimationState);
			markers_Arr.push(marker);
				console.log(markers_Arr);
		});
	}

	addMarkersLayer(map);

}


// Adjust 'listArr' countries array following removal of a trip:
function setMapOnAll(map) {
	for (var i = 0; i < markers_Arr.length; i++) {
		markers_Arr[i].setMap(map);
	}
}


// Function 'clearMarkers' sets all markers to "null" state:
function clearMarkers() {
	setMapOnAll(null);
	markers_Arr = [];
}


/* // Function 'fixLine' terminates the existing travel path:
function fixLine() {
	// travelPath.setMap(null);
	forEach(travelPath, function(path) {
		path.setMap(null);
	});
} */

/* function filterMarkers(map) {
	forEach(markers_Arr, function(mrkr) {
		markers_Arr[mrkr].setMap(map);
	});
} */

// Adjust 'listArr' countries array following removal of a trip:
function setPathOnAll(map) {
	for (var i = 0; i < tripCoordinates.length; i++) {
		travelPath[i].setMap(map);
	}
}

function clearPath() {
	// var size = travelPath.length;
	// setPathOnAll(null);
	travelPath.setMap(null);
}




/* *************************************** */
var activeDraw;

function userDraw(map, activeDraw) {

	if (activeDraw === true) {
		/* if (document.getElementById("path_Btn").classList.contains("deactivated")) {
			return "Nice";
		} else {} */


var clickListener = map.addListener("click", addLatLng);


	// Changes the cursor attribute while user hovers over the 'map' element, and only while 'path_Btn' holds the ".activated" class:
	map.setOptions({
		draggableCursor: "default"
	});

	// Declaration of some outer-scope variables and the 'poly' Polyline element produced according to the click event LatLng values of the user:
	var path,
		closedPath,
		poly = new google.maps.Polyline({
			// strokeColor: "#CF2515",
			strokeColor: chosenColor,
			strokeOpacity: 0,
			strokeWeight: chosenStrokeWidth,
			geodesic: curvatureState,
			icons: [{
		      icon: lineSymbol,
		      offset: "0",
		      repeat: "20px"
			}]
		}),
		fillShape = new google.maps.Polygon({
			path: path,
			strokeOpacity: 0,
			icons: [{
				icon: lineSymbol,
				offset: "5px",
				repeat: "20px"
			}],
			fillColor: chosenColor,
			fillOpacity: 0.20,
			geodesic: curvatureState,
			editable: editState
		});

	poly.setMap(map);


	/* google.maps.event.addDomListener(geodesy_Btn, "click", function() {
		geodesy_Btn.classList.contains("activated") ? (curvatureState = true, polyRender(poly, map)) 
													: (curvatureState = false, polyRender(poly, map));
	}); */

	google.maps.event.addDomListener(geodesy_Btn, "click", function() {
		modifyCurvature(fillShape, poly, map, path);
	});


	/*
	// Add an event listener for the interaction of user's click(s):
	if (document.getElementById("path_Btn").classList.contains("activated")) {
		var clickListener = map.addListener("click", addLatLng);
	} else {
		google.maps.event.removeListener(clickListener);
	} */


	// Handles click events on a map, and adds a new point to the Polyline.
	function addLatLng(evt) {
		path = poly.getPath();
		

		// Because path is an MVCArray, we can simply append a new coordinate and it will automatically appear.
  		path.push(evt.latLng);
  			console.log(path);

  		//closedPath.push(evt.latLng);
  		//	console.log(closedPath); 

  		// Retrieve & store the next sequential alphabetic character (style: all-caps) from the 'alphabet' global array variable:
  		var currentLetter = alphabet[currentIndex];
  			console.log(currentLetter);

  		// Add a new marker at the new plotted point on the polyline.
  		var clickMarker = new google.maps.Marker({
  			position: evt.latLng,
  			draggable: true,
  			title: "#" + path.getLength(),
  			zIndex: google.maps.Marker.MAX_ZINDEX - 1,
  			icon: "http://maps.google.com/mapfiles/marker" + currentLetter + ".png",
  				//	Ref. URL:  	"http://maps.gstatic.com/mapfiles/markers2/boost-marker-mapview.png"
  				//  File Path:  "../Graphics/measle.png"
  			map: map
  		});

  		// Proceed to the next index of the 'alphabet' array:
  		currentIndex++;
  			console.log(currentIndex);
	}


	// DOM event listener attached to the "#fill_Btn" element, for which follows the action of toggling the polygon fill geometry:
	google.maps.event.addDomListener(fillState, "click", function() {
		
		console.log(fillState.classList);

		if (fillState.classList.contains("activated")) {
			// path.push(closedPath[0]);			// Push the first element as a second instance within the 'path' MVCArray, to close the polygon bounds.
			/* closedPath.push(closedPath[0]);		// Not strictly necessary since polygons are, by construction, closed entities.	*/

	  		clearAll(poly, fillShape, path);
	  		polyRender(poly, map);
	  		fillRender(fillShape, poly, map, path);
	  		
	  		document.getElementById("fill_Btn").firstElementChild.setAttribute("src", "../Graphics/Polygon Fill, Inactive.png");

		} else if (fillState.classList.contains("deactivated") || !(fillState.classList.contains("deactivated"))) {
	  		clearAll(poly, fillShape, path);
	  		polyRender(poly, map);
	  		fillRender(fillShape, poly, null, path);

	  		document.getElementById("fill_Btn").firstElementChild.setAttribute("src", "../Graphics/Polygon Fill, Active.png");

		}
	});	


	// google.maps.event.addDomListener(document.getElementById("colorName"), "")
		// var nameDisplay_Header = document.getElementById("colorName");

	colorNew(fillShape, poly, map, path);
	widthListener(fillShape, poly, map, path);
	opacityListener(fillShape, poly, map, path);

	} else {
		google.maps.event.removeListener(clickListener);
		alert("This function is disabled");
	}
}



// DOM event listener
function colorNew(polygon, polyline, map, path) {
	var colors_ArrTwo = document.getElementsByClassName("color_Div");
	var color_Blue = document.getElementById("colorDodgerBlue");

	google.maps.event.addDomListener(window, "click", function(evt) {
		var color_ID = evt.target.id;
			console.log(color_ID);
			console.log(evt.target.id);
		
		switch(color_ID) {
			case "colorDodgerBlue":
				chosenColor = "#1E90FF";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);		
				break;
			case "colorMediumSeaGreen":
				chosenColor = "#3CB371";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorAliceBlue":
				chosenColor = "#F0F8FF";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorSilver":
				chosenColor = "#C0C0C0";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorGoldenRod":
				chosenColor = "#DAA520";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorMediumTurquoise":
				chosenColor = "#48D1CC";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;		
			case "colorFireBrick":
				chosenColor = "#B22222";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorDimGray":
				chosenColor = "#696969";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorLightSalmon":
				chosenColor = "#FFA07A";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorBlack":
				chosenColor = "#000000";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorMagenta":
				chosenColor = "#FF00FF";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "colorLightSlateGray":
				chosenColor = "#778899";
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: chosenColor })
																);
				break;
			case "customColor":
				chosenColor = evt.target.value;
					console.log(chosenColor);

				google.maps.event.addDomListener(document.getElementById("customColor"), "change", function() {
					chosenColor = document.getElementById("customColor").value;
						console.log(document.getElementById("customColor").value);

					fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: chosenColor }),
																 polyRender(polyline, map), polyline.setOptions({ strokeColor: chosenColor })
																) :	(polyRender(polyline, map),
																	 polyline.setOptions({ strokeColor: chosenColor })
																	);
				});
				break;	


																																																		
			
			/*
			default:
				fillState.classList.contains("activated") ? (fillRender(polygon, polyline, map, path), polygon.setOptions({ fillColor: "#ED5353" }),
															 polyRender(polyline, map), polyline.setOptions({ strokeColor: "#CF2515" })
															) :	(polyRender(polyline, map),
																 polyline.setOptions({ strokeColor: "#CF2515" })
																);

				polyRender(polyline, map);
				polyline.setOptions({ strokeColor: "#FF000" });	*/
		}	
				
	});
}
		
		
// Renders a filled geometry (i.e., "Polygon" object), whose bounds are defined by the user's LatLng click event coordinates:
function fillPath(polygon, map, area) {

	// If condition to toggle off the polygon fill geometry visibility:
	if (map === null) {
		polygon.setMap(null);
	} else {
		polygon.setMap(mapOver);
	}
}		


// 
function clearAll(polyline, polygon, path) {
	// polyline.setMap(null);
	polyRender(polyline, null);

	// fillRender(polygon, null, path);
	fillRender(polygon, polyline, null, path);
}


// 
function polyRender(polyline, map) {
	polyline.setMap(null);

	polyline.setOptions({ 
		geodesic: curvatureState,
		editable: editState,
		strokeWeight: chosenStrokeWidth,
		map: map
	});
}


//
function fillRender(polygon, polyline, map, path) {
	polygon.setMap(null);

	polygon.setOptions({
		path: path,
		map: map,
		geodesic: curvatureState,
		editable: editState,
		fillColor: chosenColor,
		fillOpacity: chosenOpacity
		// strokeWidth: chosenStrokeWidth
	});
}


/*
function modifyCurvature(polygon, polyline) {
	geodesy_Btn.classList.contains("activated") ? (curvatureState = true, 
												   polygon.setOptions({ geodesic: curvatureState }), 
												   polyline.setOptions({ geodesic: curvatureState })
												  )	: geodesy_Btn.classList.contains("deactivated") ? (curvatureState = false,
												  													   polygon.setOptions({ geodesic: curvatureState }),
												  													   polyline.setOptions({ geodesic: curvatureState })
												  													  ) : alert("No change!");
} */

function modifyCurvature(polygon, polyline, map, path) {
	geodesy_Btn.classList.contains("activated") && fillState.classList.contains("activated") ? (curvatureState = true, 
												   fillRender(polygon, polyline, map, path), polygon.setOptions({ geodesic: curvatureState }), 
												   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState }),
												   document.getElementById("curvePath").firstElementChild.setAttribute("src", "../Graphics/Curved Path.png")
												  )	: 
	geodesy_Btn.classList.contains("activated") ? (curvatureState = true, 
												   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState }),
												   document.getElementById("curvePath").firstElementChild.setAttribute("src", "../Graphics/Curved Path.png")
												  ) : 
	geodesy_Btn.classList.contains("deactivated") && fillState.classList.contains("activated") ? (curvatureState = false,
												   fillRender(polygon, polyline, map, path), polygon.setOptions({ geodesic: curvatureState }),
												   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState }),
												   document.getElementById("curvePath").firstElementChild.setAttribute("src", "../Graphics/Linear Path.png")
												  ) : (curvatureState = false,
												  	   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState }),
												  	   document.getElementById("curvePath").firstElementChild.setAttribute("src", "../Graphics/Linear Path.png")
											  	  );
}

function modifyColor(polygon, polyline, map, path) {
	geodesy_Btn.classList.contains("activated") ? (curvatureState = true, 
												   fillRender(polygon, polyline, map, path), polygon.setOptions({ geodesic: curvatureState }), 
												   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState })
												  )	: (curvatureState = false,
												  	   fillRender(polygon, polyline, map, path), polygon.setOptions({ geodesic: curvatureState }),
												  	   polyRender(polyline, map), polyline.setOptions({ geodesic: curvatureState })
												  	  );
}

		

// Declarations of a set of global variables, mainly those of relevance to this ("Maps_API.js") [Java]Script file:
// var chosenColor = "#FF0000";
var chosenColor,
	chosenStrokeWidth,
	chosenOpacity;

function widthListener(polygon, polyline, map, path) {
	google.maps.event.addDomListener(document.getElementById("strokeWidth_Inpt"), "change", function() {
		// var newWidth = document.getElementById("strokeWidth_Inpt").value;
		chosenStrokeWidth = document.getElementById("strokeWidth_Inpt").value;
		// chosenStrokeWidth = newWidth;
			console.log(chosenStrokeWidth);

		lineSymbol["strokeWeight"] = chosenStrokeWidth;

		polyRender(polyline, map);
		polyline.setOptions({ strokeWeight: chosenStrokeWidth });
	});
}


function opacityListener(polygon, polyline, map, path) {
	google.maps.event.addDomListener(document.getElementById("opacity_Inpt"), "change", function() {
		chosenOpacity = document.getElementById("opacity_Inpt").value;
			console.log(chosenOpacity);

		if (fillState.classList.contains("activated")) {
			fillRender(polygon, polyline, map, path);
			polyRender(polyline, map);
		}
	});
}


var polyNum = 1,
	polyName = "poly" + polyNum.toString();

var curvatureState = false,
	editState = false;

var lineSymbol = {
	path: "M 0,-1 0,1",
    strokeOpacity: 1,
    // strokeWeight: 4,
    strokeWeight: 4,
    scale: 5
};

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	currentIndex = 0;
	// currentLetter = alphabet[currentIndex];

var fill_Btn = document.getElementById("fill_Btn"),
	fillState = document.getElementById("fill_Btn");

var geodesy_Btn = document.getElementById("curvePath");


/* *************************************** */

