
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
				capital: "Kabul",
				coords: {lat: 34.533333, lng: 69.166667}
			},
			Africa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/0/0c/African_Union_flag",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4a/RECs_of_the_AEC",
				capital: "N/A (Continent)",
				coords: {lat: 41, lng: 20}
			},
			Albania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Albania_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Coat_of_arms_of_Albania",
				capital: "Tirana",
				coords: {lat: 41.3300000, lng: 19.8200000}
			},
			Algeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Algeria_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria",
				coat: "https://upload.wikimedia.org/wikipedia/commons/7/77/Seal_of_Algeria",
				capital: "Algiers",
				coords: {lat: 28, lng: 2}
			},
			Andorra: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/83/Andorra_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Andorra%281934%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_Andorra",
				capital: "Andorra la Vella",
				coords: {lat: 42.5, lng: 1.5}
			},
			Angola: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/Angola_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/03/Coat_of_arms_of_Angola",
				capital: "Luanda",
				coords: {lat: -12.5, lng: 18.5}
			},
			Antarctica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Antarctica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_the_Antarctic_Treaty",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Emblem_of_the_Antarctic_Treaty",
				capital: "N/A (Territorial Region)",
				coords: {lat: -90, lng: 0}
			},
			"Antigua & Barbuda": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/ATG_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/30/Coat_of_arms_of_Antigua_and_Barbuda",
				capital: "St. John's",
				coords: {lat: 17.05, lng: -61.8}
			},
			"Arctic Circle": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/92/Arctic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Worldmap_northern",
				coat: "",
				capital: "N/A (Continent)",
				coords: {lat: 90, lng: 0}
			},
			Argentina: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Argentina_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Coat_of_arms_of_Argentina",
				capital: "Buenos Aires",
				coords: {lat: -34, lng: -64}
			},
			Armenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Armenia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Coat_of_arms_of_Armenia",
				capital: "Yerevan",
				coords: {lat: 40, lng: 45}
			},
			Asia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Asia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/8/87/Flag_of_ASEAN",
				coat: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			Australia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Australia_with_AAT_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Coat_of_Arms_of_Australia",
				capital: "Canberra",
				coords: {lat: -27, lng: 133}
			},
			Austria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Austria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Coat_of_arms_of_Austria",
				capital: "Vienna",
				coords: {lat: 47.333333, lng: 13.333333}
			},
			Azerbaijan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Azerbaijan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Emblem_of_Azerbaijan",
				capital: "Baku",
				coords: {lat: 40.3, lng: 47.7}
			},
			Bahamas: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/de/The_Bahamas_on_the_globe_%28Americas_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coat_of_arms_of_the_Bahamas",
				capital: "Nassau",
				coords: {lat: 24.25, lng: -76}
			},
			Bahrain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Bahrain_on_the_globe_%28Afro-Eurasia_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain",
				coat: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Emblem_of_Bahrain",
				capital: "Al-Manámah",
				coords: {lat: 26.0275, lng: 50.55}
			},
			Bangladesh: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bangladesh_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/81/National_emblem_of_Bangladesh",
				capital: "Dhaka",
				coords: {lat: 23.8, lng: 90.3}
			},
			Barbados: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/BRB_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Barbados_Coat_of_Arms",
				capital: "Bridgetown",
				coords: {lat: 13.166667, lng: -59.55}
			},
			Belarus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/68/Belarus_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Official_coat_of_arms_of_the_Republic_of_Belarus_%28v%29",
				capital: "Mensk (Minsk)",
				coords: {lat: 53, lng: 23}
			},
			Belgium: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Belgium_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Government_Ensign_of_Belgium",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Great_coat_of_arms_of_Belgium",
				capital: "Brussels",
				coords: {lat: 50.833333, lng: 4}
			},
			Belize: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/BLZ_orthographic", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Coat_of_arms_of_Belize",
				capital: "Belmopan",
				coords: {lat: 17.066667, lng: -88.7}
			},
			Benin: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Benin_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin",
				coat: "https://upload.wikimedia.org/wikipedia/commons/1/13/Coat_of_arms_of_Benin",
				capital: "Porto-Novo",
				coords: {lat: 6.466667, lng: 2.6}
			},
			Bermuda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ab/United_Kingdom_on_the_globe_%28Bermuda_special%29_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda",
				coat: "https://upload.wikimedia.org/wikipedia/commons/5/58/Coat_of_arms_of_Bermuda",
				capital: "Hamilton (British Overseas Territory)",
				coords: {lat: 32.333333, lng: -64.75}
			},
			Bhutan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bhutan_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan",
				coat: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Emblem_of_Bhutan",
				capital: "Thimphu",
				coords: {lat: 27.417, lng: 90.435}
			},
			Bolivia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Bolivia_%28orthographic_projection%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/0/06/Coat_of_arms_of_Bolivia",
				capital: "Sucre",
				coords: {lat: -16.712, lng: -64.666}
			},
			"Bosnia & Herzegovina": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Bosnia_and_Herzegovina_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Coat_of_arms_of_Bosnia_and_Herzegovina",
				capital: "Sarajevo",
				coords: {lat: 44, lng: 18}
			},
			Botswana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Botswana_on_the_globe_%28Africa_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana",
				coat: "https://upload.wikimedia.org/wikipedia/commons/d/de/Coat_of_arms_of_Botswana",
				capital: "Gaborone",
				coords: {lat: -24.658333, lng: 25.908333}
			},
			Brazil: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/90/Brazil_on_the_globe_%28South_America_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil",
				coat: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Coat_of_arms_of_Brazil",
				capital: "Brasília",
				coords: {lat: -10, lng: -52}
			},
			Brunei: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Brunei_on_the_globe_%28Brunei_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei",
				coat: "",
				capital: "Bandar Seri Begawan",
