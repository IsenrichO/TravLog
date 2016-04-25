window.onload = function() {
	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d");

};


var maxStay,
	minStay;


function gen() {

	// Array 'diffs' calculates the total number of days spent in each destination:
	/* diffs = map(daysAbroad_Arr, function(set) {
		var first = Number(set[0].substring(0, 4) + set[0].substring(5, 7) + set[0].substring(8, 10)),
			last = Number(set[set.length - 1].substring(0, 4) + set[set.length - 1].substring(5, 7) + set[set.length - 1].substring(8, 10));

		if (last - first === 0 || last - first === undefined) {
			return 1;
		} else if (last - first > 30) {
			return last - first;
			// Math.round(Math.floor(last - first))
		}
	});	*/

	diffs = map(daysAbroad_Arr, function(setOfDates) {
		var numDays;

		var yearFirst = setOfDates[0].substring(0, 4),		yearLast = setOfDates[setOfDates.length - 1].substring(0, 4),
			monthFirst = setOfDates[0].substring(5, 7),		monthLast = setOfDates[setOfDates.length - 1].substring(5, 7),
			dayFirst = setOfDates[0].substring(8, 10),		dayLast = setOfDates[setOfDates.length - 1].substring(8, 10);

		var fullDateFirst = yearFirst + monthFirst + dayFirst,
			fullDateLast = yearLast + monthLast + dayLast;

		if (fullDateLast - fullDateFirst === 0 || fullDateLast - fullDateFirst === undefined) {
			return 1;
		} else if (yearLast - yearFirst !== 0 && yearLast - yearFirst > 1) { 
			return numDays = Math.abs(((yearLast - yearFirst) - 1) * 365) + (((12 - monthFirst) * 30) - dayFirst) + ((monthLast * 30) - dayLast) + 1;
		} else if (yearLast - yearFirst === 1) {
			return numDays = (((12 - monthFirst) * 30) - dayFirst) + ((monthLast * 30) - dayLast) + 1;
		} else if (monthLast - monthFirst !== 0) {
			return numDays = (Math.abs(monthLast - monthFirst) * 30) + (Math.abs(dayLast - dayFirst)) + 1;
		} else {
			return numDays = Math.abs((dayLast - dayFirst) + 1);
		}

	});
		console.log(diffs);


	normalizeOrNot = filter(diffs, function(dif) {
		return parseInt(dif) * 10 > 400;
	});
		console.log(normalizeOrNot);


	return diffs;
}


var filts_Arr = document.getElementsByClassName("filter_Btn"),
	filts_Cont = document.getElementById("filter_Cont");

var results_Arr = document.getElementsByClassName("result"),
	res_Cont = document.getElementById("results_Cont");

var firstFilt = filts_Cont.firstElementChild,
	secondFilt = firstFilt.nextElementSibling,
	thirdFilt = filts_Cont.lastElementChild;

var firstResult = res_Cont.firstElementChild,
	secondResult = firstResult.nextElementSibling,
	thirdResult = res_Cont.lastElementChild;

	firstFilt.addEventListener("click", function() {
		forEach(results_Arr, function(res) {
			res.removeAttribute("id");
		});
		firstResult.id = "selectedResult";

		forEach(filts_Arr, function(filt) {
			filt.removeAttribute("id");
		});
		firstFilt.id = "selectedFilter";
	});
	
	secondFilt.addEventListener("click", function() {
		forEach(results_Arr, function(res) {
			res.removeAttribute("id");
		});
		secondResult.id = "selectedResult";

		forEach(filts_Arr, function(filt) {
			filt.removeAttribute("id");
		});
		secondFilt.id = "selectedFilter";
	});

	thirdFilt.addEventListener("click", function() {
		forEach(results_Arr, function(res) {
			res.removeAttribute("id");
		});
		thirdResult.id = "selectedResult";


		forEach(filts_Arr, function(filt) {
			filt.removeAttribute("id");
		});
		thirdFilt.id = "selectedFilter";
	});	


