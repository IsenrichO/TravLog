
// Global array variable declarations / Accessible to all function scopes:
var daysAbroad_Arr = [],
	diffs = [],
	sortedDates_Arr = [],
	lengthOfStay_Arr = [],
	markers_Arr = [];


var tripNum = 1;


var listArr = [],
	tripsObj = {},
	countryObject = {
			Afghanistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/19/Afghanistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Emblem_of_Afghanistan",
				// emblem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Emblem_of_Afghanistan",
				ISO: "AF",
				capital: "Kabul",
				coords: {lat: 33.0000, lng: 65.0000}	// Kabul {lat: 34.533333, lng: 69.166667}
			},
			Africa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/0/0c/African_Union_flag",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4a/RECs_of_the_AEC",
				ISO: "",
				capital: "N/A (Continent)",
				coords: {lat: 41.0000, lng: 20.0000}
			},
			Albania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Albania_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Coat_of_arms_of_Albania",
				ISO: "AL",
				capital: "Tirana",
				coords: {lat: 41.0000, lng: 20.0000}	// Tirana: {41.3300000, lng: 19.8200000}
			},
			Algeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Algeria_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria",
				coat: "https://upload.wikimedia.org/wikipedia/commons/7/77/Seal_of_Algeria",
				ISO: "DO",
				capital: "Algiers",
				coords: {lat: 28.0000, lng: 3.0000}
			},
			Andorra: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/83/Andorra_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Andorra%281934%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_Andorra",
				ISO: "AD",
				capital: "Andorra la Vella",
				coords: {lat: 42.5, lng: 1.5}
			},
			Angola: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/Angola_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/03/Coat_of_arms_of_Angola",
				ISO: "AO",
				capital: "Luanda",
				coords: {lat: -12.5000, lng: 18.5000}
			},
			Antarctica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Antarctica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_the_Antarctic_Treaty",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Emblem_of_the_Antarctic_Treaty",
				ISO: "AQ",
				capital: "N/A (Territorial Region)",
				coords: {lat: -90.0000, lng: 0.0000}
			},
			"Antigua & Barbuda": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/ATG_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/30/Coat_of_arms_of_Antigua_and_Barbuda",
				ISO: "AG",
				capital: "St. John's",
				coords: {lat: 17.0500, lng: -61.8000}
			},
			"Arctic Circle": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/92/Arctic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Worldmap_northern",
				coat: "",
				ISO: "",
				capital: "N/A (Territorial Region)",
				coords: {lat: 90.0000, lng: 0.0000}
			},
			Argentina: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Argentina_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Coat_of_arms_of_Argentina",
				ISO: "AR",
				capital: "Buenos Aires",
				coords: {lat: -34.0000, lng: -64.0000}
			},
			Armenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Armenia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Coat_of_arms_of_Armenia",
				ISO: "AM",
				capital: "Yerevan",
				coords: {lat: 40.0000, lng: 45.0000}
			},
			Asia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Asia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/8/87/Flag_of_ASEAN",
				coat: "",
				ISO: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			Australia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Australia_with_AAT_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Coat_of_Arms_of_Australia",
				ISO: "AU",
				capital: "Canberra",
				coords: {lat: -27.0000, lng: 133.0000}
			},
			Austria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Austria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Coat_of_arms_of_Austria",
				ISO: "AT",
				capital: "Vienna",
				coords: {lat: 47.333333, lng: 13.333333}
			},
			Azerbaijan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Azerbaijan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Emblem_of_Azerbaijan",
				ISO: "AZ",
				capital: "Baku",
				coords: {lat: 40.5000, lng: 47.5000}
			},
			Bahamas: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coat_of_arms_of_the_Bahamas",
				ISO: "BS",
				capital: "Nassau",
				coords: {lat: 24.2500, lng: -76.0000}
			},
			Bahrain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bahrain_on_the_globe_%28Afro-Eurasia_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Emblem_of_Bahrain",
				ISO: "BH",
				capital: "Al-Manámah",
				coords: {lat: 26.0275, lng: 50.5500}
			},
			Bangladesh: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangladesh_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/81/National_emblem_of_Bangladesh",
				ISO: "BD",
				capital: "Dhaka",
				coords: {lat: 24.0000, lng: 90.0000}
			},
			Barbados: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/BRB_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Barbados_Coat_of_Arms",
				ISO: "BB",
				capital: "Bridgetown",
				coords: {lat: 13.166667, lng: -59.5333}
			},
			Belarus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/68/Belarus_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Official_coat_of_arms_of_the_Republic_of_Belarus_%28v%29",
				ISO: "BY",
				capital: "Mensk (Minsk)",
				coords: {lat: 53.0000, lng: 28.0000}
			},
			Belgium: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Belgium_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Government_Ensign_of_Belgium",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Great_coat_of_arms_of_Belgium",
				ISO: "BE",
				capital: "Brussels",
				coords: {lat: 50.833333, lng: 4.0000}
			},
			Belize: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/BLZ_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coat_of_arms_of_Belize",
				ISO: "BZ",
				capital: "Belmopan",
				coords: {lat: 17.2500, lng: -88.7500}	// {lat: 17.066667, lng: -88.7}
			},
			Benin: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Benin_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin",
				coat: "https://upload.wikimedia.org/wikipedia/commons/1/13/Coat_of_arms_of_Benin",
				ISO: "BJ",
				capital: "Porto-Novo",
				coords: {lat: 9.5000, lng: 2.2500}	// {6.466667, lng: 2.6}
			},
			Bermuda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ab/United_Kingdom_on_the_globe_%28Bermuda_special%29_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda",
				coat: "https://upload.wikimedia.org/wikipedia/commons/5/58/Coat_of_arms_of_Bermuda",
				ISO: "BM",
				capital: "Hamilton (British Overseas Territory)",
				coords: {lat: 32.3333, lng: -64.7500}
			},
			Bhutan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bhutan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Emblem_of_Bhutan",
				ISO: "BT",
				capital: "Thimphu",
				coords: {lat: 27.5000, lng: 90.5000}	// {lat: 27.417, lng: 90.435}
			},
			Bolivia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bolivia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/06/Coat_of_arms_of_Bolivia",
				ISO: "BO",
				capital: "Sucre",
				coords: {lat: -17.0000, lng: -65.0000}	// {-16.712, lng: -64.666}
			},
			"Bosnia & Herzegovina": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Bosnia_and_Herzegovina_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Coat_of_arms_of_Bosnia_and_Herzegovina",
				ISO: "BA",
				capital: "Sarajevo",
				coords: {lat: 44.0000, lng: 18.0000}
			},
			Botswana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Botswana_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/de/Coat_of_arms_of_Botswana",
				ISO: "BW",
				capital: "Gaborone",
				coords: {lat: -22.0000, lng: 24.0000}	// {lat: -24.658333, lng: 25.908333}
			},
			Brazil: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/90/Brazil_on_the_globe_%28South_America_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Coat_of_arms_of_Brazil",
				ISO: "BR",
				capital: "Brasília",
				coords: {lat: -10.0000, lng: -55.0000}
			},
			Brunei: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Brunei_on_the_globe_%28Brunei_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/09/Emblem_of_Brunei",
				ISO: "BN",
				capital: "Bandar Seri Begawan",
				coords: {lat: 4.5000, lng: 114.6667}
			},
			Bulgaria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bulgaria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria",
				coat: "",
				ISO: "BG",
				capital: "Sofia",
				coords: {lat: 43.0000, lng: 25.0000}
			},
			"Burkina Faso": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Burkina_Faso_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso",
				coat: "",
				ISO: "BF",
				capital: "Ouagadougou",
				coords: {lat: 13.0000, lng: -2.0000}
			},
			Burundi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/27/Burundi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi",
				coat: "",
				ISO: "BI",
				capital: "Bujumbura",
				coords: {lat: -3.5000, lng: 30.0000}
			},
			Cambodia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cambodia_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia",
				coat: "",
				ISO: "KH",
				capital: "Phnom Penh",
				coords: {lat: 13.0000, lng: 105.0000}
			},
			Cameroon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cameroon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon",
				coat: "",
				ISO: "CM",
				capital: "Yaoundé",
				coords: {lat: 6.0000, lng: 12.0000}
			},
			Canada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Canada_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada",
				coat: "",
				ISO: "CA",
				capital: "Ottawa",
				coords: {lat: 60.0000, lng: -95.0000}
			},
			"Cape Verde": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/CPV_orthographic_NaturalEarth",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde",
				coat: "",
				ISO: "CV",
				capital: "Praia",
				coords: {lat: 6.0000, lng: -24.0000}
			},
			Caribbean: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Antillas_%28orthographic_projection%29",
				flag: "",
				coat: "",
				capital: "",
				coords: {lat: 14.525556, lng: -75.818333}
			},
			"Central African Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Central_African_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic",
				coat: "",
				ISO: "CF",
				capital: "Bangui",
				coords: {lat: 7.0000, lng: 21.0000}
			},
			Chad: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/46/Chad_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad",
				coat: "",
				ISO: "TD",
				capital: "N'Djamena",
				coords: {lat: 15.0000, lng: 19.0000}
			},
			Chile: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Chile_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile",
				coat: "",
				ISO: "CL",
				capital: "Santiago",
				coords: {lat: -30.0000, lng: -71.0000}
			},
			China: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/People%27s_Republic_of_China_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China",
				coat: "",
				ISO: "CN",
				capital: "Beijing",
				coords: {lat: 35.0000, lng: 105.0000}
			},
			Colombia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia",
				coat: "",
				ISO: "CO",
				capital: "Santafé de Bogotá",
				coords: {lat: 4.0000, lng: -72.0000}
			},
			Comoros: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Comoros_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros",
				coat: "",
				ISO: "KM",
				capital: "Moroni (on Grande Comoro)",
				coords: {lat: -12.1667, lng: 44.2500}
			},
			"Congo, Democratic Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo",
				coat: "",
				ISO: "CD",
				capital: "Kinshasa",
				coords: {lat: 0.0000, lng: 25.0000}
			},
			"Congo, Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo",
				coat: "",
				ISO: "CG",
				capital: "Brazzaville",
				coords: {lat: -1.0000, lng: 15.0000}
			},
			"Costa Rica": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Costa_Rica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29",
				coat: "",
				ISO: "CR",
				capital: "San José",
				coords: {lat: 10.0000, lng: -84.0000}
			},
			"Côte d’Ivoire": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire",
				coat: "",
				ISO: "CI",
				capital: "Yamoussoukro",
				coords: {lat: 8.0000, lng: -5.0000}
			},
			Crimea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Crimea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Crimea",
				coat: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Emblem_of_Crimea",
				capital: "Simferopol (Federal Subject of Russia, Disputed)",
				coords: {lat: 45.3, lng: 34.4}
			},
			Croatia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/15/EU-Croatia",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia",
				coat: "",
				ISO: "HR",
				capital: "Zagreb",
				coords: {lat: 45.1667, lng: 15.5000}
			},
			Cuba: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Cuba_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba",
				coat: "",
				ISO: "CU",
				capital: "Havana",
				coords: {lat: 21.5000, lng: -80.0000}
			},
			Cyprus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4f/EU-Cyprus",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus",
				coat: "",
				ISO: "CY",
				capital: "Lefkosia (Nicosia)",
				coords: {lat: 35.0000, lng: 33.0000}
			},
			"Czech Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Czech_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic",
				coat: "",
				ISO: "CZ",
				capital: "Prague",
				coords: {lat: 49.7500, lng: 15.5000}
			},
			Denmark: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Denmark_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark",
				coat: "",
				ISO: "DK",
				capital: "Copenhagen",
				coords: {lat: 56.0000, lng: 10.0000}
			},
			Djibouti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Djibouti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti",
				coat: "",
				ISO: "DJ",
				capital: "Djibouti (City)",
				coords: {lat: 11.5000, lng: 43.0000}
			},
			Dominica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dominica_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica",
				coat: "",
				ISO: "DM",
				capital: "Roseau",
				coords: {lat: 15.4167, lng: -61.3333}
			},
			"Dominican Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Dominican_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic",
				coat: "",
				ISO: "DO",
				capital: "Santo Domingo",
				coords: {lat: 19.0000, lng: -70.6667}
			},
			Earth: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/57/Earth_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/International_Flag_of_Planet_Earth",
				coat: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol",
				capital: "N/A (Planetary Body)",
				coords: {lat: undefined, lng: undefined}
			},
			"East Timor": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Timor_Leste_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Coat_of_arms_of_East_Timor",
				ISO: "TL",
				capital: "Dili",
				coords: {lat: -8.833333, lng: 125.916667}
			},
			Ecuador: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ecuador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador",
				coat: "",
				ISO: "EC",
				capital: "Quito",
				coords: {lat: -2.0000, lng: -77.5000}
			},
			Egypt: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/EGY_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt",
				coat: "",
				ISO: "EG",
				capital: "Cairo",
				coords: {lat: 27.0000, lng: 30.0000}
			},
			"El Salvador": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e3/El_Salvador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador",
				coat: "",
				ISO: "SV",
				capital: "San Salvador",
				coords: {lat: 13.8333, lng: -88.9167}
			},
			"Equatorial Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Location_Equatorial_Guinea_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea",
				coat: "",
				ISO: "GQ",
				capital: "Malabo",
				coords: {lat: 2.0000, lng: 10.0000}
			},
			Eritrea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/Eritrea_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea",
				coat: "",
				ISO: "ER",
				capital: "Asmara",
				coords: {lat: 15.0000, lng: 39.0000}
			},
			Estonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Estonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Estonia_%28bordered%29",
				coat: "",
				ISO: "EE",
				capital: "Tallinn",
				coords: {lat: 59.0000, lng: 26.0000}
			},
			Ethiopia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ethiopia_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia",
				coat: "",
				ISO: "ET",
				capital: "Addis Ababa",
				coords: {lat: 8.0000, lng: 38.0000}
			},
			Europe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Map_of_Europe_with_flags",
				capital: "N/A (Continent)",
				coords: {lat: 54.9, lng: 25.316667}
			},
			"Falkland Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Falkland_Islands_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands",
				coat: "",
				ISO: "FK",
				capital: "Stanley (British Overseas Territory)",
				coords: {lat: -51.7500, lng: -59.0000}
			},
			"Faroe Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Kingdom_of_Denmark_on_the_globe_%28Faroer_special%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands",
				coat: "",
				ISO: "FO",
				capital: "Tórshavn (Danish Overseas Territory)",
				coords: {lat: 62.0000, lng: -7.0000}
			},
			Fiji: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji",
				coat: "",
				ISO: "FJ",
				capital: "Suva (on Viti Levu)",
				coords: {lat: -18.0000, lng: 175.0000}
			},
			Finland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Finland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland",
				coat: "",
				ISO: "FI",
				capital: "Helsinki",
				coords: {lat: 64.0000, lng: 26.0000}
			},
			France: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/France_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France",
				coat: "",
				ISO: "FR",
				capital: "Paris",
				coords: {lat: 46.0000, lng: 2.0000}
			},
			"French Guiana": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/French_Guiana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana",
				coat: "",
				ISO: "GF",
				capital: "Cayenne (French Prefecture)",
				coords: {lat: 4.0000, lng: -53.0000}	// Cayenne: {lat: 4.9372, lng: -52.326}
			},
			"French Polynesia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b9/French_Polynesia_on_the_globe_%28French_Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/65/Coat_of_arms_of_French_Polynesia",
				ISO: "PF",
				capital: "Pape'ete (Special Collectivity of France)",
				coords: {lat: -15.0000, lng: -140.0000}
			},
			Gabon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Gabon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Gabon_%283-2%29",
				coat: "",
				ISO: "GA",
				capital: "Libreville",
				coords: {lat: -1.0000, lng: 11.7500}
			},
			Gambia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/16/Gambia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia",
				coat: "",
				ISO: "GM",
				capital: "Banjul",
				coords: {lat: 13.4667, lng: -16.5667}
			},
			"Gaza Strip": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine",
				coat: "",
				ISO: "",
				capital: "Gaza City (claimed)",