//				coords: {lat: , lng: }
			},
			Bulgaria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bulgaria_on_the_globe_%28Europe_centered%29", 
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria",
				coat: "",
				capital: "Sofia",
//				coords: {lat: , lng: }
			},
			"Burkina Faso": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Burkina_Faso_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso",
				coat: "",
				capital: "Ouagadougou",
//				coords: {lat: , lng: }
			},
			Burundi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/27/Burundi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi",
				coat: "",
				capital: "Bujumbura",
//				coords: {lat: , lng: }
			},
			Cambodia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Cambodia_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia",
				coat: "",
				capital: "Phnom Penh",
//				coords: {lat: , lng: }
			},
			Cameroon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cameroon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon",
				coat: "",
				capital: "Yaoundé",
//				coords: {lat: , lng: }
			},
			Canada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Canada_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada",
				coat: "",
				capital: "Ottawa",
//				coords: {lat: , lng: }
			},
			"Cape Verde": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/CPV_orthographic_NaturalEarth",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde",
				coat: "",
				capital: "Praia",
//				coords: {lat: , lng: }
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
				capital: "Bangui",
//				coords: {lat: , lng: }
			},
			Chad: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/46/Chad_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad",
				coat: "",
				capital: "N'Djamena",
//				coords: {lat: , lng: }
			},
			Chile: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Chile_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile",
				coat: "",
				capital: "Santiago",
//				coords: {lat: , lng: }
			},
			China: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/People%27s_Republic_of_China_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China",
				coat: "",
				capital: "Beijing",
//				coords: {lat: , lng: }
			},
			Colombia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia",
				coat: "",
				capital: "Santafé de Bogotá",
//				coords: {lat: , lng: }
			},
			Comoros: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Comoros_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros",
				coat: "",
				capital: "Moroni (on Grande Comoro)",
//				coords: {lat: , lng: }
			},
			"Congo, Democratic Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Democratic_Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo",
				coat: "",
				capital: "Kinshasa",
//				coords: {lat: , lng: }
			},
			"Congo, Republic of The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Republic_of_the_Congo_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo",
				coat: "",
				capital: "Brazzaville",
//				coords: {lat: , lng: }
			},
			"Costa Rica": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Costa_Rica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29",
				coat: "",
				capital: "San José",
//				coords: {lat: , lng: }
			},
			"Côte d’Ivoire": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9b/C%C3%B4te_d%27Ivoire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire",
				coat: "",
				capital: "Yamoussoukro",
//				coords: {lat: , lng: }
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
				capital: "Zagreb",
//				coords: {lat: , lng: }
			},
			Cuba: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/01/Cuba_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba",
				coat: "",
				capital: "Havana",
//				coords: {lat: , lng: }
			},
			Cyprus: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4f/EU-Cyprus",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus",
				coat: "",
				capital: "Lefkosia (Nicosia)",
//				coords: {lat: , lng: }
			},
			"Czech Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Czech_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic",
				coat: "",
				capital: "Prague",
//				coords: {lat: , lng: }
			},
			Denmark: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Denmark_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark",
				coat: "",
				capital: "Copenhagen",
//				coords: {lat: , lng: }
			},
			Djibouti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Djibouti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti",
				coat: "",
				capital: "Djibouti (City)",
