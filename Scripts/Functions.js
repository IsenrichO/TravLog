
// Underscore.js 'forEach' (a.k.a. 'each' function) implementation:
function forEach(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for (var key in collection) {
			return callback(collection[key]);
		}
	} 
}


function forKey(collection, callback) {
	for (var key in collection) {
		callback(key);
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

/* function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
} */

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


// 
function allTrue(collection) {
	var bool = true;
	forEach(collection, function(item) {
		!item ? false : true;
	})
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


function activeCheck() {
	var path_Btn = document.getElementById("path_Btn");
		// continueOrNot = true;

	if (path_Btn.classList.contains("activated")) {
		alert("Slow your roll bro beans. First, deactivate the the path draw tool.");
		continueOrNot = false;
	} else {
		continueOrNot = true;
	}
}


/*
// Custom higher-order function, 'custom':
function custom(builtIn, ) */


// Activates/deactivates display of specified element:
function toggleDisplay(elemID) {
   	if (elemID === "modalWindow") {
   		if (continueOrNot === true) {
	   		(function(style) {
    	   		style.display = (style.display !== "block" ? "block" : "none");
    		})(document.getElementById(elemID).style);
   		}
   	} else {
		(function(style) {
    		style.display = (style.display !== "block" ? "block" : "none");
    	})(document.getElementById(elemID).style);
   	}

}


// Activates/deactivates rotation animation on specified element:
function toggleAnimation(elemID) {
   	(function(style) {
   		style.transform = (style.transform !== "rotate(90deg)" ? "rotate(90deg)" : "rotate(0deg)");
   	})(document.getElementById(elemID).style);
}


/*
// Activates/deactivates display of '#modalForm' logType descriptions:
function expand(elemID) {
   	var help_Glyph = document.getElementById(elemID),
			info_Block = help_Glyph.parentElement.nextElementSibling;
	(function(style) {
		style.display = (style.display !== "block" ? "block" : "none");
    })(document.getElementById(elemID).parentElement.nextElementSibling.style);

    help_Glyph.style.display !== "none" ? (document.getElementById("logType").style.height = "320px") : (document.getElementById("logType").style.height = "100px");
   
} */



/* function show() {
	var icons = document.getElementsByClassName("info_Glyph");

} */


// Activates/deactives trip card glyph spin animation:
function spin(elemID) {
	(function(style) {
		style.transform = (style.transform !== "rotate(180deg)" ? "rotate(180deg)" : "rotate(0deg)");
	})(document.getElementById(elemID).style);
}


// 
function sequentialFade() {
	var parent = document.getElementsByClassName("textResult"),
		interval = 2;
			console.log(parent);

	for (var i = 0; i < parent.length; i++) {
		var anim = "animation: 1s " + interval + "s forwards;";
			console.log(anim);

		parent[i].setAttribute("style", anim);
		interval += 2;
	}

	/* forEach(parent, function(child) {
		child.setAttribute("style", )
	}) */

}


// Adjust 'listArr' countries array following removal of a trip:
function fixList() {
	listArr.pop();
	markers_Arr.pop();
	tripCoordinates.pop();
}


// Adjust calendar/date event numbering within modal following removal of a date_Field node:
function fixTripNum() {
	tripNum--;
}


// Function 'clearForm' returns '#modalForm' to its default display state following trip addition:
function clearForm() {
	document.getElementById("modalForm").reset();

	// For all but the first, while block removes <fieldset> elements with class '.date_Field' that are children of the '#datesContainer' <div>: 
	var dates_Cont = document.getElementById("datesContainer"),
		j = 1;

	while (j < dates_Cont.children.length) {
		dates_Cont.removeChild(dates_Cont.children[j]);
	}
}


// Function 'radioCheck' evaluates which of the two '#modalForm' radio inputs have been checked (if at all):
function radioCheck() {
	var logType = document.getElementById("recordType"),
		itineraryType = document.getElementById("itineraryType");

	if (logType.checked === true) {
		return logType.value;
			// console.log(logType.value);
	} else if (itineraryType.checked == true) {
		return itineraryType.value;
			// console.log(itineraryType.value);
	}
}


// Function 'setDefault' generically assigns the value given as today's date to the '.trip_Dates' class date input:
function setDateDefault() {
	var today = new Date(),
		date_Str = "",
		day_Str = Number(today.getDate()),
		month_Str = Number(today.getMonth()) + 1;
			// console.log(today);

	day_Str = (day_Str < 10 ? ("0" + day_Str) : day_Str);
		// console.log(day_Str);
	
	if (month_Str < 10) {
		month_Str = "0" + month_Str;
	}
		// console.log(month_Str);
	
	date_Str += today.getFullYear() + "-" + month_Str + "-" + day_Str;
		// console.log(date_Str);

	return date_Str;
}


// New calendar/date event addition function, 'addNew':
function addNew(divID) {
	tripNum++;

	var inputID = "dateInput" + tripNum,
		containerField_El = document.createElement("FIELDSET");
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
		// console.log(newLbl.innerHTML);
	
	newInput.setAttribute("type", "date");
	newInput.setAttribute("value", setDateDefault());
	newInput.id = inputID;
	newInput.className = "trip_Dates";
	
	newRow.appendChild(newLbl);
	newRow.insertBefore(newInput, newDate.childNodes[0]);
	
	newDate.appendChild(newMsg);
	newDate.insertBefore(newRow, newDate.childNodes[0]);
	
	containerField_El.appendChild(newDate, containerField_El.childNodes[0]);
	document.getElementById(divID).appendChild(containerField_El);		
						
}


// Function 'removeLast(param)' removes the last chronologically added child element node of the parent specified by the 'divID' parameter:
function removeLast(divID) {
	var parental = document.getElementById(divID),
		num_Els = parental.childElementCount;

	parental.children.length > 0 ? parental.removeChild(parental.lastElementChild) : alert("You've already removed all possible items!");
}


// Function 'dateExpand' governs the on-and-off display toggle for the child of the event target:
function dateExpand(evt) {
	var date_Msg = evt.target.children[evt.target.children.length - 1],
		msg_Glyph = evt.target.children[0],
		transform_State = "rotate(0deg)";
			console.log(msg_Glyph);

	date_Msg.style.display = (date_Msg.style.display === "block" ? "none" : "block");
	
	transform_State = (msg_Glyph.style.transform === "rotate(0deg)" ? "rotate(90deg)" : "rotate(0deg)");
	msg_Glyph.style.transform = transform_State;
}


/* 
// Function 'removeLast(param)' removes the last chronologically added child element node of the parent specified by the 'divID' parameter:
function removeLastTrip() {
	var promptInput = confirm("Are you sure you wish to remove your last trip? This cannot be undone.");

	if (promptInput) {
		removeLast("tripsContainer"); 
	}
} */


// Function 'createCountryDiv(name)' generates block elements differentiated by the value of the 'name' parameter:
function createCountryDiv(name) {
	var cC = document.getElementById("results_Cont"),
		countriesCont = cC.firstElementChild.nextElementSibling.lastElementChild;
			// console.log(countriesCont);

	var holder = document.createElement("DIV");
	holder.setAttribute("style", "position: relative; display: block; width: 100%; height: 40px; margin: 0 auto; background: silver; border-bottom: 1px solid gray;");

	var namedCountry = document.createElement("H2"),
		namedCountry_Node = document.createTextNode(name);
	namedCountry.setAttribute("style", "position: relative; display: block; font: 700 24px/22px 'Droid Sans', Helvetica, Arial, sans-serif; text-align: center; width: 95%; height: auto; margin: auto; font-variant: small-caps; background-size: 50px auto; background-repeat: repeat; z-index: 12000; top: 50%; transform: translateY(-50%);");

	namedCountry.appendChild(namedCountry_Node);
	holder.appendChild(namedCountry);
	countriesCont.appendChild(holder);
}


// Function 'allCountries(param)' generates block elements differentiated by the value of the 'name' parameter:
function allCountries(name) {
	var cC = document.getElementById("results_Cont"),
		rightPanel = cC.firstElementChild.lastElementChild;

	var listI_Cont = document.createElement("DIV"),
		listI = document.createElement("H6"),
		listI_Node = document.createTextNode(name);
	
	listI.appendChild(listI_Node);
	listI.setAttribute("style", "width: 100%; height: 22px; margin: auto; position: relative; display: inline; font: 700 20px/22px Droid Sans, Helvetica, sans-serif; vertical-align: middle;"); 

	listI_Cont.appendChild(listI);
	listI_Cont.setAttribute("style", "width: 100%; height: 24px; margin: auto; position: relative; display: block; padding: 4px 0; border-bottom: 1px solid Gray; border-top: 1px solid Gray; vertical-align: middle;");
	listArr.indexOf(name) !== -1 ? listI_Cont.className = "haveBeen" : listI_Cont.className = "haventBeen";

	if (listI_Cont.className === "haveBeen") {
		var tripType_Img = document.createElement("IMG"),
			img_Path,
			keyK = name + "Trip";
				// console.log(keyK);
		
		tripType_Img.setAttribute("style", "display: inline; position: absolute; right: 5%; top: 1%; height: 98%; width: auto; margin: auto 15% auto auto; vertical-align: middle;");

		if (tripsObj[keyK]["type"] === "Travel Log") {
			img_Path = countryObject + ".svg";
			tripType_Img.setAttribute("src", "../Graphics/Trip_Log.png");
			listI_Cont.insertBefore(tripType_Img, listI_Cont.childNodes[1]);
		} else if (tripsObj[keyK]["type"] === "Travel Itinerary") {
			tripType_Img.setAttribute("src", "../Graphics/Itinerary_Plan.png");
			listI_Cont.insertBefore(tripType_Img, listI_Cont.childNodes[1]);
		}
	}
	rightPanel.appendChild(listI_Cont);
}


// Function 'generateSummary' leverages the 'createCountryDiv' & 'allCountries' functions into a single superfluous action:
function generateSummary() {

	forEach(listArr, function(country) {
		return createCountryDiv(country);
	});
	console.log(listArr);


	for (var keyC in countryObject) {
	  if (countryObject.hasOwnProperty(keyC)) {
	    allCountries(keyC);
	  }
	}
}

