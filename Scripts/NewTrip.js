
// Declaration of 'tripsCont' global variables:
var tripsCont = document.getElementById("tripsContainer");


// Trip addition function, 'addTrip':
function addTrip() {

	// Declare variables with values equal to id's of fetched HTML elements:
	var countryName = document.getElementById("select_Country").value,
		descrip = document.getElementById("tripDescrip").value,
		expander_Msg = document.getElementById("expander_Cnt").value;

	// listArr.push("'" + countryName + "'");
	listArr.push(countryName);
	
	// Invocations of the .createElement() method to trigger production of needed HTML entities for created trips:
	var newTrip = document.createElement("DIV"),
		bannerCont = document.createElement("DIV"),
		headerRule = document.createElement("HR"),
		subHeaderRule = document.createElement("HR"),
		bodyCont = document.createElement("DIV"),
		flagImg = document.createElement("IMG"),
		mapImg = document.createElement("IMG"),
		arrowGlyph_Cont = document.createElement("DIV"),
		arrowGlyph = document.createElement("P"),
		titleHolder = document.createElement("P"),
		mapCont = document.createElement("FIGURE"),
		figCapt = document.createElement("FIGCAPTION"),
		bodyTxt = document.createElement("P"),
		bodyTxt_Header = document.createElement("H3"),
		summary_El = document.createElement("DIV"),
		summaryTxt = document.createElement("P");


	// Invocations of the .createTextNode() method to trigger production of embedded HTML text strings:
	var cardTitle = document.createTextNode(countryName),
		summaryMsg = document.createTextNode(descrip),
		bodyTxt_Header_Node = document.createTextNode("Moments From While You Were Abroad...");


	// Define the country map and flag getters:
	var mapFilePath = countryObject[countryName]["map"] + ".svg";
	mapImg.setAttribute("src", mapFilePath);
	mapImg.setAttribute("style", "position: relative; width: 96%; margin: auto; display: block; vertical-align: middle;");

	figCapt.innerHTML = "<br /> <span class='figNum' style='color: black; font-style: normal; font-size: 12px; font-weight: bolder;'> <b>Fig.</b></span> Orthographic projection. <br /> <span style='float: right; font-style: normal; font-size: 9px;'> <br /> <strong><em>—</em> [Natural Earth OS-Data]</strong></span>";
	figCapt.setAttribute("style", "display: inline-block; text-align: center; position: relative; width: 90%; color: #555555; font-style: italic; font-size: 12px; line-height: 8px; margin: auto;");


	var flagFilePath = countryObject[countryName]["flag"] + ".svg";
	flagImg.setAttribute("src", flagFilePath);
	flagImg.setAttribute("style", "max-height: 90px; max-width: 130px; top: 15px; right: 30px; display: inline-block; float: right; position: relative; vertical-align: middle;");


	// Declare preliminary stylistic scheme for pursuant content:
	newTrip.setAttribute("style", "background: silver; box-shadow: 2px 2px 2px dimgray; position: relative; left: 7%; top: 10%; width: 90%; height: 100px;");
	newTrip.className = "trip"; 
	newTrip.setAttribute("style", "background: rgba(192, 192, 192, 0.25);");
	
	bodyCont.setAttribute("style", "display: flex; flex-direction: row; justify-content: center; align-items: baseline; position: relative; width: 98%; padding: 2px 0 0 2px; overflow-x: hidden; margin-bottom: 2%; min-height: 180px;");

	bannerCont.className = "BannerContainer";
	bannerCont.setAttribute("style", "display: block; position: relative; padding: 0 0 10px 10px; top 25px; width: 100%; height: 105px; vertical-align: middle; margin-bottom: 0; overflow: hidden; text-overflow: ellipsis;");

	headerRule.setAttribute("style", "display: block; top: 0; left: 15px; right: -2px; position: relative; margin: 0 0 2% 0; width: auto; overflow: hidden; height: 4px;");
	headerRule.className = "headerRuler";


	// Define nested contents of the 'bannerCont' variable:
	arrowGlyph.innerHTML = "❱❱";				// Guillemet Symbol:  ❱❱		|	⇒
	arrowGlyph.setAttribute("style", "display: inline; width: 100%; height: 100%; position: relative; margin-right: 15px; color: DimGray; font: bold 35px/25px Helvetica, sans-serif;");
	arrowGlyph.className = "doubleChevron";

	arrowGlyph_Cont.appendChild(arrowGlyph);
	arrowGlyph_Cont.setAttribute("style", "width: 50px; height: 50px; position: relative; display: inline-block;");
			
	bodyTxt_Header.appendChild(bodyTxt_Header_Node);
	bodyTxt_Header.setAttribute("style", "height: 20px; text-align: center; margin: 5px auto; width: 95%; display: block; font: bold 16px/18px Helvetica, Arial, sans-serif; color: DimGray; overflow: hidden;");

	titleHolder.appendChild(cardTitle);
	titleHolder.setAttribute("style", "position: relative; display: inline-block; font: small-caps 700 40px/40px Droid Sans; color: #FFFFFF; text-shadow: -2px -2px 1px DimGray, 2px 2px 1px #7EFCEF; float: left; max-width: 75%; top: 50%; transform: translateY(-50%); height: 70px; margin: auto; overflow: hidden; text-overflow: ellipsis;");
	titleHolder.insertBefore(arrowGlyph_Cont, titleHolder.childNodes[0]);
	
	// Define nested contents of the 'bodyCont' variable:
	mapCont.appendChild(figCapt);
	mapCont.insertBefore(mapImg, mapCont.childNodes[0]);
	mapCont.setAttribute("style", "display: inline-block; order: -1; vertical-align: middle; float: left; width: 29%; height: auto; position: relative; left: 0; padding: auto; margin: auto;"); 


	var setOfDates = addDates();

	bodyTxt.appendChild(setOfDates);
	bodyTxt.insertBefore(subHeaderRule, bodyTxt.childNodes[0]);
	bodyTxt.insertBefore(bodyTxt_Header, bodyTxt.childNodes[0]);
	bodyTxt.setAttribute("style", "display: inline-block; position: relative; float: right; width: 65%; background: white; text-align: justify; word-wrap: break-word; font: 16px Roboto; color: #111111; margin: 0 15px; padding: 10px; vertical-align: middle; min-height: 200px; overflow-x: hidden; box-shadow: -3px 3px 2px DimGray;");



	bannerCont.onclick = function() {
		if (newTrip.className === "trip") {
			newTrip.className = "tripClicked";
			// document.getElementById("doubleChevron").innerHTML = "⇓";
			document.getElementsByClassName("doubleChevron").style = "transform: rotate(90deg);";
		} else {
			newTrip.className = "trip";
			// document.getElementById("doubleChevron").innerHTML = "⇒";
			document.getElementsByClassName("doubleChevron").style = "transform: rotate(0deg);";
		}
			
	};


	// Set relevant items to be "children" of their respective "parent" elements:
	bannerCont.appendChild(flagImg);
	bannerCont.insertBefore(titleHolder, bannerCont.childNodes[0]);

	bodyCont.appendChild(bodyTxt);
	bodyCont.insertBefore(mapCont, bodyCont.childNodes[0]);
	
	newTrip.appendChild(headerRule);
	newTrip.insertBefore(bannerCont, newTrip.childNodes[0]);
	newTrip.appendChild(bodyCont);
	newTrip.appendChild(summary_El);
	
	summaryTxt.appendChild(document.createTextNode(descrip));
	summaryTxt.setAttribute("style", "position: relative; display: block; width: 100%; height: auto; font: italic 20px/20px Play, Helvetica, Arial, sans-serif; color: DimGray; padding: 15px 10px 10px 10px; text-align: justify; text-indent: 40px; z-index: 13;");

	summary_El.appendChild(summaryTxt);

	var summaryPic1 = document.createElement("IMG");
	summaryPic1.setAttribute("src", "../Graphics/Open_Quotes.png");

	var summaryPic2 = document.createElement("IMG");
	summaryPic2.setAttribute("src", "../Graphics/Close_Quotes.png");

	summary_El.insertBefore(summaryPic1, summary_El.childNodes[0]);
	summary_El.appendChild(summaryPic2);
			
	summaryPic1.setAttribute("style", "position: absolute; z-index: 12; width: 35px; height: auto; left: -3%; top: 30px; transform: rotate(-5deg); opacity: 0.95;");
	summaryPic2.setAttribute("style", "position: absolute; z-index: 12; width: 35px; height: auto; right: -5%; bottom: -4%; transform: rotate(5deg); opacity: 0.95;");

	var summary_Header = document.createElement("H2");
	summary_Header.appendChild(document.createTextNode("Trip Summary"));
	summary_Header.setAttribute("style", "position: relative; display: block; width: 100%; margin: auto; font: bold 20px/24px Play, sans-serif; color: DimGray; text-align: center;");

	summary_El.insertBefore(summary_Header, summary_El.childNodes[0]);

	summary_El.setAttribute("style", "position: relative; display: block; width: 90%; height: auto; min-height: 100px; clear: both; margin: 30px auto; background: radial-gradient(circle, rgba(255, 255, 255, 0.85) 30%, rgba(255, 255, 255, 0) 85%);");

	var key = countryName + "Trip";




function makeDatesArray() {
	var tripDates = [],
		ns = document.getElementsByClassName("trip_Dates"),
		ls = document.getElementsByClassName("trip_Dates").length;

	for (var i = 0; i < ls; i++) {
		tripDates.push(ns[i].value);
	}

	console.log(ls);
	console.log(tripsObj);
	console.log(tripDates);


	return tripDates;
}



function addDates() {
	var tripDates_Arr = makeDatesArray(),
		datesCont = document.getElementById("datesContainer").getElementsByTagName("TEXTAREA"),
		datesList = document.createElement("UL"),
		iterator = 0;

	console.log(tripDates_Arr);

	datesList.setAttribute("style", "list-style-type: none; width: 100%; height: auto; display: block; position: relative; margin: 10px 0 0 0; padding: 0; left: 0; overflow-x: hidden;");
	datesList.className = "dates_UL";

	forEach(tripDates_Arr, function(date) {
		if(date !== null) {
			var year = date.substring(0, 4),
				month = date.substring(5, 7),
				day = date.substring(8, 10);

			switch(month) {
				case "01":
					month = "January";
					break;
				case "02":
					month = "February";
					break;
				case "03":
					month = "March";
					break;
				case "04":
					month = "April";
					break;
				case "05":
					month = "May";
					break;
				case "06":
					month = "June";
					break;
				case "07":
					month = "July";
					break;
				case "08":
					month = "August";
					break;
				case "09":
					month = "September";
					break;
				case "10":
					month = "October";
					break;
				case "11":
					month = "November";
					break;
				case "12":
					month = "December";
					break;
				default:
					break;
			}

			var formattedDate_Str = day + " " + month + " " + year,
				expander_Msg = datesCont[iterator].value;

			var thisDate_El = document.createElement("LI"),
				thisDate_Node = document.createTextNode(formattedDate_Str);

			thisDate_El.appendChild(thisDate_Node);
			thisDate_El.setAttribute("style", "height: auto; padding: 7.5px 0; margin: 1px 0; display: block; position: relative; width: 100%; left: 0; font: bold 18px/16px Play, Arial, sans-serif;");
			thisDate_El.className = "date_ListItem";

			var expander = document.createElement("DIV"),
				expander_Node = document.createTextNode(expander_Msg);

			expander.appendChild(expander_Node);
			expander.setAttribute("style", "display: block; position: relative; width: 95%; height: auto; top: 100%; margin: 10px; padding: 5px; font: italic 14px/12px Helvetica, Arial, sans-serif; color: silver;");

			thisDate_El.appendChild(expander);


			var guillemetGlyph_El = document.createElement("DIV"),
				guillemetGlyph_Node = document.createTextNode("►");

			guillemetGlyph_El.appendChild(guillemetGlyph_Node);
			guillemetGlyph_El.className = "collapseGlyph";
			guillemetGlyph_El.setAttribute("style", "transform: rotate(0deg); font: bold 18px/16px Play, Arial, sans-serif; width: 6px; margin: 0 25px 0 10px; height: auto; display: inline; position: relative; text-shadow: -1px -1px 1px DimGray; color: #7EFCEF;");
						
			thisDate_El.insertBefore(guillemetGlyph_El, thisDate_El.childNodes[0]);
			datesList.appendChild(thisDate_El);

			iterator++;
		}

	});

	tripsCont.appendChild(newTrip);
	
	return datesList;
}

	if(tripsObj[key]) {
		alert("Looks like you've already been here!");
	} else {
		tripsObj[key] = {
			place: countryName,
			nickname: "",
			dates: makeDatesArray()
		};
	}
	console.log(tripsObj);



	// Array 'daysAbroad_Arr' :
	daysAbroad_Arr.push(tripsObj[key]["dates"]);
	forEach(daysAbroad_Arr, function(dates) {
		return dates.sort();
	})

	console.log(daysAbroad_Arr);

}	