//				coords: {lat: , lng: }
			},
			Dominica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dominica_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica",
				coat: "",
				capital: "Roseau",
//				coords: {lat: , lng: }
			},
			"Dominican Republic": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Dominican_Republic_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic",
				coat: "",
				capital: "Santo Domingo",
//				coords: {lat: , lng: }
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
				coat: "",
				capital: "Dili",
//				coords: {lat: , lng: }
			},
			Ecuador: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ecuador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador",
				coat: "",
				capital: "Quito",
//				coords: {lat: , lng: }
			},
			Egypt: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/EGY_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt",
				coat: "",
				capital: "Cairo",
//				coords: {lat: , lng: }
			},
			"El Salvador": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e3/El_Salvador_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador",
				coat: "",
				capital: "San Salvador",
//				coords: {lat: , lng: }
			},
			"Equatorial Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Location_Equatorial_Guinea_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea",
				coat: "",
				capital: "Malabo",
//				coords: {lat: , lng: }
			},
			Eritrea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/43/Eritrea_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea",
				coat: "",
				capital: "Asmara",
//				coords: {lat: , lng: }
			},
			Estonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Estonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Estonia_%28bordered%29",
				coat: "",
				capital: "Tallinn",
//				coords: {lat: , lng: }
			},
			Ethiopia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ethiopia_%28Africa_orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia",
				coat: "",
				capital: "Addis Ababa",
//				coords: {lat: , lng: }
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
				capital: "Stanley (British Overseas Territory)",
//				coords: {lat: , lng: }
			},
			"Faroe Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Kingdom_of_Denmark_on_the_globe_%28Faroer_special%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands",
				coat: "",
				capital: "Tórshavn (Danish Overseas Territory)",
//				coords: {lat: , lng: }
			},
			Fiji: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fiji_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji",
				coat: "",
				capital: "Suva (on Viti Levu)",
//				coords: {lat: , lng: }
			},
			Finland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Finland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland",
				coat: "",
				capital: "Helsinki",
//				coords: {lat: , lng: }
			},
			France: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/France_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France",
				coat: "",
				capital: "Paris",
//				coords: {lat: , lng: }
			},
			"French Guiana": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/89/French_Guiana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana",
				capital: "Cayenne (French Prefecture)",
				coords: {lat: 4.9372, lng: -52.326}
			},
			"French Polynesia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/ba/French_Polynesia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia",
				capital: "",
//				coords: {lat: , lng: }
			},
			Gabon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Gabon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Gabon_%283-2%29",
				capital: "Libreville",
//				coords: {lat: , lng: }
			},
			"Gambia, The": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/16/Gambia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia",
				capital: "Banjul",
//				coords: {lat: , lng: }
			},
			"Gaza Strip": {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine",
				capital: "Gaza City (Claimed Territory)",
//				coords: {lat: , lng: }
			},
			Georgia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/67/Georgia_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia",
				capital: "Tbilisi",
//				coords: {lat: , lng: }
			},
			Germany: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/Germany_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany",
				capital: "Berlin",
//				coords: {lat: , lng: }
			},
			Ghana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Ghana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana",
				coat: "",
				capital: "Accra",
//				coords: {lat: , lng: }
			},
			Greece: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/21/EU-Greece",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece",
				coat: "",
				capital: "Athens",
//				coords: {lat: , lng: }
			},
			Greenland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Greenland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland",
				capital: "",
//				coords: {lat: , lng: }
			},
			Grenada: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/53/Grenada_in_its_region",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada",
				coat: "",
				capital: "St. George's",
//				coords: {lat: , lng: }
			},
			Guadeloupe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/60/France_on_the_globe_%28Guadeloupe_special%29_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Guadeloupe_%28local%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Coat_of_arms_of_Guadeloupe",
				capital: "Basse-Terre (French Prefecture)",
				coords: {lat: 15.9958, lng: -61.7292}, 
			},
			Guatemala: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/Guatemala_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala",
				capital: "Guatemala City",
//				coords: {lat: , lng: }
			},
			Guinea: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea",
				capital: "Conakry",
//				coords: {lat: , lng: }
			},
			"Guinea-Bissau": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Guinea-Bissau_on_the_globe_%28Cape_Verde_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau",
				capital: "Bissau",
//				coords: {lat: , lng: }
			},
			Guyana: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/20/Guyana_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana",
				capital: "Georgetown",
