
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
			outputArr.push(collection[val]);
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


/*
// Custom higher-order function, 'DOM_ElCreator':
function DOM_ElCreator(ElType, parentNode, action) {
	var new = document.createElement(ElType);
	if (action !== undefined) {
		action(ElType);	// * Optional *
	}
	var parentNode.appendChild(new);
} */


function listen(elemID, action) {
	var el = document.getElementById(elemID);
	el.addEventListener("click", action);
}


/*
// Custom higher-order function, 'custom':
function custom(builtIn, ) */


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

function setDefault() {
	var dts = document.getElementsByClassName("trip_Dates");
	forEach(dts, function(dt) {
		dt.defaultValue = "2016-03-19";
	});
}

// New calendar/date event addition function, 'addNew':
function addNew(divID) {
			
			tripNum++;

			var inputID = "dateInput" + tripNum;

			var containerField_El = document.createElement("FIELDSET");
			containerField_El.className = "date_Field";

			var newDate = document.createElement("DIV");
			newDate.className = "newEntry";

			var newRow = document.createElement("DIV");
			newRow.className = "newRow";

			var newMsg = document.createElement("TEXTAREA");
			newMsg.setAttribute("placeholder", "Remember a memorable event.");
			newMsg.className = "date_Msg";

			var newLbl = document.createElement("LABEL"),
				newInput = document.createElement("INPUT");

			newLbl.appendChild(document.createTextNode("Trip Memory № " + tripNum + ":" + " "));
			newLbl.innerHTML += "&nbsp;";
			newLbl.setAttribute("for", inputID);
			newLbl.className = "date_Label";

			console.log(newLbl.innerHTML);

			newInput.setAttribute("type", "date");
			// newInput.defaultValue = "2000-05-05";
			newInput.id = inputID;
			newInput.className = "trip_Dates";

			newRow.appendChild(newLbl);
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
	listI.setAttribute("style", "width: 100%; height: 22px; margin: auto; position: relative; display: block; padding: 2px 0; font: 700 20px/22px Droid Sans, Helvetica, sans-serif; border-bottom: 1px solid gray; border-top: 1px solid Gray;"); 

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
