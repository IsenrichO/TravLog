
// Underscore.js 'forEach' (a.k.a. 'each' function) implementation:
function forEach(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for (var key in collection) {
			return callback(key);
		}
	} 
}


// Underscore.js 'map' implementation:
function map(collection, callback) {
	var newArr = [];
	forEach(collection, function(x) {
		newArr.push(callback(x));
	});
	return newArr;
}


// Underscore.js 'filter' implementation:
function filter(collection, predicate) {
	var outputArr = [];
	forEach(collection, function(val) {
		if (predicate(val)) {
			outputArr.push(val);
		}
	});
	return outputArr;
}


// Underscore.js 'reject' implementation (conceptually, the opposite of the 'filter' function):
function reject(collection, predicate) {
	var outputArr = [];
	forEach(collection, function(val) {
		if(!(predicate(val))) {
			outputArr.push(val);
		}
	});
}


// Underscore.js 'reduce' implementation:
/* function reduce(collection, callback, initial) {
	if (initial === undefined) {
		initial = collection[0];
	} 
	var iterant = initial;
	forEach(collection, function(val) {
		iterant = callback(iterant, val);
	});
	return iterant;
} */


function reduce(collection, accumulator, memo) {
	var running = memo;
	forEach(collection, function(el) {
		running = accumulator(running, el);
	});		
	return running;
}


// Underscore.js 'reduceRight' implementation:
function reduceRight(collection, accumulator, initial) {
	var iterant = initial;
	for (var i = collection.length - 1; i >= 0; i--) {
		iterant = accumulator(iterant, collection[i]);
	}
	return iterant;
}


// Underscore.js 'min' implementation:
function min(collection) {
	var iterator = collection[0];
	forEach(collection, function(val) {
		if (val < iterator) {
			iterator = val;
		}
	});
	return iterator;
}


// Underscore.js 'max' implementation:
function max(collection) {
	var iterator = collection[0];
	forEach(collection, function(val) {
		if (val > iterator) {
			iterator = val;
		}
	});
	return iterator;
}


// Underscore.js 'sort' implementation:
function sort(collection) {

}


// Activates/deactivates display of specified element:
function toggleDisplay(elemID) {
   	(function(style) {
       	style.display = style.display !== "block" ? "block" : "none";
    })(document.getElementById(elemID).style);
}


// Activates/deactivates rotation animation on specified element:
function toggleAnimation(elemID) {
   	(function(style) {
   		style.transform = style.transform !== "rotate(90deg)" ? "rotate(90deg)" : "rotate(0deg)";
   	})(document.getElementById(elemID).style);
}


// Activates/deactives trip card glyph spin animation:
function spin(elemID) {
	(function(style) {
		style.transform = style.transform !== "rotate(180deg)" ? "rotate(180deg)" : "rotate(0deg)";
	})(document.getElementById(elemID).style);
}


// Adjust 'listArr' countries array following removal of a trip:
function fixList() {
	return listArr.pop();
}


// Adjust calendar/date event numbering within modal following removal of a date_Field node:
function fixTripNum() {
	tripNum--;
}


// New calendar/date event addition function, 'addNew':
function addNew(divID) {
			// var datesCont = document.getElementById(divID);

			tripNum++;
			var inputID = "dateInput" + tripNum;

			var containerField_El = document.createElement("FIELDSET");
			containerField_El.className = "date_Field";

			var newDate = document.createElement("DIV");
			newDate.className = "newEntry";

			var newRow = document.createElement("DIV");
			newRow.className = "newRow";

			var newMsg = document.createElement("TEXTAREA");
			newMsg.className = "date_Msg";
			newMsg.setAttribute("placeholder", "Remember a memorable event.");

			var newLab = document.createElement("LABEL");
			var newInput = document.createElement("INPUT");

			newLab.innerHTML = "<h3 style='display: inline; font: bold 18px/16px Helvetica, Arial, sans-serif;'>Trip Memory N<sup><u><span style='font: 11px;'>o</span></u></sup> " + tripNum + " : </h3>";

			newInput.setAttribute("type", "date");
			newInput.id = inputID;
			newInput.className = "trip_Dates";

			newLab.className = "date_Label";
			newLab.setAttribute("for", inputID);

			newRow.appendChild(newLab);
			newRow.insertBefore(newInput, newDate.childNodes[0]);

			newDate.appendChild(newMsg);
			newDate.insertBefore(newRow, newDate.childNodes[0]);

			containerField_El.appendChild(newDate, containerField_El.childNodes[0]);
			document.getElementById(divID).appendChild(containerField_El);
}


function removeLast(divID) {
	var parental = document.getElementById(divID);
	var numEls = parental.childElementCount;

	parental.removeChild(parental.lastElementChild);
}


function createCountryDiv(name) {
	var countriesCont = document.getElementById("summary_CountriesList");

	var holder = document.createElement("DIV");
	holder.setAttribute("style", "position: relative; display: block; width: 100%; height: 40px; margin: 0 auto; background: silver; border-bottom: 1px solid gray;");

	var namedCountry = document.createElement("H2");
	var namedCountry_Node = document.createTextNode(name);
	namedCountry.setAttribute("style", "position: relative; display: block; font: 700 24px/22px 'Droid Sans', Helvetica, Arial, sans-serif; text-align: center; width: 95%; height: auto; margin: auto; font-variant: small-caps; background-size: 50px auto; background-repeat: repeat; z-index: 12000; top: 50%; transform: translateY(-50%);");

	namedCountry.appendChild(namedCountry_Node);

	
	holder.appendChild(namedCountry);
	countriesCont.appendChild(holder);
}


function allCountries(name) {
	var rightPanel = document.getElementById("allPlaces");

	var listI = document.createElement("H6");
	var listI_Node = document.createTextNode(name);
	listI.appendChild(listI_Node);
	listI.setAttribute("style", "width: 100%; margin: auto; position: relative; display: block; padding: 2px 0; font: 700 16px/16px 'PT Sans', Helvetica; border-bottom: 1px solid gray;"); 

	listArr.indexOf(name) !== -1 ? listI.className = "haveBeen" : listI.className = "haventBeen";

	rightPanel.appendChild(listI);
}


function generateSummary() {

	forEach(listArr, function(country) {
		
		return createCountryDiv(country);
	});
	console.log(listArr);
				

	/* forEach(countryObject, function(country) {
		return allCountries(country);
	}); */

	for (var keyC in countryObject) {
	  if (countryObject.hasOwnProperty(keyC)) {
	    allCountries(keyC);
	  }
	}
	
		
}


/* function spin() {
	var chevs = document.getElementsByClassName("doubleChevron");

	forEach(chevs, function(chev) {
		chevs[chev].addEventListener("click", function() {
			chev.style = "transform: rotate(90deg);"; 
		});
	});

} */