//				coords: {lat: , lng: }
			},
			Haiti: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Haiti_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti",
				capital: "Port-au-Prince",
//				coords: {lat: , lng: }
			},
			Honduras: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Honduras_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras",
				capital: "Tegucigalpa",
//				coords: {lat: , lng: }
			},
			"Hong Kong": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Hong_Kong_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong",
				capital: "N/A (Non-Sovereign Entity)",
//				coords: {lat: , lng: }
			},
			Hungary: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/60/EU-Hungary",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary",
				capital: "Budapest",
//				coords: {lat: , lng: }
			},
			Iceland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Iceland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland",
				coat: "",
				capital: "Reykjavik",
//				coords: {lat: , lng: }
			},
			India: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bb/India_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India",
				capital: "New Delhi",
//				coords: {lat: , lng: }
			},
			Indonesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/05/Indonesia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia",
				capital: "Jakarta",
//				coords: {lat: , lng: }
			},
			Iran: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Iran_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran",
				capital: "Tehran",
//				coords: {lat: , lng: }
			},
			Iraq: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Iraq_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq",
				capital: "Baghdad",
//				coords: {lat: , lng: }
			},
			"Ireland, Northern": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Northern_Ireland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/St_Patrick%27s_saltire",
				capital: "Belfast",
//				coords: {lat: , lng: }
			},
			"Ireland, Republic of": {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2a/EU-Ireland",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland",
				capital: "Dublin",
//				coords: {lat: , lng: }
			},
			"Isle of Man": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Isle_of_Man_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_the_Isle_of_Mann",
				coat: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Coat_of_arms_of_the_Isle_of_Man",
				capital: "Douglas (Doolish)",
				coords: {lat: 54.145, lng: -4.482}, 
			},
			Israel: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/42/Israel_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel",
				coat: "",
				capital: "Jerusalem",
//				coords: {lat: , lng: }
			},
			Italy: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Italy_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy",
				capital: "Rome",
//				coords: {lat: , lng: }
			},
			Jamaica: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Jamaica_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica",
				capital: "Kingston",
//				coords: {lat: , lng: }
			},
			"Jan Mayen": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/75/Jan_Mayen_in_Norway",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				capital: "N/A (Norwegian Territory)",
//				coords: {lat: , lng: }
			},
			Japan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Japan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan",
				capital: "Tokyo",
//				coords: {lat: , lng: }
			},
			Jordan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Jordan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan",
				capital: "Amman",
//				coords: {lat: , lng: }
			},
			Kazakhstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kazakhstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan",
				capital: "Astana",
//				coords: {lat: , lng: }
			},
			Kenya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kenya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya",
				capital: "Nairobi",
//				coords: {lat: , lng: }
			},
			Kiribati: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Kiribati_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati",
				capital: "Tarawa",
//				coords: {lat: , lng: }
			},
			"Korea, North": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7b/North_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea",
				capital: "Pyongyang",
//				coords: {lat: , lng: }
			},
			"Korea, South": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/95/South_Korea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea",
				capital: "Seoul",
//				coords: {lat: , lng: }
			},
			Kosovo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Europe-Republic_of_Kosovo",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo",
				capital: "Pristina",
//				coords: {lat: , lng: }
			},
			Kuwait: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kuwait_on_the_globe_%28Afro-Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait",
				capital: "Kuwait",
//				coords: {lat: , lng: }
			},
			Kyrgyzstan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kyrgyzstan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan",
				capital: "Bishkek (fmy. Frunze)",
//				coords: {lat: , lng: }
			},
			Laos: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Laos_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos",
				capital: "Vientiane",
//				coords: {lat: , lng: }
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
				capital: "Riga",
//				coords: {lat: , lng: }
			},
			Lebanon: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Lebanon_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon",
				capital: "Beirut",
//				coords: {lat: , lng: }
			},
			Lesotho: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Lesotho_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho",
				capital: "Maseru",
//				coords: {lat: , lng: }
			},
			Liberia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/91/Liberia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia",
				capital: "Monrovio",
//				coords: {lat: , lng: }
			},
			Libya: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/07/Libya_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya",
				capital: "Tripoli",
//				coords: {lat: , lng: }
			},
			Liechtenstein: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Liechtenstein_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Liechtenstein_%28state%29",
				capital: "Vaduz",
//				coords: {lat: , lng: }
			},
			Lithuania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ec/EU-Lithuania",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania",
				capital: "Vilnius",