// Text analytics production function, 'textAnalysis':
function textAnalysis() {

	// Retrieve generated analytics produced on calling the 'gen' function:
	gen();

	// Assigned #textual_Analysis div to variable 'textCont':
		// var textCont = document.getElementById("textual_Analysis");
	var cC = document.getElementById("results_Cont"),
		textCont = cC.lastElementChild.lastElementChild;
	// textCont.appendChild(document.createElement("BR"));

	// Var 'totalStay' returns the total number of days spent abroad:
	var totalStay = reduce(diffs, function(trip1, trip2) {
		return trip1 + trip2;
	}, 0);
		console.log(totalStay);

	// Var 'minStay' returns the number of days spent on the user's shortest trip(s):
	minStay = min(diffs);
		console.log(minStay);

	// Var 'maxStay' returns the number of days spent on the user's longest trip:
	maxStay = max(diffs);
		console.log(maxStay);

	//
	var continentsCheck = {
		Antarctica: false,
		Asia: false,
		Australia: false,
		Europe: false,
		"North America": false,
		Oceania: false,
		"South America": false
	},
	regionsCheck = {
		"Arctic Circle": false,
		"Latin America": false,
		"Middle East": false,
		"Southeast Asia": false
	};


	
	

		/* if (node_Str === continentsVisited && check_Arr.) {

		} */

	function subResult_UL(parent, vals) {
		var sub_UL = document.createElement("UL"),
			sub_LI = document.createElement("LI"),
			sub_LI_Node = document.createTextNode(vals);

		sub_LI.appendChild(sub_LI_Node);
		sub_UL.appendChild(sub_LI);

		sub_LI.setAttribute("style", "list-style-position: outside; margin: 10px auto; font: 14px/16px Droid Sans, Helvetica, sans-serif; color: #626262; text-align: left;");			
			// border-bottom: 2px dashed rgba(192, 192, 192, 0.75);
		sub_UL.setAttribute("style", "display: block; position: relative; top: 100%; width: 80%; margin: auto auto auto 10%; ");

		parent.appendChild(sub_UL);

		/* var tripLength_Arr = map(daysAbroad_Arr, function(days) {
			return "You were in " + 
		}); */
		//		resultBlock.appendChild(sub_UL);
	} 	


	// Function 'newResult' produces a new (styled) text element and appends it to the textual analytics .result <div>:
	function newResult(node_Str, vals) {

		var resultBlock = document.createElement("DIV"),
			headerDiv = document.createElement("DIV");

		resultBlock.className = "textResult";
		resultBlock.setAttribute("style", "position: relative; display: block; width: 100%; min-height: 40px; vertical-align: middle;");
		headerDiv.setAttribute("style", "position: relative; display: block; width: 100%; min-height: 40px; margin-top: 15px;");

		var resultPar = document.createElement("P"),
			resultPar_Node = document.createTextNode(node_Str);
		
		resultPar.appendChild(resultPar_Node);
		resultPar.setAttribute("style", "position: relative; display: inline-block; width: 92%; height: 100%; float: right; font: 700 18px/22px Droid Sans, Helvetica, sans-serif; color: #626262; vertical-align: middle; text-align: left; padding: 0 0 0 10px; margin: 5px auto;");
		
		var resultFig = document.createElement("FIGURE"),
			resultGlyph = document.createElement("IMG"),
			src_Img = "../Graphics/";

		resultFig.setAttribute("style", "display: inline-block; width: 3%; float: left; height: 100%; text-align: center; vertical-align: middle; margin: 0 0 0 2%;");

		switch(node_Str) {
			case continentsVisited:
				src_Img += "Continents Glyph.png";
				break;
			/* case newLocation:
				src_Img += "Custom Marker.png";
				break; */
			case placesResult:
				src_Img += "Roadmap Glyph.png";
				break;
			case totalResult:
				src_Img += "Clock Glyph.png";
				break;
			case maxResult:
				src_Img += "Year Calendar Glyph.png";
				break;
			case minResult:
				src_Img += "Month Calendar Glyph.png";
				break;
			default:
				src_Img += "Pin_Marker.png";
				break;
		}

		resultFig.appendChild(resultGlyph);

		resultGlyph.setAttribute("style", "position: relative; display: block; text-align: center; height: 40px; vertical-align: middle;");
		resultGlyph.setAttribute("src", src_Img);

		headerDiv.appendChild(resultPar);
		headerDiv.insertBefore(resultFig, headerDiv.childNodes[0]);

		resultBlock.appendChild(headerDiv);

		if (vals !== undefined) {
			subResult_UL(resultBlock, vals);
		}
		

		textCont.appendChild(resultBlock);
	}

	var placesResult = "Your log of trips indicates you've been to ",
		minResult = "The length of your shortest trip abroad was " + minStay + " day(s).",
		maxResult = "The length of your longest trip abroad was " + maxStay + " days.",
		min_maxResult = "",
		totalResult = "In total, it looks like you've been abroad for " + totalStay,
		continentsVisited = "So far, you've visited ",
		regionsVisited = "You've also been in the following general regions of the globe: ";


	if(listArr.length > 2) {
		placesResult +=  listArr.slice(0, listArr.length - 1).join(", ") + " and " + listArr[listArr.length - 1] + ". ";
			//	This is a valid way to reference an index of an array after applying a method: 	listArr.sort()[listArr.length - 1]

		listArr.length >= 15 ? (placesResult += "That's " + listArr.length + " countries off your bucket list. Not bad.") : (placesResult += "That's " + listArr.length + " countries down. Many more to go.");
	} else if (listArr.length === 2) {
		placesResult += listArr[0] + " and " + listArr[1] + ". Rad!";
	} else if (listArr.length === 1) {
		placesResult += listArr[0] + ". Keep on travelin' rookie!";
	} else {
		placesResult = "Your trip log looks a little empty right now. Try adding some trip records or plan some itineraries first.";
	}
	newResult(placesResult);


	(minStay === maxStay && minStay === 1) ? (min_maxResult += "The length of your shortest trip and the length of your longest trip are both " + minStay + " day.", newResult(min_maxResult)) 
										   : minStay === maxStay ? (min_maxResult += "Looks like the length of your shortest trip and the length of your longest trip are both " + minStay + " days.", newResult(min_maxResult))
											   					 : (newResult(minResult), newResult(maxResult));

	totalStay >= 100 ? (totalResult += " days. Do you even have a home, bro?")
					 : totalStay === 0 || totalStay === 1 ? (totalResult += " day. You can do better.")
					 				   : (totalResult += " days. It's nice to get away, amirite?");
	newResult(totalResult);

	forEach(listArr, function(country) {
		/* forEach(countriesByContinent, function(continent) {
			if (continent.indexOf(country) !== -1) {
				continentsCheck[continent] = true;
				continentsVisited +=  + ", ";
			}
		}); */

		for (var keyN in countriesByContinent) {
			if (countriesByContinent[keyN].indexOf(country) !== -1) {
				
				if (keyN !== "Regions") {
					continentsCheck[keyN] = true;
					// continentsVisited += keyN + ", ";
				} else {
					regionsCheck[country] = true;
				}
			}

			// if (countriesByContinent[keyN].indexOf(countryregionsCheck)
		}

	});

		console.log(continentsCheck);
		console.log(continentsVisited);

		console.log(regionsCheck);
		console.log(regionsVisited);


	var vist = filter(continentsCheck, function(cont) { 
		return cont === true;
	});
		console.log(vist);


	var regionsVisited_Arr = filter(regionsCheck, function(region) {
		return region === true;
	});
		console.log(regionsVisited_Arr);


	var countTrue = 0;
	forEach(continentsCheck, function(continent) {
		if (continentsCheck[continent]) {
			countTrue++;
		}
	});
		console.log(countTrue);


	var trusContinents = [];
	forKey(continentsCheck, function(continent) {
		if (continentsCheck[continent]) {
			trusContinents.push(continent);
			trusContinents.sort();
		}
	});
		console.log(trusContinents);
		console.log(continentsCheck);


	var trusRegions = [];
	forKey(regionsCheck, function(region) {
		if (regionsCheck[region]) {
			trusRegions.push(region);
			trusRegions.sort();
		}
	})
		console.log(trusRegions);
		console.log(regionsCheck);
	





	trusContinents.length >= 6 ? (continentsVisited += trusContinents.splice(0, trusContinents.length - 1).join(", ") + " and " + trusContinents[trusContinents.length - 1] + ". You've been to every continent!") 
					 		   : trusContinents.length > 2 ? (continentsVisited += trusContinents.splice(0, trusContinents.length - 1).join(", ") + " and " + trusContinents[trusContinents.length - 1] + ".")
									  					   : trusContinents.length === 2 ? (continentsVisited += trusContinents[0] + " and " + trusContinents[1] + ".") 
														   								 : trusContinents.length === 1 ? (continentsVisited += trusContinents[0] + ".")
														   					   										   : continentsVisited = "It doesn't look like you've been overseas very often."
	

	trusRegions.length > 2 ? (regionsVisited += trusRegions.splice(0, trusRegions.length - 1).join(", ") + " and " + trusRegions[trusRegions.length - 1] + ".") 
						   : (trusRegions.length === 2) ? (regionsVisited += trusRegions[0] + " and " + trusRegions[1] + ".") 
						   								: (trusRegions.length !== 0) ? (regionsVisited += trusRegions[0] + ".") 
						   															 : regionsVisited = undefined;
	/* if (regionsVisited !== undefined) {
		var regionsUL = subResult_UL(regionsVisited);
	} */

	// conts_Div.appendChild(regionsUL);

	// var conts_Div = newResult(continentsVisited, regionsVisited);
	console.log(regionsVisited);
	newResult(continentsVisited, regionsVisited);

	if (document.getElementsByClassName("textResult").length % 2 !== 0) {
		textCont.setAttribute("style", "background-color: rgba(192, 192, 192, 0.25);");
	} else {
		textCont.setAttribute("style", "background-color: rgba(255, 255, 255, 1.0);");
	}

}