//				coords: {lat: , lng: }
			},
			Georgia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/67/Georgia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia",
				coat: "",
				ISO: "GE",
				capital: "Tbilisi",
				coords: {lat: 42.0000, lng: 43.5000}
			},
			Germany: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Germany_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany",
				ISO: "DE",
				capital: "Berlin",
				coords: {lat: 51.0000, lng: 9.0000}
			},
			Ghana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Ghana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana",
				coat: "",
				ISO: "GH",
				capital: "Accra",
				coords: {lat: 8.0000, lng: -2.0000}
			},
			Greece: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/EU-Greece",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece",
				coat: "",
				ISO: "GR",
				capital: "Athens",
				coords: {lat: 39.0000, lng: 22.0000}
			},
			Greenland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Greenland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland",
				coat: "",
				ISO: "GL",
				capital: "",
				coords: {lat: 72.0000, lng: -40.0000}
			},
			Grenada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/53/Grenada_in_its_region",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada",
				coat: "",
				ISO: "GD",
				capital: "St. George's",
				coords: {lat: 12.1167, lng: -61.6667}
			},
			Guadeloupe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/60/France_on_the_globe_%28Guadeloupe_special%29_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Guadeloupe_%28local%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Coat_of_arms_of_Guadeloupe",
				ISO: "GP",
				capital: "Basse-Terre (French Prefecture)",
				coords: {lat: 16.2500, lng: -61.5833}	// Basse-Terre: {lat: 15.9958, lng: -61.7292}, 
			},
			Guatemala: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/Guatemala_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala",
				coat: "",
				ISO: "GT",
				capital: "Guatemala City",
				coords: {lat: 15.5000, lng: -90.2500}
			},
			Guinea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea",
				coat: "",
				ISO: "GN",
				capital: "Conakry",
				coords: {lat: 11.0000, lng: -10.0000}
			},
			"Guinea-Bissau": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Guinea-Bissau_on_the_globe_%28Cape_Verde_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau",
				coat: "",
				ISO: "GW",
				capital: "Bissau",
				coords: {lat: 12.0000, lng: -15.0000}
			},
			Guyana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Guyana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana",
				coat: "",
				ISO: "GY",
				capital: "Georgetown",
				coords: {lat: 5.0000, lng: -59.0000}
			},
			Haiti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Haiti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti",
				coat: "",
				ISO: "HT",
				capital: "Port-au-Prince",
				coords: {lat: 19.0000, lng: -72.4167}
			},
			Honduras: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Honduras_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras",
				coat: "",
				ISO: "HN",
				capital: "Tegucigalpa",
				coords: {lat: 15.0000, lng: -86.5000}
			},
			"Hong Kong": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Hong_Kong_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong",
				coat: "",
				ISO: "HK",
				capital: "N/A (Non-Sovereign Entity)",
				coords: {lat: 22.2500, lng: 114.1667}
			},
			Hungary: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/60/EU-Hungary",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary",
				coat: "",
				ISO: "HU",
				capital: "Budapest",
				coords: {lat: 47.0000, lng: 20.0000}
			},
			Iceland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Iceland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland",
				coat: "",
				ISO: "IS",
				capital: "Reykjavik",
				coords: {lat: 65.0000, lng: -18.0000}
			},
			India: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bb/India_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India",
				coat: "",
				ISO: "IN",
				capital: "New Delhi",
				coords: {lat: 20.0000, lng: 77.0000}
			},
			Indonesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/05/Indonesia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia",
				coat: "",
				ISO: "ID",
				capital: "Jakarta",
				coords: {lat: -5.0000, lng: 120.0000}
			},
			Iran: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iran_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran",
				coat: "",
				ISO: "IR",
				capital: "Tehran",
				coords: {lat: 32.0000, lng: 53.0000}
			},
			Iraq: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Iraq_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq",
				coat: "",
				ISO: "IQ",
				capital: "Baghdad",
				coords: {lat: 33.0000, lng: 44.0000}
			},
			"Ireland, Northern": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Northern_Ireland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/St_Patrick%27s_saltire",
				coat: "",
				ISO: "",
				capital: "Belfast",
