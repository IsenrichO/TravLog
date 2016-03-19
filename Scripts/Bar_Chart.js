window.onload = function() {
	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d");

};


	/* var filts = document.getElementById("filter_Cont");
	console.log(filts);

	console.log(lastFilt);

	var firstFilt = filts.firstElementChild,
		secondFilt = firstFilt.nextElementSibling,
		lastFilt = filts.lastElementChild;

	console.log(firstFilt);
	console.log(secondFilt);

	var dc = document.getElementById("results_Cont").children;
	console.log(dc);
	console.log(dc[2]); */


function gen() {
	// Array 'diffs' calculates the total number of days spent in each destination:
	diffs = map(daysAbroad_Arr, function(set) {
		var first = Number(set[0].substring(0, 4) + set[0].substring(5, 7) + set[0].substring(8, 10)),
			last = Number(set[set.length - 1].substring(0, 4) + set[set.length - 1].substring(5, 7) + set[set.length - 1].substring(8, 10));

		if (last - first === 0 || last - first === undefined) {
			return 1;
		} else {
			return last - first;
		}
	});
	console.log(diffs);
	
}



/* function filterResult(filt_Clicked) {
	forEach(filts_Arr, function(filt) {
		filt.removeAttribute("id");
	});

}  */

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

	// Get analytics returned from called 'gen' function:
	gen();

	// Assigned #textual_Analysis div to variable 'textCont':
		// var textCont = document.getElementById("textual_Analysis");
	var cC = document.getElementById("results_Cont");
	var textCont = cC.lastElementChild;

	// Var 'totalStay' returns the total number of days spent abroad:
	var totalStay = reduce(diffs, function(trip1, trip2) {
		return trip1 + trip2;
	}, 0);
	console.log(totalStay);

	// Var 'minStay' returns the number of days spent on the user's shortest trip(s):
	var minStay = min(diffs);
	console.log(minStay);

	// Var 'maxStay' returns the number of days spent on the user's longest trip:
	var maxStay = max(diffs);
	console.log(maxStay);
	
	function newResult(node_Str) {
		var resultPar = document.createElement("P");
		var resultPar_Node = document.createTextNode(node_Str);
		
		resultPar.appendChild(resultPar_Node);
		resultPar.setAttribute("style", "font: 700 18px/16px Droid Sans, Helvetica, sans-serif; color: DimGray;");
		
		textCont.appendChild(resultPar);
	}

	var placesResult = "Your log of trips indicates you've been to " + listArr.join(", ") + " . Rad!",
		minResult = "The length of your shortest trip abroad was " + minStay + " day(s).",
		maxResult = "The length of your longest trip abroad was " + maxStay + " days.",
		totalResult = "In total, it looks like you've been abroad for " + totalStay + " days.";

	newResult(placesResult);
	newResult(minResult);
	newResult(maxResult);
	newResult(totalResult);
}


// Bar chart generation function, 'drawBars':
function drawBars() {
	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d");

	ctx.font = "32px PT Sans";

	gen();

	var canv = document.getElementById("chart"),
		baseline = 50,
		iterator = 0,
		hexCodes = ["#3CB371", "#F4F1A8", "#0EB7B7", "#FC7474", "#28A9FF", "#7EFCEF"];
		//		     MSeaGrn ,  Tan     ,  Teal    ,  Rust    ,  DgrBlue ,  NeonGreen
	

	// Iteration through the chosen trips' respective lengths of stay:
	forEach(diffs, function(t) {
		baseline += 100;
		
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
		h6.setAttribute("style", "font: bold 12px/12px Play, Helvetica, sans-serif; width: 80px; height: auto; position: absolute; display: inline; transform: rotate(45deg); z-index: 13; text-shadow: 0.1px 0.1px 1px Dimgray;");
		h6.style.color = hexCodes[iterator];
		h6.style.top = "490px";
		h6.style.left = baseline + 200 + "px";

		// Creation of the DOM node 'axisY' to be superpositioned atop the <canvas> element and serve as the y-axis unit value:
		var axisY = document.createElement("P"),
			axisY_Node = document.createTextNode("Days");

		axisY.appendChild(axisY_Node);
		console.log(axisY);
		axisY.setAttribute("style", "font: 700 24px/24px Droid Sans, Helvetica, sans-serif; position: absolute; display: inline; width: 50px; height: auto; color: DarkSlateGray; left: 250px; top: 240px; transform: rotate(-90deg); z-index: 13;");

		// Dynamically generated, styled number values corresponding to the lengths of stay at each destination:
		var daysAbroad = diffs[iterator];
		console.log(diffs[iterator]);
		console.log(daysAbroad);

		ctx.fillText(daysAbroad, baseline + 11, 480 - (t * 10) - 10);

		ctx.lineWidth = 1; 
		ctx.strokeStyle = "#2F4F4F";
		ctx.strokeText(daysAbroad, baseline + 11, 480 - (t * 10) - 10);

		// Appending of the DOM nodes to the #chart element:
		canv.insertBefore(h6, canv.childNodes[1]);
		canv.insertBefore(axisY, canv.childNodes[2]);
		iterator++;
	}); 

	// Generation of the bar charts' axes:
	ctx.moveTo(100, 50);
	ctx.lineTo(100, 480);
	ctx.lineTo(900, 480);
	ctx.lineWidth = 3;
	ctx.stroke(); 

}