/*
function renderBckgColor() {

}*/






// Bar chart generation function, 'drawBars':
function drawBars() {

	// Declaration of outer scope variables:
	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d"),
		canv = document.getElementById("chart"),
		baseline = 50,
		iterator = 0,
		hexCodes = ["#3CB371", "#F4F1A8", "#0EB7B7", "#FC7474", "#28A9FF", "#7EFCEF"];
		//		     MSeaGrn ,  Tan     ,  Teal    ,  Rust    ,  DgrBlue ,  NeonGreen
	
	gen();	
	

	ctx.font = "bold 28px Open Sans";

	// Generation of the bar charts' axes:
	ctx.lineWidth = 3;		
	ctx.moveTo(100, 50);	// Initial positioning at head (top) of the y-axis.
	ctx.lineTo(90, 65);		// Vertical axis arrowhead, left.
	ctx.moveTo(100, 50);	// Reposition at head (top) of vertical axis.
	ctx.lineTo(110, 65);	// Vertical axis arrowhead, right.
	ctx.moveTo(100, 50);	// Reposition at head (top) of vertical axis.
	ctx.lineTo(100, 480);	// Vertical axis bar.
	ctx.lineTo(900, 480);	// Horizontal axis bar, resume from origin.
	ctx.lineTo(885, 470);	// Horizontal axis arrowhead, top.
	ctx.moveTo(900, 480);	// Reposition at end (right) of horizontal axis.
	ctx.lineTo(885, 490);	// Horizontal axis arrowhead, bottom.
	ctx.stroke(); 			// Render line segments.

	// Creation of the DOM node 'axisY' to be superpositioned atop the <canvas> element and serve as the y-axis unit value:
	var axisY = document.createElement("P"),
		axisY_Node = document.createTextNode("Days Abroad");

	axisY.appendChild(axisY_Node);
	axisY.setAttribute("style", "position: absolute; display: inline; width: 200px; height: auto; left: 150px; top: 265px; font: 700 24px/18px Droid Sans, Helvetica, sans-serif; text-align: center; color: DarkSlateGray; margin: 0 auto; transform: rotate(-90deg); z-index: 13;");
		console.log(axisY);
	axisY.innerHTML += "<br style='font-size: 16px;' /> <span style='font: lighter 14px/14px Droid Sans, Helvetica, sans-serif; text-align: center;'>(per Destination)</span>";
	canv.insertBefore(axisY, canv.childNodes[2]);

	var axisX = document.createElement("P"),
		axisX_Node = document.createTextNode("Travel Destination");

	axisX.appendChild(axisX_Node);
	axisX.setAttribute("style", "position: absolute; display: inline; width: auto; height: auto; left: 590px; top: 590px; font: 700 24px/24px Droid Sans, Helvetica, sans-serif; text-align: center; color: DarkSlateGray; margin: 0 auto; z-index: 13;");
	canv.insertBefore(axisX, canv.childNodes[2]);

	
	var ratio = parseFloat((max(diffs) * 10) / 400);
		console.log(ratio);
		// console.log(maxStay);


	if (normalizeOrNot.length > 0) {

		// Iteration through the chosen trips' respective lengths of stay:
		forEach(diffs, function(t) {
			baseline += 100;
			
			// Dynamically generated, styled number values corresponding to the lengths of stay at each destination:
			var daysAbroad = diffs[iterator];
				console.log(diffs[iterator]);
				console.log(daysAbroad);

			// Dynamically generated, styled bars indicative of the relative lengths of stay in the chosen destinations:
			ctx.lineWidth = 2; 
			ctx.fillStyle = hexCodes[iterator];	

			ctx.fillRect(baseline, 480, 50, -((t * 10) / ratio));
			ctx.strokeRect(baseline, 480, 50, -((t * 10) / ratio));

			ctx.moveTo(baseline, 480);
	 		ctx.lineTo(baseline, 505);
	 		ctx.lineTo(baseline + 60, 565);
	 		
	 		ctx.stroke();
			
			// Dynamically generated, styled bar identifiers corresponding to the name of the destination:
			var h6 = document.createElement("H6"),
				h6_Node = document.createTextNode(listArr[iterator]);

			h6.appendChild(h6_Node);
			h6.setAttribute("style", "position: absolute; display: inline; width: 100px; height: auto; top: 500px; font: bold 12px/12px Open Sans, Helvetica, sans-serif; transform: rotate(45deg); z-index: 13; text-shadow: 0 0 0.5px rgba(0, 0, 0, 0.50);");
			h6.style.color = hexCodes[iterator];
			h6.style.left = baseline + 200 + "px";

			ctx.lineWidth = 0.5; 
			ctx.strokeStyle = "#626262";

			ctx.fillText(t, baseline + 5, 470 - ((t * 10) / ratio));
			ctx.strokeText(t, baseline + 5, 470 - ((t * 10) / ratio));			

			// Appending of the DOM nodes to the #chart element:
			canv.insertBefore(h6, canv.childNodes[1]);
			iterator++;
		});

	} else {

		// Iteration through the chosen trips' respective lengths of stay:
		forEach(diffs, function(t) {
			baseline += 100;
			
			// Dynamically generated, styled number values corresponding to the lengths of stay at each destination:
			var daysAbroad = diffs[iterator];
				console.log(diffs[iterator]);
				console.log(daysAbroad);


			// Dynamically generated, styled bars indicative of the relative lengths of stay in the chosen destinations:
			ctx.lineWidth = 2; 
			ctx.fillStyle = hexCodes[iterator];	

			ctx.fillRect(baseline, 480, 50, -t * 10);
			ctx.strokeRect(baseline, 480, 50, -t * 10);

			ctx.moveTo(baseline, 480);
	 		ctx.lineTo(baseline, 505);
	 		ctx.lineTo(baseline + 60, 565);
	 		
	 		ctx.stroke();
			
			// Dynamically generated, styled bar identifiers corresponding to the name of the destination:
			var h6 = document.createElement("H6"),
				h6_Node = document.createTextNode(listArr[iterator]);

			h6.appendChild(h6_Node);
			h6.setAttribute("style", "position: absolute; display: inline; width: 100px; height: auto; top: 500px; font: bold 12px/12px Open Sans, Helvetica, sans-serif; transform: rotate(45deg); z-index: 13; text-shadow: 0 0 0.5px rgba(0, 0, 0, 0.50);");
			h6.style.color = hexCodes[iterator];
			h6.style.left = baseline + 200 + "px";

			ctx.lineWidth = 1; 
			ctx.strokeStyle = "#2F4F4F";

			ctx.fillText(t, baseline + 5, 470 - (t * 10));
			ctx.strokeText(t, baseline + 5, 470 - (t * 10));			

			// Appending of the DOM nodes to the #chart element:
			canv.insertBefore(h6, canv.childNodes[1]);
			iterator++;
		}); 
	}

}