//				coords: {lat: , lng: }
			},
			"Ireland, Republic of": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2a/EU-Ireland",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland",
				coat: "",
				ISO: "IE",
				capital: "Dublin",
				coords: {lat: 53.0000, lng: -8.0000}
			},
			"Isle of Man": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Isle_of_Man_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_the_Isle_of_Mann",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coat_of_arms_of_the_Isle_of_Man",
				ISO: "IM",
				capital: "Douglas (Doolish)",
				coords: {lat: 54.145, lng: -4.482},		// <-- Coords. Douglas, City of
			},
			Israel: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/42/Israel_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel",
				coat: "",
				ISO: "IL",
				capital: "Jerusalem",
				coords: {lat: 31.5000, lng: 34.7500}
			},
			Italy: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Italy_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy",
				coat: "",
				ISO: "IT",
				capital: "Rome",
				coords: {lat: 42.8333, lng: 12.8333}
			},
			Jamaica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jamaica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica",
				coat: "",
				ISO: "JM",
				capital: "Kingston",
				coords: {lat: 18.2500, lng: -77.5000}
			},
			"Jan Mayen": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/75/Jan_Mayen_in_Norway",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				coat: "",
				ISO: "",
				capital: "N/A (Norwegian Territory)",
//				coords: {lat: , lng: }
			},
			Japan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Japan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan",
				coat: "",
				ISO: "JP",
				capital: "Tokyo",
				coords: {lat: 36.0000, lng: 138.0000}
			},
			Jordan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Jordan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan",
				coat: "",
				ISO: "JO",
				capital: "Amman",
				coords: {lat: 31.0000, lng: 36.0000}
			},
			Kazakhstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kazakhstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan",
				coat: "",
				ISO: "KZ",
				capital: "Astana",
				coords: {lat: 48.0000, lng: 68.0000}
			},
			Kenya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kenya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya",
				coat: "",
				ISO: "KE",
				capital: "Nairobi",
				coords: {lat: 1.0000, lng: 38.0000}
			},
			Kiribati: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati",
				coat: "",
				ISO: "KI",
				capital: "Tarawa",
				coords: {lat: 1.4167, lng: 173.0000}
			},
			"Korea, North": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7b/North_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea",
				coat: "",
				ISO: "KP",
				capital: "Pyongyang",
				coords: {lat: 40.0000, lng: 127.0000}
			},
			"Korea, South": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/South_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea",
				coat: "",
				ISO: "KR",
				capital: "Seoul",
				coords: {lat: 37.0000, lng: 127.5000}
			},
			Kosovo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Europe-Republic_of_Kosovo",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo",
				coat: "",
				ISO: "",
				capital: "Pristina",