//				coords: {lat: , lng: }
			},
			Luxembourg: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c3/EU-Luxembourg",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg",
				capital: "Luxembourg",
//				coords: {lat: , lng: }
			},
			Macau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/98/Macau_on_the_globe_%28Japan_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau",
				capital: "N/A (Non-Sovereign Entity)",
//				coords: {lat: , lng: }
			},
			Macedonia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/62/Macedonia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia",
				capital: "Skopje",
//				coords: {lat: , lng: }
			},
			Madagascar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/99/Madagascar_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar",
				capital: "Antananarivo",
//				coords: {lat: , lng: }
			},
			Malawi: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Malawi_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi",
				capital: "Lilongwe",
//				coords: {lat: , lng: }
			},
			Malaysia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/23/Malaysia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia",
				capital: "Kuala Lumpur",
//				coords: {lat: , lng: }
			},
			Maldives: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Maldives_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives",
				capital: "Malé",
//				coords: {lat: , lng: }
			},
			Mali: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Mali_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali",
				capital: "Bamako",
//				coords: {lat: , lng: }
			},
			Malta: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/EU-Malta",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta",
				capital: "Valletta",
//				coords: {lat: , lng: }
			},
			"Marshall Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/18/Marshall_Islands_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands",
				capital: "Majuro",
//				coords: {lat: , lng: }
			},
			Martinique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/29/Martinique_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Martinique",
				capital: "Fort-de-France (French Prefecture)",
//				coords: {lat: , lng: }
			},
			Mauritania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mauritania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania",
				coat: "",
				capital: "Nouakchott",
//				coords: {lat: , lng: }
			},
			Mauritius: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mauritius_%28orthographic_projection_with_inset%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius",
				coat: "",
				capital: "Port Louis",
//				coords: {lat: , lng: }
			},
			Mexico: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/MEX_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico",
				coat: "",
				capital: "Mexico City",
//				coords: {lat: , lng: }
			},
			Micronesia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Micronesia_in_Oceania_%28-mini_map_-rivers%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia",
				coat: "",
				capital: "Palikir",
//				coords: {lat: , lng: }
			},
			"Middle East": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Middle_East_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League",
				coat: "N/A (Territorial Group)",
				capital: "N/A (Territorial Group)",
//				coords: {lat: , lng: }
			},
			Moldova: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Moldova_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova",
				coat: "",
				capital: "Chisinau",
//				coords: {lat: , lng: }
			},
			Monaco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Monaco_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Monaco_%28state%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Coat_of_arms_of_Monaco",
				capital: "Monaco (City-State)",
				coords: {lat: 43.733333, lng: 7.416667}
			},
			Mongolia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mongolia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia",
				coat: "",
				capital: "Ulaan Baatar",
//				coords: {lat: , lng: }
			},
			Montenegro: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Montenegro_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro",
				coat: "",
				capital: "Podgorica",
//				coords: {lat: , lng: }
			},
			Morocco: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/78/Morocco_%28orthographic_projection%2C_WS_claimed%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco",
				coat: "",
				capital: "Rabat",
//				coords: {lat: , lng: }
			},
			Mozambique: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozambique_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique",
				coat: "",
				capital: "Maputo",
//				coords: {lat: , lng: }
			},
			Myanmar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Myanmar_on_the_globe_%28Myanmar_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar",
				coat: "",
				capital: "Rangoon (fmy. Yangon)",
//				coords: {lat: , lng: }
			},
			Namibia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Namibia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia",
				coat: "",
				capital: "Windhoek",
//				coords: {lat: , lng: }
			},
			Nauru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/25/Nauru_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Nauru_%283-2%29",
				coat: "",
				capital: "Yaren",
//				coords: {lat: , lng: }
			},
			Nepal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nepal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal",
				coat: "",
				capital: "Kathmandu",
//				coords: {lat: , lng: }
			},
			Netherlands: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/41/Kingdom_of_the_Netherlands_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands",
				coat: "",
				capital: "Amsterdam",
//				coords: {lat: , lng: }
			},
			"New Caledonia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0e/New_Caledonia_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pro-Independence_Flag_of_New_Caledonia",
				coat: "",
				capital: "Nouméa (Special Collectivity of France)",
//				coords: {lat: , lng: }
			},
			"New Zealand": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c0/New_Zealand_%28orthographic_projection%29_2",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand",
				coat: "",
				capital: "Wellington",
//				coords: {lat: , lng: }
			},
			Nicaragua: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Nicaragua_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua",
				coat: "",
				capital: "Managua",
