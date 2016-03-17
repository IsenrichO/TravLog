window.onload = function() {
	var canvas = document.getElementById("myCanvas"),
		ctx = canvas.getContext("2d");

};


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


// Text analytics production function, 'textAnalysis':
function textAnalysis() {

	// Get analytics returned from called 'gen' function:
	gen();

	// Assigned #textual_Analysis div to variable 'textCont':
	var textCont = document.getElementById("textual_Analysis");


	/* Function 'reduce' implementation:
	var red = reduce(listArr, function(a, b) {
		return a + ", " + b;
	}, "");
	console.log(red); */

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

	gen();

	var baseline = 50,
		iterator = 0,
		hexCodes = ["#3CB371", "#F4F1A8", "#0EB7B7", "#FC7474", "#28A9FF", "#7EFCEF"];
		//		     MSeaGrn ,  Tan     ,  Teal    ,  Rust    ,  DgrBlue ,  NeonGreen
	
	ctx.lineWidth = 3; 

	// Generate bars:
	forEach(diffs, function(t) {
		baseline += 100;
		
		ctx.fillStyle = hexCodes[iterator];
		ctx.fillRect(baseline, 480, 50, -t * 10);

		ctx.strokeRect(baseline, 480, 50, -t * 10);
		ctx.moveTo(baseline, 480);
 		ctx.lineTo(baseline, 505);
 		ctx.lineTo(baseline + 60, 565);
 		
 		ctx.stroke();
		
		var canv = document.getElementById("chart");
		var h6 = document.createElement("H6");
		var h6_Node = document.createTextNode(listArr[iterator]);
		h6.appendChild(h6_Node);
		h6.setAttribute("style", "font: bold 12px/12px Play, Helvetica, sans-serif; width: 50px; height: auto; position: absolute; display: inline; transform: rotate(45deg); z-index: 13; text-shadow: 0.1px 0.1px 1px Dimgray;");
		h6.style.color = hexCodes[iterator];
		h6.style.top = "485px";
		h6.style.left = baseline + 200 + 5 + "px";

		canv.insertBefore(h6, canv.childNodes[1]);
		iterator++;

	}); 

	// Generate the bar chart axes:
	ctx.moveTo(100, 50);
	ctx.lineTo(100, 480);
	ctx.lineTo(900, 480);
	ctx.lineWidth = 3;
	ctx.stroke(); 

}