//				coords: {lat: , lng: }
			},
			Kuwait: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuwait_on_the_globe_%28Afro-Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait",
				coat: "",
				ISO: "KW",
				capital: "Kuwait",
				coords: {lat: 29.3375, lng: 47.6581}
			},
			Kyrgyzstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kyrgyzstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan",
				coat: "",
				ISO: "KG",
				capital: "Bishkek (fmy. Frunze)",
				coords: {lat: 41.0000, lng: 75.0000}
			},
			Laos: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Laos_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/04/Emblem_of_Laos",
				ISO: "LA",
				capital: "Vientiane",
				coords: {lat: 18.0000, lng: 105.0000}
			},
			"Latin America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/Latin_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/75/Cartography_of_Latin_America",
				capital: "N/A (Territorial Group)",
//				coords: {lat: , lng: }
			},
			Latvia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/32/EU-Latvia",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia",
				coat: "",
				ISO: "LV",
				capital: "Riga",
				coords: {lat: 57.0000, lng: 25.0000}
			},
			Lebanon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Lebanon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon",
				coat: "",
				ISO: "LB",
				capital: "Beirut",
				coords: {lat: 33.8333, lng: 35.8333}
			},
			Lesotho: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Lesotho_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho",
				coat: "",
				ISO: "LS",
				capital: "Maseru",
				coords: {lat: -29.5000, lng: 28.5000}
			},
			Liberia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/91/Liberia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia",
				coat: "",
				ISO: "LR",
				capital: "Monrovio",
				coords: {lat: 6.5000, lng: -9.5000}
			},
			Libya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/07/Libya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya",
				coat: "",
				ISO: "LY",
				capital: "Tripoli",
				coords: {lat: 25.0000, lng: 17.0000}
			},
			Liechtenstein: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Liechtenstein_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Liechtenstein_%28state%29",
				coat: "",
				ISO: "LI",
				capital: "Vaduz",
				coords: {lat: 47.1667, lng: 9.5333}
			},
			Lithuania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ec/EU-Lithuania",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania",
				coat: "",
				ISO: "LT",
				capital: "Vilnius",
				coords: {lat: 56.0000, lng: 24.0000}
			},
			Luxembourg: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c3/EU-Luxembourg",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg",
				coat: "",
				ISO: "LU",
				capital: "Luxembourg",
				coords: {lat: 49.7500, lng: 6.1667}
			},
			Macau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/98/Macau_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau",
				coat: "",
				ISO: "MO",
				capital: "N/A (Non-Sovereign Entity)",
				coords: {lat: 22.1667, lng: 113.5500}
			},
			Macedonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Macedonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia",
				coat: "",
				ISO: "MK",
				capital: "Skopje",
				coords: {lat: 41.8333, lng: 22.0000}
			},
			Madagascar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/99/Madagascar_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar",
				coat: "",
				ISO: "MG",
				capital: "Antananarivo",
				coords: {lat: -20.0000, lng: 47.0000}
			},
			Malawi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Malawi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi",
				coat: "",
				ISO: "MW",
				capital: "Lilongwe",
				coords: {lat: -13.5000, lng: 34.0000}
			},
			Malaysia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/23/Malaysia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia",
				coat: "",
				ISO: "MY",
				capital: "Kuala Lumpur",
				coords: {lat: 2.5000, lng: 112.5000}
			},
			Maldives: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Maldives_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives",
				coat: "",
				ISO: "MV",
				capital: "Malé",
				coords: {lat: 3.2500, lng: 73.0000}
			},
			Mali: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mali_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali",
				coat: "",
				ISO: "ML",
				capital: "Bamako",
				coords: {lat: 17.0000, lng: -4.0000}
			},
			Malta: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/EU-Malta",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta",
				coat: "",
				ISO: "MT",
				capital: "Valletta",
				coords: {lat: 35.8333, lng: 14.5833}
			},
			"Marshall Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands",
				coat: "",
				ISO: "MH",
				capital: "Majuro",
				coords: {lat: 9.0000, lng: 168.0000}
			},
			Martinique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/29/Martinique_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Martinique",
				coat: "",
				ISO: "MQ",
				capital: "Fort-de-France (French Prefecture)",
				coords: {lat: 14.6667, lng: -61.0000}
			},
			Mauritania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mauritania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania",
				coat: "",
				ISO: "MR",
				capital: "Nouakchott",
				coords: {lat: 20.0000, lng: -12.0000}
			},
			Mauritius: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mauritius_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius",
				coat: "",
				ISO: "MU",
				capital: "Port Louis",
				coords: {lat: -20.2833, lng: 57.5500}
			},
			Mexico: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/MEX_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico",
				coat: "",
				ISO: "MX",
				capital: "Mexico City",
				coords: {lat: 23.0000, lng: -102.0000}
			},
			Micronesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Micronesia_in_Oceania_%28-mini_map_-rivers%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia",
				coat: "",
				ISO: "FM",
				capital: "Palikir",
				coords: {lat: 6.9167, lng: 158.2500}
			},
			"Middle East": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Middle_East_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League",
				coat: "N/A (Territorial Group)",
				ISO: "",
				capital: "N/A (Territorial Group)",