//				coords: {lat: , lng: }
			},
			Niger: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/88/Niger_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger",
				coat: "",
				capital: "Niamey",
//				coords: {lat: , lng: }
			},
			Nigeria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Nigeria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria",
				coat: "",
				capital: "Abuja",
//				coords: {lat: , lng: }
			},
			"North America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1a/North_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_the_North_American_Free_Trade_Agreement_%28standard_version%29",
				coat: "",
				capital: "N/A (Continent)",
				coords: {lat: 48.166667, lng: -100.166667}
			},
			"Northern Mariana Islands": {
				map: "Northern_Mariana_Islands_on_the_globe_(Southeast_Asia_centered)_(small_islands_magnified)",
				flag: "Flag_of_the_Northern_Mariana_Islands",
				coat: "",
				capital: "Capitol Hill (Saipan) ",
//				coords: {lat: , lng: }
			},
			Norway: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/28/Norway_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway",
				coat: "",
				capital: "Oslo",
//				coords: {lat: , lng: }
			},
			Oceania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Oceania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Oceania_%28Proposal%29",
				coat: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			Oman: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Oman_%28better%29_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman",
				coat: "",
				capital: "Muscat",
//				coords: {lat: , lng: }
			},
			Pakistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pakistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan",
				coat: "",
				capital: "Islamabad",
//				coords: {lat: , lng: }
			},
			Palau: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Palau_on_the_globe_%28small_islands_magnified%29_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau",
				coat: "",
				capital: "Melekeok",
//				coords: {lat: , lng: }
			},
			Palestine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/ad/State_of_Palestine_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Palestine_%28State%29",
				coat: "",
				capital: "East Jerusalem (Proclaimed)",
//				coords: {lat: , lng: }
			},
			Panama: {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Panama_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama",
				coat: "",
				capital: "Panama City",
//				coords: {lat: , lng: }
			},
			"Papua New Guinea": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/79/Papua_New_Guinea_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea",
				coat: "",
				capital: "Port Moresby",
//				coords: {lat: , lng: }
			},
			Paraguay: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/80/Paraguay_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay",
				capital: "Asunción",
//				coords: {lat: , lng: }
			},
			Peru: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Peru_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Peru_%28state%29",
				capital: "Lima",
//				coords: {lat: , lng: }
			},
			Philippines: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Philippines_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines",
				capital: "Manila",
//				coords: {lat: , lng: }
			},
			Poland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Poland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland",
				capital: "Warsaw",
//				coords: {lat: , lng: }
			},
			Portugal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Portugal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal",
				coat: "",
				capital: "Lisbon",
//				coords: {lat: , lng: }
			},
			"Puerto Rico": {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Puerto_Rico_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/36/Coat_of_arms_of_the_Commonwealth_of_Puerto_Rico",
				capital: "San Juan (US Territory)",
				coords: {lat: 18.406389, lng: -66.063889}, 
			},
			Qatar: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d4/QAT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar",
				coat: "",
				capital: "Doha",
//				coords: {lat: , lng: }
			},
			Réunion: {
				map: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Reunion_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29",
				coat: "https://upload.wikimedia.org/wikipedia/commons/3/39/Armoiries_R%C3%A9union",
				capital: "Saint-Denis (French Prefecture)",
				coords: {lat: -20.8789, lng: 55.4481}, 
			},
			Romania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Romania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania",
				coat: "",
				capital: "Bucharest",
//				coords: {lat: , lng: }
			},
			Russia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/65/Russian_Federation_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia",
				coat: "",
				capital: "Moscow",
//				coords: {lat: , lng: }
			},
			Rwanda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/06/Rwanda_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda",
				coat: "",
				capital: "Kigali",
//				coords: {lat: , lng: }
			},
			"St. Kitts & Nevis": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/5d/KNA_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis",
				coat: "",
				capital: "Basseterre (on St. Kitts)",
//				coords: {lat: , lng: }
			},
			"St. Lucia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/97/Saint_Lucia_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia",
				coat: "",
				capital: "Castries",
//				coords: {lat: , lng: }
			},
			"St. Vincent & The Grenadines": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/VCT_orthographic",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines",
				coat: "",
				capital: "Kingstown",
//				coords: {lat: , lng: }
			},
			Samoa: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/74/Samoa_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa",
				coat: "",
				capital: "Apia",
