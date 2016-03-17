
// Global array variable declarations / Accessible to all function scopes:
var daysAbroad_Arr = [];
var diffs = [];
var sortedDates_Arr = [];
var lengthOfStay_Arr = [];


var tripNum = 1;


var listArr = [],
	tripsObj = {},
	countryObject = {
			Afghanistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/19/Afghanistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan",
				emblem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Emblem_of_Afghanistan.svg",
				capital: "Kabul",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Africa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/0/0c/African_Union_flag",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Albania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Albania_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania",
				capital: "Tirana",
				coords: {lat: 41.3300000, lng: 19.8200000}
			},
			Algeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Algeria_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria",
				capital: "Algiers",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Andorra: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/83/Andorra_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Andorra%281934%29",
				capital: "Andorra la Vella",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Angola: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/Angola_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola",
				capital: "Luanda",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Antarctica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Antarctica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_the_Antarctic_Treaty",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Antigua & Barbuda": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/ATG_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda",
				capital: "St. John's",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Arctic Circle": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/92/Arctic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Worldmap_northern",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Argentina: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Argentina_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina",
				capital: "Buenos Aires",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Armenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Armenia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia",
				capital: "Yerevan",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Asia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Asia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/8/87/Flag_of_ASEAN",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Australia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Australia_with_AAT_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29",
				capital: "Canberra",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Austria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Austria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria",
				capital: "Vienna",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Azerbaijan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Azerbaijan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan",
				capital: "Baku",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bahamas: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas",
				capital: "Nassau",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bahrain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bahrain_on_the_globe_%28Afro-Eurasia_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain",
				capital: "Al-Manámah",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bangladesh: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangladesh_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh",
				capital: "Dhaka",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Barbados: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/BRB_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados",
				capital: "Bridgetown",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Belarus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/68/Belarus_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus",
				capital: "Mensk (Minsk)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Belgium: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Belgium_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Government_Ensign_of_Belgium",
				capital: "Brussels",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Belize: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/BLZ_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize",
				capital: "Belmopan",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Benin: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Benin_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin",
				capital: "Porto-Novo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bhutan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bhutan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan",
				capital: "Thimphu",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bolivia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bolivia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29",
				capital: "Sucre",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Bosnia & Herzegovina": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Bosnia_and_Herzegovina_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina",
				capital: "Sarajevo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Botswana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Botswana_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana",
				capital: "Gaborone",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Brazil: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/90/Brazil_on_the_globe_%28South_America_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil",
				capital: "Brasília",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Brunei: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Brunei_on_the_globe_%28Brunei_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei",
				capital: "Bandar Seri Begawan",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Bulgaria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bulgaria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria",
				capital: "Sofia",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Burkina Faso": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Burkina_Faso_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso",
				capital: "Ouagadougou",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Burundi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/27/Burundi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi",
				capital: "Bujumbura",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Cambodia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cambodia_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia",
				capital: "Phnom Penh",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Cameroon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cameroon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon",
				capital: "Yaoundé",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Canada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Canada_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada",
				capital: "Ottawa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Cape Verde": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cape_Verde_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde",
				capital: "Praia",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Central African Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Central_African_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic",
				capital: "Bangui",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Chad: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/46/Chad_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad",
				capital: "N'Djamena",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Chile: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Chile_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile",
				capital: "Santiago",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			China: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/People%27s_Republic_of_China_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China",
				capital: "Beijing",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Colombia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia",
				capital: "Santafé de Bogotá",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Comoros: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Comoros_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros",
				capital: "Moroni (on Grande Comoro)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Congo, Democratic Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo",
				capital: "Kinshasa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Congo, Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo",
				capital: "Brazzaville",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Costa Rica": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Costa_Rica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29",
				capital: "San José",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Côte d’Ivoire": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire",
				capital: "Yamoussoukro",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Croatia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/15/EU-Croatia",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia",
				capital: "Zagreb",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Cuba: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Cuba_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba",
				capital: "Havana",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Cyprus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4f/EU-Cyprus",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus",
				capital: "Lefkosia (Nicosia)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Czech Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Czech_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic",
				capital: "Prague",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Denmark: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Denmark_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark",
				capital: "Copenhagen",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Djibouti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Djibouti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti",
				capital: "Djibouti",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Dominica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dominica_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica",
				capital: "Roseau",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Dominican Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Dominican_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic",
				capital: "Santo Domingo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"East Timor": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Timor_Leste_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor",
				capital: "Dili",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Ecuador: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ecuador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador",
				capital: "Quito",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Egypt: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/EGY_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt",
				capital: "Cairo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"El Salvador": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e3/El_Salvador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador",
				capital: "San Salvador",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Equatorial Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Location_Equatorial_Guinea_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea",
				capital: "Malabo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Eritrea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/Eritrea_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea",
				capital: "Asmara",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Estonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Estonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Estonia_%28bordered%29",
				capital: "Tallinn",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Ethiopia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ethiopia_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia",
				capital: "Addis Ababa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Europe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Europe_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Falkland Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Falkland_Islands_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Faroe Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Kingdom_of_Denmark_on_the_globe_%28Faroer_special%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Fiji: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji",
				capital: "Suva (on Viti Levu)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Finland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Finland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland",
				capital: "Helsinki",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			France: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/France_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France",
				capital: "Paris",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"French Guiana": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/French_Guiana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana",
				capital: "Cayenne (Prefecture)",
				coords: {lat: 4.9372, lng: -52.326}
			},
			"French Polynesia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/ba/French_Polynesia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Gabon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Gabon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Gabon_%283-2%29",
				capital: "Libreville",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Gambia, The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/16/Gambia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia",
				capital: "Banjul",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Gaza Strip": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine",
				capital: "Gaza City (Claimed Territory)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Georgia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/67/Georgia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia",
				capital: "Tbilisi",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Germany: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Germany_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany",
				capital: "Berlin",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Ghana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Ghana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana",
				capital: "Accra",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Greece: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/EU-Greece",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece",
				capital: "Athens",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Greenland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Greenland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Grenada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/53/Grenada_in_its_region",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada",
				capital: "St. George's",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Guatemala: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/Guatemala_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala",
				capital: "Guatemala City",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Guinea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea",
				capital: "Conakry",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Guinea-Bissau": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Guinea-Bissau_on_the_globe_%28Cape_Verde_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau",
				capital: "Bissau",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Guyana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Guyana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana",
				capital: "Georgetown",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Haiti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Haiti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti",
				capital: "Port-au-Prince",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Honduras: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Honduras_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras",
				capital: "Tegucigalpa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Hong Kong": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Hong_Kong_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong",
				capital: "N/A (Non-Sovereign Entity)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Hungary: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/60/EU-Hungary",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary",
				capital: "Budapest",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Iceland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Iceland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland",
				capital: "Reykjavik",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			India: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bb/India_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India",
				capital: "New Delhi",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Indonesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/05/Indonesia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia",
				capital: "Jakarta",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Iran: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iran_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran",
				capital: "Tehran",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Iraq: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Iraq_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq",
				capital: "Baghdad",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Ireland, Northern": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Northern_Ireland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/St_Patrick%27s_saltire",
				capital: "Belfast",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Ireland, Republic of": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2a/EU-Ireland",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland",
				capital: "Dublin",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Israel: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/42/Israel_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel",
				capital: "Jerusalem",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Italy: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Italy_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy",
				capital: "Rome",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Jamaica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jamaica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica",
				capital: "Kingston",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Jan Mayen": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/75/Jan_Mayen_in_Norway",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				capital: "N/A (Unassigned Landmass)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Japan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Japan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan",
				capital: "Tokyo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Jordan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Jordan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan",
				capital: "Amman",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kazakhstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kazakhstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan",
				capital: "Astana",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kenya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kenya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya",
				capital: "Nairobi",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kiribati: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati",
				capital: "Tarawa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Korea, North": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7b/North_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea",
				capital: "Pyongyang",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Korea, South": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/South_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea",
				capital: "Seoul",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kosovo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Europe-Republic_of_Kosovo",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo",
				capital: "Pristina",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kuwait: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuwait_on_the_globe_%28Afro-Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait",
				capital: "Kuwait",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Kyrgyzstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kyrgyzstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan",
				capital: "Bishkek (formerly Frunze)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Laos: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Laos_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos",
				capital: "Vientiane",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Latin America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/Latin_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/75/Cartography_of_Latin_America",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Latvia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/32/EU-Latvia",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia",
				capital: "Riga",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Lebanon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Lebanon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon",
				capital: "Beirut",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Lesotho: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Lesotho_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho",
				capital: "Maseru",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Liberia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/91/Liberia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia",
				capital: "Monrovio",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Libya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/07/Libya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya",
				capital: "Tripoli",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Liechtenstein: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Liechtenstein_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Liechtenstein_%28state%29",
				capital: "Vaduz",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Lithuania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ec/EU-Lithuania",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania",
				capital: "Vilnius",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Luxembourg: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c3/EU-Luxembourg",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg",
				capital: "Luxembourg",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Macau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/98/Macau_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau",
				capital: "N/A (Non-Sovereign Entity)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Macedonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Macedonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia",
				capital: "Skopje",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Madagascar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/99/Madagascar_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar",
				capital: "Antananarivo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Malawi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Malawi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi",
				capital: "Lilongwe",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Malaysia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/23/Malaysia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia",
				capital: "Kuala Lumpur",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Maldives: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Maldives_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives",
				capital: "Malé",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mali: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mali_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali",
				capital: "Bamako",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Malta: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/EU-Malta",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta",
				capital: "Valletta",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Marshall Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands",
				capital: "Majuro",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Martinique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/29/Martinique_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Martinique",
				capital: "Fort-de-France (Prefecture)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mauritania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mauritania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania",
				capital: "Nouakchott",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mauritius: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mauritius_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius",
				capital: "Port Louis",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mexico: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/MEX_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico",
				capital: "Mexico City",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Micronesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Micronesia_in_Oceania_%28-mini_map_-rivers%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia",
				capital: "Palikir",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Middle East": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Middle_East_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Moldova: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Moldova_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova",
				capital: "Chisinau",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Monaco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Monaco_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Monaco_%28state%29",
				capital: "Monaco",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mongolia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mongolia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia",
				capital: "Ulaan Baatar",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Montenegro: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Montenegro_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro",
				capital: "Podgorica",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Morocco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Morocco_%28orthographic_projection%2C_WS_claimed%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco",
				capital: "Rabat",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Mozambique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozambique_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique",
				capital: "Maputo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Myanmar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Myanmar_on_the_globe_%28Myanmar_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar",
				capital: "Rangoon (formerly Yangon)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Namibia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Namibia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia",
				capital: "Windhoek",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Nauru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Nauru_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Nauru_%283-2%29",
				capital: "Yaren",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Nepal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nepal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal",
				capital: "Kathmandu",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Netherlands: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/41/Kingdom_of_the_Netherlands_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands",
				capital: "Amsterdam",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"New Caledonia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0e/New_Caledonia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pro-Independence_Flag_of_New_Caledonia",
				capital: "Nouméa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"New Zealand": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c0/New_Zealand_%28orthographic_projection%29_2",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand",
				capital: "Wellington",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Nicaragua: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Nicaragua_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua",
				capital: "Managua",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Niger: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/88/Niger_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger",
				capital: "Niamey",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Nigeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nigeria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria",
				capital: "Abuja",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"North America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/North_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_North_American_Free_Trade_Agreement_%28standard_version%29",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Northern Mariana Islands": {
				map: "Northern_Mariana_Islands_on_the_globe_(Southeast_Asia_centered)_(small_islands_magnified)",
				flag: "Flag_of_the_Northern_Mariana_Islands",
				capital: "Capitol Hill (Saipan)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Norway: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/28/Norway_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				capital: "Oslo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Oceania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Oceania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Oceania_%28Proposal%29",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Oman: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Oman_%28better%29_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman",
				capital: "Muscat",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Pakistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pakistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan",
				capital: "Islamabad",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Palau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Palau_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau",
				capital: "Melekeok",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Palestine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Palestine_%28State%29",
				capital: "East Jerusalem (Proclaimed)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Panama: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Panama_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama",
				capital: "Panama City",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Papua New Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/79/Papua_New_Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea",
				capital: "Port Moresby",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Paraguay: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Paraguay_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay",
				capital: "Asunción",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Peru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Peru_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29",
				capital: "Lima",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Philippines: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Philippines_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines",
				capital: "Manila",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Poland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Poland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland",
				capital: "Warsaw",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Portugal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Portugal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal",
				capital: "Lisbon",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Qatar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/QAT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar",
				capital: "Doha",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Réunion: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Reunion_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29",
				capital: "Saint-Denis",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Romania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Romania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania",
				capital: "Bucharest",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Russia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/65/Russian_Federation_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia",
				capital: "Moscow",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Rwanda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/Rwanda_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda",
				capital: "Kigali",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"St. Kitts & Nevis": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/KNA_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis",
				capital: "Basseterre (on St. Kitts)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"St. Lucia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia",
				capital: "Castries",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"St. Vincent & The Grenadines": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/VCT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines",
				capital: "Kingstown",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Samoa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/74/Samoa_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa",
				capital: "Apia",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"San Marino": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/San_Marino_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino",
				capital: "San Marino",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"São Tomé & Príncipe": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe",
				capital: "São Tomé",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Saudi Arabia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Saudi_Arabia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia",
				capital: "Riyadh",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Scotland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/82/Scotland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland",
				capital: "Edinburgh",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Senegal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Senegal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal",
				capital: "Dakar",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Serbia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/54/Serbia_on_the_globe_%28claimed%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia",
				capital: "Belgrade",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Seychelles: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Seychelles_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles",
				capital: "Victoria",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Sierra Leone": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sierra_Leone_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone",
				capital: "Freetown",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Singapore: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Singapore_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore",
				capital: "Singapore",
				coords: {lat: 34.533333, lng: 69.166667}			
			},
			Slovakia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Slovakia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia",
				capital: "Bratislava",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Slovenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Slovenia_%28orthographic_projection%29_gray_and_green_scheme_globe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia",
				capital: "Ljubljana",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Solomon Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands",
				capital: "Honiara (on Guadalcanal)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Somalia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Somalia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia",
				capital: "Mogadishu",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"South Africa": {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6e/South_Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa",
				capital: "Pretoria",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"South America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_South_America_%28proposal%29",
				capital: "",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"South Sudan": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/South_Sudan_hd_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan",
				capital: "Juba",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Spain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Spain_WS-included_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain",
				capital: "Madrid",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Sri Lanka": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sri_Lanka_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka",
				capital: "Colombo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Sudan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sudan_%28orthographic_projection%29_highlighted",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan",
				capital: "Khartoum",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Suriname: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Suriname_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname",
				capital: "Paramaribo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Svalbard: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/be/Norway_on_the_globe_%28Svalbard_special%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Svalbard_geoflag",
				capital: "Longyearbyen",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Swaziland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swaziland_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland",
				capital: "Mbabane",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Sweden: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sweden_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden",
				capital: "Stockholm",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Switzerland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/Switzerland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland",
				capital: "Bern",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Syria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/11/Syria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria",
				capital: "Damascus",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Taiwan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Taiwan_%28orthographic_projection%3B_southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China",
				capital: "Taipei",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Tajikistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tajikistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan",
				capital: "Dushanbe",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Tanzania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tanzania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania",
				capital: "Dar es Salaam",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Thailand: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Thailand_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand",
				capital: "Bangkok",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Togo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Togo_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo",
				capital: "Lomé",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Tonga: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Tonga_%283-2%29",
				capital: "Nuku'alofa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Trinidad & Tobago": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago",
				capital: "Port-of-Spain",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Tunisia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tunisia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia",
				capital: "Tunis",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Turkey: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Turkey_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey",
				capital: "Ankara",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Turkmenistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Turkmenistan_on_the_globe_%28Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan",
				capital: "Ashgabat",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Tuvalu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu",
				capital: "Funafuti",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Uganda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Uganda_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda",
				capital: "Kampala",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Ukraine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ukraine_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine",
				capital: "Kyiv (Kiev)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"United Arab Emirates": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/cd/United_Arab_Emirates_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates",
				capital: "Abu Dhabi",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"United Kingdom": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/58/British_Isles_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom",
				capital: "London",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"United States": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/United_States_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States",
				capital: "Washington, D.C. (District of Columbia)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Uruguay: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Uruguay_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay",
				capital: "Montevideo",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Uzbekistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/76/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD_%D0%BD%D0%B0_%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan",
				capital: "Tashkent",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Vanuatu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29",
				capital: "Port Vila",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Vatican City": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Vatican_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City",
				capital: "Vatican City (City-State)",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Venezuela: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Venezuela_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela",
				capital: "Caracas",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Vietnam: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/94/Vietnam_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam",
				capital: "Hanoi",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Wales: {
				map: "http://vignette1.wikia.nocookie.net/future/images/2/25/Wales_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Wales_2",
				capital: "Cardiff",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			"Western Sahara": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Western_Sahara_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic",
				capital: "Laayoune",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Yemen: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Yemen_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen",
				capital: "Sanaá",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Yugoslavia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yugoslavia_location_map",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_SFR_Yugoslavia",
				capital: "Belgrade",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Zaire: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/39/Republic_of_Zaire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Zaire",
				capital: "Kinshasa",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Zambia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/26/Zambia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia",
				capital: "Lusaka",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Zimbabwe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Zimbabwe_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe",
				capital: "Harare",
				coords: {lat: 34.533333, lng: 69.166667}
			}
		};	
		// ^^NEVER AGAIN.