//				coords: {lat: , lng: }
			},
			Moldova: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Moldova_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova",
				coat: "",
				ISO: "MD",
				capital: "Chisinau",
				coords: {lat: 47.0000, lng: 29.0000}
			},
			Monaco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Monaco_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Monaco_%28state%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Coat_of_arms_of_Monaco",
				ISO: "MC",
				capital: "Monaco (City-State)",
				coords: {lat: 43.7333, lng: 7.4000}	// {lat: 43.733333, lng: 7.416667}
			},
			Mongolia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mongolia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia",
				coat: "",
				ISO: "MN",
				capital: "Ulaan Baatar",
				coords: {lat: 46.0000, lng: 105.0000}
			},
			Montenegro: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Montenegro_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro",
				coat: "",
				ISO: "ME",
				capital: "Podgorica",
				coords: {lat: 42.0000, lng: 19.0000}
			},
			Morocco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Morocco_%28orthographic_projection%2C_WS_claimed%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco",
				coat: "",
				ISO: "MA",
				capital: "Rabat",
				coords: {lat: 32.0000, lng: -5.0000}
			},
			Mozambique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozambique_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique",
				coat: "",
				ISO: "MZ",
				capital: "Maputo",
				coords: {lat: -18.2500, lng: 35.0000}
			},
			Myanmar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Myanmar_on_the_globe_%28Myanmar_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/89/State_seal_of_Myanmar",
				ISO: "MM",
				capital: "Rangoon (fmy. Yangon)",
				coords: {lat: 22.0000, lng: 98.0000}
			},
			Namibia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Namibia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia",
				coat: "",
				ISO: "NA",
				capital: "Windhoek",
				coords: {lat: -22.0000, lng: 17.0000}
			},
			Nauru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Nauru_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Nauru_%283-2%29",
				coat: "",
				ISO: "NR",
				capital: "Yaren",
				coords: {lat: -0.5333, lng: 166.9167}
			},
			Nepal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nepal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal",
				coat: "",
				ISO: "NP",
				capital: "Kathmandu",
				coords: {lat: 28.0000, lng: 84.0000}
			},
			Netherlands: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/41/Kingdom_of_the_Netherlands_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands",
				coat: "",
				ISO: "NL",
				capital: "Amsterdam",
				coords: {lat: 52.5000, lng: 5.7500}
			},
			"New Caledonia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0e/New_Caledonia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pro-Independence_Flag_of_New_Caledonia",
				coat: "",
				ISO: "NC",
				capital: "Nouméa (Special Collectivity of France)",
				coords: {lat: -21.5000, lng: 165.5000}
			},
			"New Zealand": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c0/New_Zealand_%28orthographic_projection%29_2",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand",
				coat: "",
				ISO: "NZ",
				capital: "Wellington",
				coords: {lat: -41.0000, lng: 174.0000}
			},
			Nicaragua: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Nicaragua_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua",
				coat: "",
				ISO: "NI",
				capital: "Managua",
				coords: {lat: 13.0000, lng: -85.0000}
			},
			Niger: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/88/Niger_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger",
				coat: "",
				ISO: "NE",
				capital: "Niamey",
				coords: {lat: 16.0000, lng: 8.0000}
			},
			Nigeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nigeria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria",
				coat: "",
				ISO: "NG",
				capital: "Abuja",
				coords: {lat: 10.0000, lng: 8.0000}
			},
			"North America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/North_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_North_American_Free_Trade_Agreement_%28standard_version%29",
				coat: "",
				capital: "N/A (Continent)",
				coords: {lat: 48.166667, lng: -100.166667}
			},
			"Northern Mariana Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/archive/5/5a/20150910123914%21Northern_Mariana_Islands_on_the_globe_%28Southeast_Asia_centered%29_%28small_islands_magnified%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Seal_of_the_Northern_Mariana_Islands_%28alternate%29",
				capital: "Capitol Hill (Saipan)",
				ISO: "MP",
				coords: {lat: 15.2000, lng: 145.7500}	// {lat: 17.0000, lng: 146.0000}
			},
			Norway: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/28/Norway_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				coat: "",
				ISO: "NO",
				capital: "Oslo",
				coords: {lat: 62.0000, lng: 10.0000}
			},
			Oceania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Oceania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Oceania_%28Proposal%29",
				coat: "",
				ISO: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			Oman: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Oman_%28better%29_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman",
				coat: "",
				ISO: "OM",
				capital: "Muscat",
				coords: {lat: 21.0000, lng: 57.0000}
			},
			Pakistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pakistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan",
				coat: "",
				ISO: "PK",
				capital: "Islamabad",
				coords: {lat: 30.0000, lng: 70.0000}
			},
			Palau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Palau_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau",
				coat: "",
				ISO: "PW",
				capital: "Melekeok",
				coords: {lat: 7.5000, lng: 134.5000}
			},
			Palestine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Palestine_%28State%29",
				coat: "",
				ISO: "PS",
				capital: "East Jerusalem (claimed)",
				coords: {lat: 32.0000, lng: 35.2500}
			},
			Panama: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Panama_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama",
				coat: "",
				ISO: "PA",
				capital: "Panama City",
				coords: {lat: 9.0000, lng: -80.0000}
			},
			"Papua New Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/79/Papua_New_Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea",
				coat: "",
				ISO: "PG",
				capital: "Port Moresby",
				coords: {lat: -6.0000, lng: 147.0000}
			},
			Paraguay: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Paraguay_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay",
				coat: "",
				ISO: "PY",
				capital: "Asunción",
				coords: {lat: -23.0000, lng: -58.0000}
			},
			Peru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Peru_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29",
				coat: "",
				ISO: "PE",
				capital: "Lima",
				coords: {lat: -10.0000, lng: -76.0000}
			},
			Philippines: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Philippines_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines",
				coat: "",
				ISO: "PH",
				capital: "Manila",
				coords: {lat: 13.0000, lng: 122.0000}
			},
			Poland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Poland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland",
				coat: "",
				ISO: "PL",
				capital: "Warsaw",
				coords: {lat: 52.0000, lng: 20.0000}
			},
			Portugal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Portugal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal",
				coat: "",
				ISO: "PT",
				capital: "Lisbon",
				coords: {lat: 39.5000, lng: -8.0000}
			},
			"Puerto Rico": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Puerto_Rico_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/36/Coat_of_arms_of_the_Commonwealth_of_Puerto_Rico",
				ISO: "PR",
				capital: "San Juan (US Territory)",
				coords: {lat: 18.2500, lng: -66.5000}		// San Juan: {lat: 18.406389, lng: -66.063889}, 
			},
			Qatar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/QAT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar",
				coat: "",
				ISO: "QA",
				capital: "Doha",
				coords: {lat: 25.5000, lng: 51.2500}
			},
			Réunion: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Reunion_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/39/Armoiries_R%C3%A9union",
				ISO: "RE",
				capital: "Saint-Denis (French Prefecture)",
				coords: {lat: -21.1000, lng: 55.6000}	// Saint-Denis: {lat: -20.8789, lng: 55.4481}, 
			},
			Romania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Romania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania",
				coat: "",
				ISO: "RO",
				capital: "Bucharest",
				coords: {lat: 46.0000, lng: 25.0000}
			},
			Russia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/65/Russian_Federation_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia",
				coat: "",
				ISO: "RU",
				capital: "Moscow",
				coords: {lat: 60.0000, lng: 100.0000}
			},
			Rwanda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/Rwanda_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda",
				coat: "",
				ISO: "RW",
				capital: "Kigali",
				coords: {lat: -2.0000, lng: 30.0000}
			},
			"St. Kitts & Nevis": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/KNA_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis",
				coat: "",
				ISO: "KN",
				capital: "Basseterre (on St. Kitts)",
				coords: {lat: 17.3333, lng: -62.7500}
			},
			"St. Lucia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia",
				coat: "",
				ISO: "LC",
				capital: "Castries",
				coords: {lat: 13.8833, lng: -61.1333}
			},
			"St. Vincent & The Grenadines": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/VCT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines",
				coat: "",
				ISO: "VC",
				capital: "Kingstown",
				coords: {lat: 13.2500, lng: -61.2000}
			},
			Samoa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/74/Samoa_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa",
				coat: "",
				ISO: "WS",
				capital: "Apia",
				coords: {lat: -13.5833, lng: -172.3333}
			},
			"San Marino": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/San_Marino_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_San_Marino",
				ISO: "SM",
				capital: "San Marino (City-State)",
				coords: {lat: 43.7667, lng: 12.4167}	// San Marino: {lat: 43.941667, lng: 12.458333}
			},
			"São Tomé & Príncipe": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe",
				coat: "",
				ISO: "ST",
				capital: "São Tomé",
				coords: {lat: 1.0000, lng: 7.0000}
			},
			"Saudi Arabia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Saudi_Arabia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia",
				coat: "",
				ISO: "SA",
				capital: "Riyadh",
				coords: {lat: 25.0000, lng: 45.0000}
			},
			Scotland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/82/Scotland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland",
				coat: "",
				ISO: "",
				capital: "Edinburgh",