//				coords: {lat: , lng: }
			},
			"San Marino": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/San_Marino_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino",
				coat: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_San_Marino",
				capital: "San Marino (City-State)",
				coords: {lat: 43.941667, lng: 12.458333}
			},
			"São Tomé & Príncipe": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Location_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_AU_Africa",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe",
				coat: "",
				capital: "São Tomé",
//				coords: {lat: , lng: }
			},
			"Saudi Arabia": {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Saudi_Arabia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia",
				coat: "",
				capital: "Riyadh",
//				coords: {lat: , lng: }
			},
			Scotland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/82/Scotland_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland",
				coat: "",
				capital: "Edinburgh",
//				coords: {lat: , lng: }
			},
			Senegal: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Senegal_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal",
				coat: "",
				capital: "Dakar",
//				coords: {lat: , lng: }
			},
			Serbia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/54/Serbia_on_the_globe_%28claimed%29_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia",
				coat: "",
				capital: "Belgrade",
//				coords: {lat: , lng: }
			},
			Seychelles: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/47/Seychelles_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles",
				coat: "",
				capital: "Victoria",
//				coords: {lat: , lng: }
			},
			"Sierra Leone": {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/38/Sierra_Leone_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone",
				coat: "",
				capital: "Freetown",
//				coords: {lat: , lng: }
			},
			Singapore: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/35/Singapore_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore",
				coat: "",
				capital: "Singapore (City)",
//				coords: {lat: , lng: }			
			},
			Slovakia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Slovakia_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia",
				coat: "",
				capital: "Bratislava",
//				coords: {lat: , lng: }
			},
			Slovenia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Slovenia_%28orthographic_projection%29_gray_and_green_scheme_globe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia",
				coat: "",
				capital: "Ljubljana",
//				coords: {lat: , lng: }
			},
			"Solomon Islands": {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Solomon_Islands_on_the_globe_%28Oceania_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands",
				coat: "",
				capital: "Honiara (on Guadalcanal)",
//				coords: {lat: , lng: }
			},
			Somalia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Somalia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia",
				coat: "",
				capital: "Mogadishu",
//				coords: {lat: , lng: }
			},
			"South Africa": {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6e/South_Africa_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa",
				coat: "",
				capital: "Pretoria",
//				coords: {lat: , lng: }
			},
			"South America": {
				map: "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_South_America_%28proposal%29",
				coat: "",
				capital: "N/A (Continent)",
//				coords: {lat: , lng: }
			},
			"South Sudan": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/South_Sudan_hd_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan",
				coat: "",
				capital: "Juba",
//				coords: {lat: , lng: }
			},
			Spain: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/49/Spain_WS-included_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain",
				coat: "",
				capital: "Madrid",
//				coords: {lat: , lng: }
			},
			"Sri Lanka": {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sri_Lanka_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka",
				coat: "",
				capital: "Colombo",
//				coords: {lat: , lng: }
			},
			Sudan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sudan_%28orthographic_projection%29_highlighted",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan",
				coat: "",
				capital: "Khartoum",
//				coords: {lat: , lng: }
			},
			Suriname: {
				map: "https://upload.wikimedia.org/wikipedia/commons/8/87/Suriname_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname",
				coat: "",
				capital: "Paramaribo",
//				coords: {lat: , lng: }
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
				capital: "Mbabane",
//				coords: {lat: , lng: }
			},
			Sweden: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sweden_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden",
				coat: "",
				capital: "Stockholm",
//				coords: {lat: , lng: }
			},
			Switzerland: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/63/Switzerland_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland",
				coat: "",
				capital: "Bern",
//				coords: {lat: , lng: }
			},
			Syria: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/11/Syria_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria",
				coat: "",
				capital: "Damascus",
//				coords: {lat: , lng: }
			},
			Taiwan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Taiwan_%28orthographic_projection%3B_southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China",
				coat: "",
				capital: "Taipei",
//				coords: {lat: , lng: }
			},
			Tajikistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tajikistan_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan",
				coat: "",
				capital: "Dushanbe",
//				coords: {lat: , lng: }
			},
			Tanzania: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tanzania_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania",
				coat: "",
				capital: "Dar es Salaam",
//				coords: {lat: , lng: }
			},
			Thailand: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Thailand_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand",
				coat: "",
				capital: "Bangkok",
//				coords: {lat: , lng: }
			},
			Togo: {
				map: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Togo_on_the_globe_%28Africa_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo",
				coat: "",
				capital: "Lomé",
//				coords: {lat: , lng: }
			},
			Tonga: {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Tonga_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Tonga_%283-2%29",
				coat: "",
				capital: "Nuku'alofa",
//				coords: {lat: , lng: }
			},
			"Trinidad & Tobago": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Trinidad_and_Tobago_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago",
				coat: "",
				capital: "Port-of-Spain",