//				coords: {lat: , lng: }
			},
			Senegal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Senegal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal",
				coat: "",
				ISO: "SN",
				capital: "Dakar",
				coords: {lat: 14.0000, lng: -14.0000}
			},
			Serbia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/54/Serbia_on_the_globe_%28claimed%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia",
				coat: "",
				ISO: "RS",
				capital: "Belgrade",
				coords: {lat: 44.0000, lng: 21.0000}
			},
			Seychelles: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Seychelles_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles",
				coat: "",
				ISO: "SC",
				capital: "Victoria",
				coords: {lat: -4.5833, lng: 55.6667}
			},
			"Sierra Leone": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sierra_Leone_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone",
				coat: "",
				ISO: "SL",
				capital: "Freetown",
				coords: {lat: 8.5000, lng: -11.5000}
			},
			Singapore: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Singapore_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore",
				coat: "",
				ISO: "SG",
				capital: "Singapore (City)",
				coords: {lat: 1.3667, lng: 103.8000}			
			},
			Slovakia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Slovakia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia",
				coat: "",
				ISO: "SK",
				capital: "Bratislava",
				coords: {lat: 48.6667, lng: 19.5000}
			},
			Slovenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Slovenia_%28orthographic_projection%29_gray_and_green_scheme_globe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia",
				coat: "",
				ISO: "SI",
				capital: "Ljubljana",
				coords: {lat: 46.0000, lng: 15.0000}
			},
			"Solomon Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands",
				coat: "",
				ISO: "SB",
				capital: "Honiara (on Guadalcanal)",
				coords: {lat: -8.0000, lng: 159.0000}
			},
			Somalia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Somalia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia",
				coat: "",
				ISO: "SO",
				capital: "Mogadishu",
				coords: {lat: 10.0000, lng: 49.0000}
			},
			"South Africa": {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6e/South_Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa",
				coat: "",
				ISO: "ZA",
				capital: "Pretoria",
				coords: {lat: -29.0000, lng: 24.0000}
			},
			"South America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_South_America_%28proposal%29",
				coat: "",
				ISO: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			"South Sudan": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/South_Sudan_hd_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/2/28/Coat_of_arms_of_South_Sudan",
				ISO: "SS",
				capital: "Juba",
				coords: {lat: 8.0000, lng: 30.0000}
			},
			Spain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Spain_WS-included_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain",
				coat: "",
				ISO: "ES",
				capital: "Madrid",
				coords: {lat: 40.0000, lng: -4.0000}
			},
			"Sri Lanka": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sri_Lanka_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka",
				coat: "",
				ISO: "LK",
				capital: "Colombo",
				coords: {lat: 7.0000, lng: 81.0000}
			},
			Sudan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sudan_%28orthographic_projection%29_highlighted",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan",
				coat: "",
				ISO: "SD",
				capital: "Khartoum",
				coords: {lat: 15.0000, lng: 30.0000}
			},
			Suriname: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Suriname_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname",
				coat: "",
				ISO: "SR",
				capital: "Paramaribo",
				coords: {lat: 4.0000, lng: -56.0000}
			},
			Svalbard: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/be/Norway_on_the_globe_%28Svalbard_special%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Svalbard_geoflag",
				coat: "",
				capital: "Longyearbyen (Norwegian Territory)",