//				coords: {lat: , lng: }
			},
			Tunisia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tunisia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia",
				coat: "",
				capital: "Tunis",
//				coords: {lat: , lng: }
			},
			Turkey: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Turkey_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey",
				coat: "",
				capital: "Ankara",
//				coords: {lat: , lng: }
			},
			Turkmenistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/59/Turkmenistan_on_the_globe_%28Eurasia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan",
				coat: "",
				capital: "Ashgabat",
//				coords: {lat: , lng: }
			},
			"Turks & Caicos": {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Turks_and_Caicos_Islands_on_the_globe_%28Americas_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands",
				coat: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Coat_of_arms_of_the_Turks_and_Caicos_Islands",
				capital: "Cockburn Town (British Overseas Territory)",
				coords: {lat: 21.75, lng: -71.583333}
			},
			Tuvalu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tuvalu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu",
				coat: "",
				capital: "Funafuti",
//				coords: {lat: , lng: }
			},
			Uganda: {
				map: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Uganda_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda",
				coat: "",
				capital: "Kampala",
//				coords: {lat: , lng: }
			},
			Ukraine: {
				map: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ukraine_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine",
				coat: "",
				capital: "Kyiv (Kiev)",
//				coords: {lat: , lng: }
			},
			"United Arab Emirates": {
				map: "https://upload.wikimedia.org/wikipedia/commons/c/cd/United_Arab_Emirates_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates",
				coat: "",
				capital: "Abu Dhabi",
//				coords: {lat: , lng: }
			},
			"United Kingdom": {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/58/British_Isles_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom",
				capital: "London",
//				coords: {lat: , lng: }
			},
			"United States": {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/70/United_States_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States",
				coat: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29",
				capital: "Washington, D.C. (District of Columbia)",
				coords: {lat: 40, lng: -100}
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
				capital: "Montevideo",
//				coords: {lat: , lng: }
			},
			Uzbekistan: {
				map: "https://upload.wikimedia.org/wikipedia/commons/7/76/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD_%D0%BD%D0%B0_%D0%B3%D0%BB%D0%BE%D0%B1%D1%83%D1%81%D0%B5",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan",
				capital: "Tashkent",
//				coords: {lat: , lng: }
			},
			Vanuatu: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Vanuatu_on_the_globe_%28Polynesia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29",
				capital: "Port Vila",
//				coords: {lat: , lng: }
			},
			"Vatican City": {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Vatican_on_the_globe_%28Europe_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City",
				capital: "Vatican City (City-State)",
//				coords: {lat: , lng: }
			},
			Venezuela: {
				map: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Venezuela_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela",
				capital: "Caracas",
//				coords: {lat: , lng: }
			},
			Vietnam: {
				map: "https://upload.wikimedia.org/wikipedia/commons/9/94/Vietnam_on_the_globe_%28Southeast_Asia_centered%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam",
				capital: "Hanoi",
//				coords: {lat: , lng: }
			},
			Wales: {
				map: "http://vignette1.wikia.nocookie.net/future/images/2/25/Wales_in_the_UK_and_Europe",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Wales_2",
				capital: "Cardiff",
//				coords: {lat: , lng: }
			},
			"Western Sahara": {
				map: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Western_Sahara_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic",
				capital: "Laayoune",
//				coords: {lat: , lng: }
			},
			Yemen: {
				map: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Yemen_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen",
				capital: "Sanaá",
//				coords: {lat: , lng: }
			},
			Yugoslavia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Yugoslavia_location_map",
				flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_SFR_Yugoslavia",
				capital: "Belgrade",
//				coords: {lat: , lng: }
			},
			Zaire: {
				map: "https://upload.wikimedia.org/wikipedia/commons/3/39/Republic_of_Zaire_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Zaire",
				capital: "Kinshasa",
//				coords: {lat: , lng: }
			},
			Zambia: {
				map: "https://upload.wikimedia.org/wikipedia/commons/2/26/Zambia_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia",
				capital: "Lusaka",
//				coords: {lat: , lng: }
			},
			Zimbabwe: {
				map: "https://upload.wikimedia.org/wikipedia/commons/5/50/Zimbabwe_%28orthographic_projection%29",
				flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe",
				capital: "Harare",
//				coords: {lat: , lng: }
			}
		};	
		// ^^NEVER AGAIN.