//				coords: {lat: , lng: }
			},
			Swaziland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swaziland_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland",
				coat: "",
				ISO: "SZ",
				capital: "Mbabane",
				coords: {lat: -26.5000, lng: 31.5000}
			},
			Sweden: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sweden_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden",
				coat: "",
				ISO: "SE",
				capital: "Stockholm",
				coords: {lat: 62.0000, lng: 15.0000}
			},
			Switzerland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/Switzerland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland",
				coat: "",
				ISO: "CH",
				capital: "Bern",
				coords: {lat: 47.0000, lng: 8.0000}
			},
			Syria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/11/Syria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria",
				coat: "",
				ISO: "SY",
				capital: "Damascus",
				coords: {lat: 35.0000, lng: 38.0000}
			},
			Taiwan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Taiwan_%28orthographic_projection%3B_southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China",
				coat: "",
				ISO: "TW",
				capital: "Taipei",
				coords: {lat: 23.5000, lng: 121.0000}
			},
			Tajikistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tajikistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan",
				coat: "",
				ISO: "TJ",
				capital: "Dushanbe",
				coords: {lat: 39.0000, lng: 71.0000}
			},
			Tanzania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tanzania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania",
				coat: "",
				ISO: "TZ",
				capital: "Dar es Salaam",
				coords: {lat: -6.0000, lng: 35.0000}
			},
			Thailand: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Thailand_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand",
				coat: "",
				ISO: "TH",
				capital: "Bangkok",
				coords: {lat: 15.0000, lng: 100.0000}
			},
			Togo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Togo_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo",
				coat: "",
				ISO: "TG",
				capital: "Lomé",
				coords: {lat: 8.0000, lng: 1.1667}
			},
			Tonga: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Tonga_%283-2%29",
				coat: "",
				ISO: "TO",
				capital: "Nuku'alofa",
				coords: {lat: -20.0000, lng: -175.0000}
			},
			"Trinidad & Tobago": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago",
				coat: "",
				ISO: "TT",
				capital: "Port-of-Spain",
				coords: {lat: 11.0000, lng: -61.0000}
			},
			Tunisia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tunisia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia",
				coat: "",
				ISO: "TN",
				capital: "Tunis",
				coords: {lat: 34.0000, lng: 9.0000}
			},
			Turkey: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Turkey_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey",
				coat: "",
				ISO: "TR",
				capital: "Ankara",
				coords: {lat: 39.0000, lng: 35.0000}
			},
			Turkmenistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Turkmenistan_on_the_globe_%28Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan",
				coat: "",
				ISO: "TM",
				capital: "Ashgabat",
				coords: {lat: 40.0000, lng: 60.0000}
			},
			"Turks & Caicos": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Turks_and_Caicos_Islands_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Coat_of_arms_of_the_Turks_and_Caicos_Islands",
				ISO: "TC",
				capital: "Cockburn Town (British Overseas Territory)",
				coords: {lat: 21.7500, lng: -71.5833}	// Cockburn Town: {lat: 21.75, lng: -71.583333}
			},
			Tuvalu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu",
				coat: "",
				ISO: "TV",
				capital: "Funafuti",
				coords: {lat: -8.0000, lng: 178.0000}
			},
			Uganda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Uganda_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda",
				coat: "",
				ISO: "UG",
				capital: "Kampala",
				coords: {lat: 1.0000, lng: 32.0000}
			},
			Ukraine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ukraine_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine",
				coat: "",
				ISO: "UA",
				capital: "Kyiv (Kiev)",
				coords: {lat: 49.0000, lng: 32.0000}
			},
			"United Arab Emirates": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/cd/United_Arab_Emirates_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates",
				coat: "",
				ISO: "AE",
				capital: "Abu Dhabi",
				coords: {lat: 24.0000, lng: 54.0000}
			},
			"United Kingdom": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/58/British_Isles_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom",
				coat: "",
				ISO: "GB",
				capital: "London",
				coords: {lat: 54.0000, lng: -2.0000}
			},
			"United States": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/United_States_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States",
				coat: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29",
				ISO: "US",
				capital: "Washington, D.C. (District of Columbia)",
				coords: {lat: 38.0000, lng: -97.0000}	// {lat: 40, lng: -100}
			},
			Unknown: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a9/None_%28orthographic_projection%29",
				flag: "N/A (Unidentified Geographic Locale)",
				coat: "N/A (Unidentified Geographic Locale)",
				capital: "N/A (Unidentified Geographic Locale)",
				coords: {lat: undefined, lng: undefined}
			},
			Uruguay: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Uruguay_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay",
				coat: "",
				ISO: "UY",
				capital: "Montevideo",
				coords: {lat: -33.0000, lng: -56.0000}
			},
			Uzbekistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/76/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD_%D0%BD%D0%B0_%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan",
				coat: "",
				ISO: "UZ",
				capital: "Tashkent",
				coords: {lat: 41.0000, lng: 64.0000}
			},
			Vanuatu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29",
				coat: "",
				ISO: "VU",
				capital: "Port Vila",
				coords: {lat: -16.0000, lng: 167.0000}
			},
			"Vatican City": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Vatican_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City",
				coat: "",
				ISO: "VA",
				capital: "Vatican City (City-State)",
				coords: {lat: 41.9000, lng: 12.4500}
			},
			Venezuela: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Venezuela_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela",
				coat: "",
				ISO: "VE",
				capital: "Caracas",
				coords: {lat: 8.0000, lng: -66.0000}
			},
			Vietnam: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/94/Vietnam_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam",
				coat: "",
				ISO: "VN",
				capital: "Hanoi",
				coords: {lat: 16.0000, lng: 106.0000}
			},
			Wales: {
				map: "http://vignette1.wikia.nocookie.net/future/images/2/25/Wales_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Wales_2",
				coat: "",
				ISO: "",
				capital: "Cardiff",
//				coords: {lat: , lng: }
			},
			"Western Sahara": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Western_Sahara_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic",
				coat: "",
				ISO: "EH",
				capital: "Laayoune",
				coords: {lat: 24.5000, lng: -13.0000}
			},
			Yemen: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Yemen_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen",
				coat: "",
				ISO: "YE",
				capital: "Sanaá",
				coords: {lat: 15.0000, lng: 48.0000}
			},
			Yugoslavia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yugoslavia_location_map",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_SFR_Yugoslavia",
				coat: "",
				ISO: "",
				capital: "Belgrade",
//				coords: {lat: , lng: }
			},
			Zaire: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/39/Republic_of_Zaire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Zaire",
				coat: "",
				ISO: "",
				capital: "Kinshasa",
//				coords: {lat: , lng: }
			},
			Zambia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/26/Zambia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia",
				coat: "",
				ISO: "ZM",
				capital: "Lusaka",
				coords: {lat: -15.0000, lng: 30.0000}
			},
			Zimbabwe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Zimbabwe_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe",
				coat: "",
				ISO: "ZW",
				capital: "Harare",
				coords: {lat: -20.0000, lng: 30.0000}
			}
		};	
		// ^^NEVER AGAIN.
