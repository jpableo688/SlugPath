//this is an array of nodes objects in json.
//I already loaded it into nodes and saved it as
//js because we would have to do XMLHttpRequest.
//var nodes = [{this is json}].
//everything between the brackets is json.
var nodes = {
    "0501000":{ 
        "id":"0501000",
        "name":"Crown/Merrill Dining Hall",
        "areas":"Crown/Merrill College",
        "lat":37.000132,
        "lng":-122.054404,
        "type":"Dining Hall",
        "to": ["0500001"]
    },
    "0502000":{
        "id":"0502000",
        "name":"Banana Joe's",
        "areas":"Crown/Merrill College",
        "lat":36.999989,
        "lng":-122.054399,
        "type":"Food To Go",
        "to":["0500003"]
    },
    "0503000":{ 
        "id":"0503000",
        "name":"Descartes House",
        "areas":"Crown/Merrill College",
        "lat":36.999252,
        "lng":-122.054616,
        "type":"Residential",
        "to":["0500022"]
    },
    "0504000":{ 
        "id":"0504000",
        "name":"Rutherford House",
        "areas":"Crown/Merrill College",
        "lat":36.99944,
        "lng": -122.05424,
        "type":"Residential",
        "to":["0500026"]
    },
    "0505000":{ 
        "id":"0505000",
        "name":"Galileo House",
        "areas":"Crown/Merrill College",
        "lat":36.99965,
        "lng": -122.054401,
        "type":"Residential",
        "to":["0500028"]
    },
    "0506000":{ 
        "id":"0506000",
        "name":"Gauss House",
        "areas":"Crown/Merrill College",
        "lat":36.99947,
        "lng": -122.054737,
        "type":"Residential",
        "to":["0500032"]
    },
    "0507000":{ 
        "id":"0507000",
        "name":"Harvey House",
        "areas":"Crown/Merrill College",
        "lat":36.999976,
        "lng": -122.055273,
        "type":"Residential",
        "to":["0500053"]
    },
    "0508000":{ 
        "id":"0508000",
        "name":"Maxwell House",
        "areas":"Crown/Merrill College",
        "lat":37.000134,
        "lng": -122.055477,
        "type":"Residential",
        "to":["0500055"]
    },
    "0509000":{ 
        "id":"0509000",
        "name":"Leonardo House",
        "areas":"Crown/Merrill College",
        "lat":37.000387,
        "lng": -122.055305,
        "type":"Residential",
        "to":["0500057"]
    },
    "0510000":{ 
        "id":"0510000",
        "name":"Galen House",
        "areas":"Crown/Merrill College",
        "lat":37.000186,
        "lng":-122.055134,
        "type":"Residential",
        "to":["0500058"]
    },
    "0511000":{
        "id":"0511000",
        "name":"Crown Classrooms",
        "areas":"Crown/Merrill College",
        "lat":37.000044,
        "lng": -122.054839,
        "type":"Classroom",
        "to":["0500063","0500064"]
    },
    "0512000":{
        "id":"0512000",
        "name":"Crown Library",
        "areas":"Crown/Merrill College",
        "lat":36.999774,
        "lng": -122.054892,
        "type":"Academic",
        "to":["0500065"]
    },
    "0513000":{
        "id":"0513000",
        "name":"Crown Computer Lab",
        "areas":"Crown/Merrill College",
        "lat":36.999774,
        "lng": -122.054892,
        "type":"Academic",
        "to":["0500065"]
    },
    "0514000":{
        "id":"0514000",
        "name":"Vallier Hall",
        "areas":"Crown/Merrill College",
        "lat":36.999856,
        "lng": -122.054501,
        "type":"Academic",
        "to":["0500065", "0500004","0500066","0500067","0500068"]
    },
    "0515000":{
        "id":"0515000",
        "name":"Fireside Lounge",
        "areas":"Crown/Merrill College",
        "lat":37.000117,
        "lng": -122.05456,
        "type":"Other",
        "to":["0500074", "0500073"]
    },
    "0516000":{
        "id":"0516000",
        "name":"Crown Mailroom",
        "areas":"Crown/Merrill College",
        "lat":37.000267,
        "lng": -122.054565,
        "type":"Other",
        "to":["0500075"]
    },
    "0517000":{
        "id":"0517000",
        "name":"Crown College Offices",
        "areas":"Crown/Merrill College",
        "lat":37.000267,
        "lng": -122.054763,
        "type":"Other",
        "to":["0500075"]
    },
    "0518000":{
        "id":"0518000",
        "name":"Crown/Merrill Bus Stop",
        "areas":"Crown/Merrill College",
        "lat":36.99899,
        "lng": -122.055262,
        "type":"Bus Stop",
        "to":["0500085","0500086","0500087"]
    },
    "0519000":{
        "id":"0519000",
        "name":"Crown/Merrill Apartment 1",
        "areas":"Crown/Merrill College",
        "lat":37.00192,
        "lng": -122.054731,
        "type":"Residential",
        "to":["0500188"]
    },
    "0520000":{
        "id":"0520000",
        "name":"Crown/Merrill Apartment 2",
        "areas":"Crown/Merrill College",
        "lat":37.001873,
        "lng": -122.054302,
        "type":"Residential",
        "to":["0500186"]
    },
    "0521000":{
        "id":"0521000",
        "name":"Crown/Merrill Apartment 3",
        "areas":"Crown/Merrill College",
        "lat":37.001715,
        "lng": -122.05412,
        "type":"Residential",
        "to":["0500185"]
    },    
    "0522000":{
        "id":"0522000",
        "name":"Crown/Merrill Apartment 4",
        "areas":"Crown/Merrill College",
        "lat":37.001912,
        "lng": -122.053868,
        "type":"Residential",
        "to":["0500183"]
    },
    "0523000":{
        "id":"0523000",
        "name":"Crown/Merrill Apartment 5",
        "areas":"Crown/Merrill College",
        "lat":37.001916,
        "lng": -122.053519,
        "type":"Residential",
        "to":["0500171"]
    },
    "0524000":{
        "id":"0524000",
        "name":"Crown/Merrill Apartment 6",
        "areas":"Crown/Merrill College",
        "lat":37.001548,
        "lng":-122.054238,
        "type":"Residential",
        "to":["0500123"]
    },
    "0525000":{
        "id":"0525000",
        "name":"Crown/Merrill Apartment 7",
        "areas":"Crown/Merrill College",
        "lat":37.001368,
        "lng":-122.053889,
        "type":"Residential",
        "to":["0500129"]
    },
    "0526000":{
        "id":"0526000",
        "name":"Crown/Merrill Apartment 8",
        "areas":"Crown/Merrill College",
        "lat":37.001689,
        "lng":-122.053455,
        "type":"Residential",
        "to":["0500195"]
    },
    "0527000":{
        "id":"0527000",
        "name":"Crown/Merrill Apartment 9",
        "areas":"Crown/Merrill College",
        "lat":37.001586,
        "lng":-122.052661,
        "type":"Residential",
        "to":["0500157"]
    },
    "0528000":{
        "id":"0528000",
        "name":"Crown/Merrill Apartment 10",
        "areas":"Crown/Merrill College",
        "lat":37.001466,
        "lng":-122.05302,
        "type":"Residential",
        "to":["0500158"]
    },
    "0529000":{
        "id":"0529000",
        "name":"Crown/Merrill Apartment 11",
        "areas":"Crown/Merrill College",
        "lat":37.001333,
        "lng":-122.052623,
        "type":"Residential",
        "to":["0500160"]
    },
    "0530000":{
        "id":"0530000",
        "name":"Crown/Merrill Apartment 12",
        "areas":"Crown/Merrill College",
        "lat":37.001766,
        "lng":-122.05243,
        "type":"Residential",
        "to":["0500162"]
    },
    "0531000":{
        "id":"0531000",
        "name":"Crown/Merrill Apartment 13",
        "areas":"Crown/Merrill College",
        "lat":37.001783,
        "lng":-122.052859,
        "type":"Residential",
        "to":["0500164"]
    },
    "0532000":{
        "id":"0532000",
        "name":"Crown/Merrill Apartment 14",
        "areas":"Crown/Merrill College",
        "lat":37.00201,
        "lng":-122.052779,
        "type":"Residential",
        "to":["0500179"]
    },
    "0533000":{
        "id":"0533000",
        "name":"Crown/Merrill Community Room",
        "areas":"Crown/Merrill College",
        "lat":37.001629,
        "lng":-122.053943,
        "type":"Residential",
        "to":["0500170"]
    },
    "0534000":{
        "id":"0534000",
        "name":"Crown/Merrill Apartment Laundry Room",
        "areas":"Crown/Merrill College",
        "lat":37.001608,
        "lng":-122.05376,
        "type":"Other",
        "to":["0500170"]
    },
    "0535000":{
        "id":"0535000",
        "name":"Crown/Merrill Apartment Laundry Room",
        "areas":"Crown/Merrill College",
        "lat":37.001608,
        "lng":-122.05376,
        "type":"Residential",
        "to":["0500170"]
    },
    "0536000":{
        "id":"0536000",
        "name":"Merrill Classrooms",
        "areas":"Crown/Merrill College",
        "lat":36.999693,
        "lng":-122.053632,
        "type":"Academic",
        "to":["0500013","0500201","0500200","0500196"]
    },
    "0537000":{
        "id":"0537000",
        "name":"Merrill Cultural Center",
        "areas":"Crown/Merrill College",
        "lat":37.000035,
        "lng":-122.053868,
        "type":"Other",
        "to":["0500209"]
    },
    "0538000":{
        "id":"0538000",
        "name":"Baobab Lounge",
        "areas":"Crown/Merrill College",
        "lat":37.000157,
        "lng":-122.053632,
        "type":"Academic",
        "to":["0500216"]
    },
    "0539000":{
        "id":"0539000",
        "name":"Vivas",
        "areas":"Crown/Merrill College",
        "lat":37.000172,
        "lng":-122.053396,
        "type":"Dine",
        "to":["0500218"]
    },
    "0540000":{
        "id":"0540000",
        "name":"Merrill College Offices",
        "areas":"Crown/Merrill College",
        "lat":36.999622,
        "lng":-122.053117,
        "type":"Academic",
        "to":["0500227"]
    },
    "0541000":{
        "id":"0541000",
        "name":"Merrill Mailroom",
        "areas":"Crown/Merrill College",
        "lat":36.999785,
        "lng":-122.053042,
        "type":"Residential",
        "to":["0500227"]
    },
    "0542000":{
        "id":"0542000",
        "name":"A-Building (Lorde-Studds)",
        "areas":"Crown/Merrill College",
        "lat":37.00042,
        "lng":-122.0536,
        "type":"Residential",
        "to":["0500221","0542000"]
    },
    "0543000":{
        "id":"0543000",
        "name":"A-Building (Kochiyama)",
        "areas":"Crown/Merrill College",
        "lat":37.000368,
        "lng":-122.05331,
        "type":"Residential",
        "to":["0500221", "0500220"]
    },
    "0544000":{
        "id":"0544000",
        "name":"A-Building (Buloson)",
        "areas":"Crown/Merrill College",
        "lat":37.000287,
        "lng": -122.05301,
        "type":"Residential",
        "to":["0500220"]
    },
    "0545000":{
        "id":"0545000",
        "name":"B-Building (Ghandi-Kahlo)",
        "areas":"Crown/Merrill College",
        "lat":37.000012,
        "lng":-122.052763,
        "type":"Residential",
        "to":["0500236"]
    },
    "0546000":{
        "id":"0546000",
        "name":"C-Building (Chavez-Mencho)",
        "areas":"Crown/Merrill College",
        "lat":37.00003,
        "lng":-122.052329,
        "type":"Residential",
        "to":["0500262"]
    },
    "0547000":{
        "id":"0547000",
        "name":"D-Building (Dubois)",
        "areas":"Crown/Merrill College",
        "lat":36.99994,
        "lng":-122.052072,
        "type":"Residential",
        "to":["0500262"]
    },
    "0548000":{
        "id":"0548000",
        "name":"Ming Ong Computer Lab",
        "areas":"Crown/Merrill College",
        "lat":36.999708,
        "lng":-122.052291,
        "type":"Academic",
        "to":["0500261"]
    },
    "0549000":{
        "id":"0549000",
        "name":"Charles Merrill Lounge",
        "areas":"Crown/Merrill College",
        "lat":36.99942,
        "lng":-122.053723,
        "type":"Academic",
        "to":["0500207"]
    },
    "0550000":{
        "id":"0550000",
        "name":"Merill Library",
        "areas":"Crown/Merrill College",
        "lat":36.999365,
        "lng":-122.053326,
        "type":"Academic",
        "to":["0500246"]
    },
    "0500001":{             //DH entrance
        "id":"0500001",
        "name":null,
        "areas":null,
        "lat":37.000061,
        "lng":-122.054549,
        "type":null,
        "to":["0501000", "0500002"]
    },
    "0500002":{
        "id":"0500002",
        "name":null,
        "areas":null,
        "lat":36.999989,
        "lng":-122.054554,
        "type":null,
        "to":["0500001", "0500003", "0500004","0500071"]
    },
    "0500003":{             //BJ entrance
        "id":"0500003",
        "name":null,
        "areas":null,
        "lat":36.999989,
        "lng":-122.054501,
        "type":null,
        "to":["0500002", "0500004", "0502000"]
    },
    "0500004":{
        "id":"0500004",
        "name":null,
        "areas":null,
        "lat":36.999933,
        "lng":-122.054501,
        "type":null,
        "to":["0500002","0500003","0500005","0514000","0500071"]
    },
    "0500005":{
        "id":"0500005",
        "name":null,
        "areas":null,
        "lat":36.999933,
        "lng":-122.054377,
        "type":null,
        "to":["0500004", "0500006"]
    },
    "0500006":{
        "id":"0500006",
        "name":null,
        "areas":null,
        "lat":36.999921,
        "lng":-122.054184,
        "type":null,
        "to":["0500005", "0500007"]
    },
    "0500007":{             //crossroad1
        "id":"0500007",
        "name":null,
        "areas":null,
        "lat":36.999869,
        "lng":-122.054066,
        "type":null,
        "to":["0500006", "0500008", "0500009"]
    },
    "0500008":{
        "id":"0500008",
        "name":null,
        "areas":null,
        "lat":36.999843,
        "lng":-122.05397,
        "type":null,
        "to":["0500007", "0500010"]
    },
    "0500009":{
        "id":"0500009",
        "name":null,
        "areas":null,
        "lat":36.999892,
        "lng": -122.053975,
        "type":null,
        "to":["0500007", "0500011"]
    },
    "0500010":{             //crossroad2
        "id":"0500010",
        "name":null,
        "areas":null,
        "lat":36.999779,
        "lng": -122.053841,
        "type":null,
        "to":["0500008", "0500012", "0500013","0500199"]
    },
    "0500011":{
        "id":"0500011",
        "name":null,
        "areas":null,
        "lat":36.999892,
        "lng": -122.053831,
        "type":null,
        "to":["0500009","0500197"]
    },
    "0500012":{
        "id":"0500012",
        "name":null,
        "areas":null,
        "lat":36.99971,
        "lng": -122.053825,
        "type":null,
        "to":["0500010", "0500013","0500014"]
    },
    "0500013":{
        "id":"0500013",
        "name":null,
        "areas":null,
        "lat":36.999714,
        "lng": -122.053755,
        "type":null,
        "to":["0500010", "0500012", "0500014","0536000"]
    },
    "0500014":{
        "id":"0500014",
        "name":null,
        "areas":null,
        "lat":36.999659,
        "lng": -122.053814,
        "type":null,
        "to":["0500013", "0500012", "0500015"]
    },
    "0500015":{
        "id":"0500015",
        "name":null,
        "areas":null,
        "lat":36.999577,
        "lng": -122.053825,
        "type":null,
        "to":["0500014", "0500016","0500208"]
    },
    "0500016":{
        "id":"0500016",
        "name":null,
        "areas":null,
        "lat":36.999487,
        "lng": -122.053948,
        "type":null,
        "to":["0500015", "0500017","0500039","0500046"]
    },
    "0500017":{
        "id":"0500017",
        "name":null,
        "areas":null,
        "lat":36.999282,
        "lng": -122.054061,
        "type":null,
        "to":["0500016", "0500018","0500040"]
    },
    "0500018":{
        "id":"0500018",
        "name":null,
        "areas":null,
        "lat":36.999282,
        "lng": -122.054133,
        "type":null,
        "to":["0500017", "0500019","0500040"]
    },
    "0500019":{
        "id":"0500019",
        "name":null,
        "areas":null,
        "lat":36.999275,
        "lng": -122.05424,
        "type":null,
        "to":["0500018", "0500020","0500040"]
    },
    "0500020":{
        "id":"0500020",
        "name":null,
        "areas":null,
        "lat":36.999372,
        "lng": -122.05431,
        "type":null,
        "to":["0500019", "0500021"]
    },
    "0500021":{
        "id":"0500021",
        "name":null,
        "areas":null,
        "lat":36.999372,
        "lng": -122.054396,
        "type":null,
        "to":["0500020", "0500022", "0500025"]
    },
    "0500022":{             //descartes entrance
        "id":"0500022",
        "name":null,
        "areas":null,
        "lat":36.999372,
        "lng": -122.054476,
        "type":null,
        "to":["0500021", "0503000", "0500023"]
    },
    "0500023":{
        "id":"0500023",
        "name":null,
        "areas":null,
        "lat":36.999372,
        "lng": -122.054578,
        "type":null,
        "to":["0500022", "0500024","0500033"]
    },
    "0500024":{
        "id":"0500024",
        "name":null,
        "areas":null,
        "lat":36.99944,
        "lng": -122.054578,
        "type":null,
        "to":["0500023", "0500025", "0500029", "0500032"]
    },
    "0500025":{
        "id":"0500025",
        "name":null,
        "areas":null,
        "lat":36.99944,
        "lng": -122.054396,
        "type":null,
        "to":["0500024", "0500021", "0500026"]
    },
    "0500026":{         //rutherford entrance
        "id":"0500026",
        "name":null,
        "areas":null,
        "lat":36.99944,
        "lng": -122.054342,
        "type":null,
        "to":["0500025","0500027","0504000"]
    },
    "0500027":{
        "id":"0500027",
        "name":null,
        "areas":null,
        "lat":36.99951,
        "lng": -122.054342,
        "type":null,
        "to":["0500026","0500028","0500039","0500045"]
    },
    "0500028":{         //galileo entrance
        "id":"0500028",
        "name":null,
        "areas":null,
        "lat":36.99951,
        "lng": -122.054434,
        "type":null,
        "to":["0500027", "0505000", "0500029"]
    },
    "0500029":{
        "id":"0500029",
        "name":null,
        "areas":null,
        "lat":36.99951,
        "lng": -122.054594,
        "type":null,
        "to":["0500028", "0500030", "0500024"]
    },
    "0500030":{
        "id":"0500030",
        "name":null,
        "areas":null,
        "lat":36.999577,
        "lng": -122.054594,
        "type":null,
        "to":["0500029", "0500031"]
    },
    "0500031":{
        "id":"0500031",
        "name":null,
        "areas":null,
        "lat":36.99972,
        "lng": -122.054667,
        "type":null,
        "to":["0500030","0500066","0500044","0500045"]
    },
    "0500032":{         //gauss entrance
        "id":"0500032",
        "name":null,
        "areas":null,
        "lat":36.99944,
        "lng": -122.054645,
        "type":null,
        "to":["0506000", "0500024"]
    },
    "0500033":{
        "id":"0500033",
        "name":null,
        "areas":null,
        "lat":36.999363,
        "lng": -122.054645,
        "type":null,
        "to":["0500023","0500034"]
    },
    "0500034":{
        "id":"0500034",
        "name":null,
        "areas":null,
        "lat":36.999303,
        "lng": -122.054769,
        "type":null,
        "to":["0500033", "0500035","0500042"]
    },
    "0500035":{
        "id":"0500035",
        "name":null,
        "areas":null,
        "lat":36.999149,
        "lng": -122.054758,
        "type":null,
        "to":["0500034", "0500036"]
    },
    "0500036":{
        "id":"0500036",
        "name":null,
        "areas":null,
        "lat":36.999115,
        "lng": -122.054672,
        "type":null,
        "to":["0500035", "0500037"]
    },
    "0500037":{
        "id":"0500037",
        "name":null,
        "areas":null,
        "lat":36.998999,
        "lng": -122.054603,
        "type":null,
        "to":["0500036","0500042","0500041","0500082","0500092"]
    },
    "0500038":{
        "id":"0500038",
        "name":null,
        "areas":null,
        "lat":36.999256,
        "lng": -122.055026,
        "type":null,
        "to":["0500042","0500043"]
    },
    "0500039":{
        "id":"0500039",
        "name":null,
        "areas":null,
        "lat":36.99951,
        "lng": -122.054141,
        "type":null,
        "to":["0500027","0500016"]
    },
    "0500040":{
        "id":"0500040",
        "name":null,
        "areas":null,
        "lat":36.999063,
        "lng": -122.054232,
        "type":null,
        "to":["0500017","0500018","0500019","0500041"]
    },
    "0500041":{
        "id":"0500041",
        "name":null,
        "areas":null,
        "lat":36.999037,
        "lng": -122.054297,
        "type":null,
        "to":["0500037","0500040", "0500096"]
    },
    "0500042":{
        "id":"0500042",
        "name":null,
        "areas":null,
        "lat":36.99914,
        "lng": -122.054919,
        "type":null,
        "to":["0500037", "0500038","0500034"]
    },
    "0500043":{
        "id":"0500043",
        "name":null,
        "areas":null,
        "lat":36.999449,
        "lng": -122.055219,
        "type":null,
        "to":["0500038", "0500048", "0500044"]
    },
    "0500044":{
        "id":"0500044",
        "name":null,
        "areas":null,
        "lat":36.999577,
        "lng": -122.055037,
        "type":null,
        "to":["0500043", "0500031","0500047"]
    },
    "0500045":{
        "id":"0500045",
        "name":null,
        "areas":null,
        "lat":36.999762,
        "lng": -122.054302,
        "type":null,
        "to":["0500031", "0500027","0500046","0500069"]
    },
    "0500046":{
        "id":"0500046",
        "name":null,
        "areas":null,
        "lat":36.999732,
        "lng": -122.054104,
        "type":null,
        "to":["0500045", "0500016"]
    },
    "0500047":{
        "id":"0500047",
        "name":null,
        "areas":null,
        "lat":36.99986,
        "lng": -122.055032,
        "type":null,
        "to":["0500044","0500048","0500049","0500050"]
    },
    "0500048":{
        "id":"0500048",
        "name":null,
        "areas":null,
        "lat":36.99953,
        "lng": -122.055321,
        "type":null,
        "to":["0500047", "0500043", "0500049","0500088","0500097"]
    },
    "0500049":{
        "id":"0500049",
        "name":null,
        "areas":null,
        "lat":36.999796,
        "lng": -122.055337,
        "type":null,
        "to":["0500047", "0500048","0500054","0500055","0500099"]
    },
    "0500050":{
        "id":"0500050",
        "name":null,
        "areas":null,
        "lat":36.99989,
        "lng": -122.054973,
        "type":null,
        "to":["0500047", "0500051","0500059","0500064"]
    },
    "0500051":{
        "id":"0500051",
        "name":null,
        "areas":null,
        "lat":37.000061,
        "lng": -122.055042,
        "type":null,
        "to":["0500050","0500052"]
    },
    "0500052":{
        "id":"0500052",
        "name":null,
        "areas":null,
        "lat":37.00007,
        "lng": -122.05523,
        "type":null,
        "to":["0500051","0500053","0500058"]
    },
    "0500053":{         //harvey entrance
        "id":"0500053",
        "name":null,
        "areas":null,
        "lat":37.000031,
        "lng": -122.055295,
        "type":null,
        "to":["0500052", "0507000","0500054"]
    },
    "0500054":{
        "id":"0500054",
        "name":null,
        "areas":null,
        "lat":37.000044,
        "lng": -122.055386,
        "type":null,
        "to":["0500053", "0500049"]
    },
    "0500055":{         //maxwell entrance
        "id":"0500055",
        "name":null,
        "areas":null,
        "lat":37.000156,
        "lng": -122.055413,
        "type":null,
        "to":["0500049", "0508000","0500056"]
    },
    "0500056":{
        "id":"0500056",
        "name":null,
        "areas":null,
        "lat":37.000241,
        "lng": -122.055396,
        "type":null,
        "to":["0500055", "0500057"]
    },
    "0500057":{     //leonardo entance
        "id":"0500057",
        "name":null,
        "areas":null,
        "lat":37.000267,
        "lng": -122.055332,
        "type":null,
        "to":["0500056", "0509000", "0500058"]
    },
    "0500058":{     //galen entance
        "id":"0500058",
        "name":null,
        "areas":null,
        "lat":37.000241,
        "lng": -122.05523,
        "type":null,
        "to":["0500057", "0500052", "0510000","0500080"]
    },
    "0500059":{
        "id":"0500059",
        "name":null,
        "areas":null,
        "lat":37.000161,
        "lng": -122.054989,
        "type":null,
        "to":["0500050","0500060"]
    },
    "0500060":{
        "id":"0500060",
        "name":null,
        "areas":null,
        "lat":37.000161,
        "lng": -122.054908,
        "type":null,
        "to":["0500059", "0500061","0500063"]
    },
    "0500061":{
        "id":"0500061",
        "name":null,
        "areas":null,
        "lat":37.000331,
        "lng": -122.054919,
        "type":null,
        "to":["0500060","0500062"]
    },
    "0500062":{
        "id":"0500062",
        "name":null,
        "areas":null,
        "lat":37.000417,
        "lng": -122.055016,
        "type":null,
        "to":["0500061","0500080","0500081"]
    },
    "0500063":{         //classroom entrance
        "id":"0500063",
        "name":null,
        "areas":null,
        "lat":37.00016,
        "lng": -122.054839,
        "type":null,
        "to":["0500060","0511000","0500074"]
    },
    "0500064":{         //classroom entrance
        "id":"0500064",
        "name":null,
        "areas":null,
        "lat":36.999907,
        "lng": -122.054839,
        "type":null,
        "to":["0511000", "0500050", "0500065","0500070"]
    },
    "0500065":{             //crown library, crown computer lab entrance
        "id":"0500065",
        "name":null,
        "areas":null,
        "lat":36.99986,
        "lng":-122.054806,
        "type":null,
        "to":["0500064","0500066","0512000","0513000","0500070","0514000"]
    },
    "0500066":{         //valier hall entrance
        "id":"0500066",
        "name":null,
        "areas":null,
        "lat":36.999856,
        "lng": -122.054731,
        "type":null,
        "to":["0500065", "0500031","0514000","0500070"]
    },
    "0500067":{         //valier hall entrance
        "id":"0500067",
        "name":null,
        "areas":null,
        "lat":36.999856,
        "lng": -122.054184,
        "type":null,
        "to":["0514000"]
    },
    "0500068":{
        "id":"0500068",
        "name":null,
        "areas":null,
        "lat":36.999856,
        "lng": -122.054184,
        "type":null,
        "to":["0514000","0500069"]
    },
    "0500069":{
        "id":"0500069",
        "name":null,
        "areas":null,
        "lat":36.999817,
        "lng": -122.054114,
        "type":null,
        "to":["0500068","0500045"]
    },
    "0500070":{
        "id":"0500070",
        "name":null,
        "areas":null,
        "lat":36.999924,
        "lng": -122.054731,
        "type":null,
        "to":["0500066","0500065","0500064","0500071"]
    },
    "0500071":{
        "id":"0500071",
        "name":null,
        "areas":null,
        "lat":36.999941,
        "lng":  -122.054678,
        "type":null,
        "to":["0500070","0500072","0500004","0500002"]
    },
    "0500072":{
        "id":"0500072",
        "name":null,
        "areas":null,
        "lat":37.000053,
        "lng":  -122.05464,
        "type":null,
        "to":["0500071","0500073"]
    },
    "0500073":{         //fireside entrance
        "id":"0500073",
        "name":null,
        "areas":null,
        "lat":37.000109,
        "lng":  -122.05464,
        "type":null,
        "to":["0500072", "0500074", "0515000"]
    },
    "0500074":{         //fireside entrance
        "id":"0500074",
        "name":null,
        "areas":null,
        "lat":37.000156,
        "lng":  -122.05464,
        "type":null,
        "to":["0500073","0515000", "0500063", "0500076" ]
    },
    "0500075":{        //mailroom + crown advisor
        "id":"0500075",
        "name":null,
        "areas":null,
        "lat":37.000267,
        "lng":-122.054662,
        "type":null,
        "to":["0500076", "0516000","0517000", "0500079"]
    },
    "0500076":{
        "id":"0500076",
        "name":null,
        "areas":null,
        "lat":37.000237,
        "lng":-122.054662,
        "type":null,
        "to":["0500075","0500077","0500074"]
    },
    "0500077":{
        "id":"0500077",
        "name":null,
        "areas":null,
        "lat":37.000237,
        "lng":-122.054511,
        "type":null,
        "to":["0500076","0500078"]
    },
    "0500078":{
        "id":"0500078",
        "name":null,
        "areas":null,
        "lat":37.000301,
        "lng":-122.054511,
        "type":null,
        "to":["0500077","0500079"]
    },
    "0500079":{
        "id":"0500079",
        "name":null,
        "areas":null,
        "lat":37.000301,
        "lng":-122.054662,
        "type":null,
        "to":["0500075", "0500078","0500120"]
    },
    "0500080":{
        "id":"0500080",
        "name":null,
        "areas":null,
        "lat":37.000369,
        "lng":-122.055075,
        "type":null,
        "to":["0500058", "0500062"]
    },
    "0500081":{
        "id":"0500081",
        "name":null,
        "areas":null,
        "lat":37.000567,
        "lng":-122.054908,
        "type":null,
        "to":["0500062","0500103","0500118"]
    },
    "0500082":{
        "id":"0500082",
        "name":null,
        "areas":null,
        "lat":36.99893,
        "lng": -122.054812,
        "type":null,
        "to":["0500037","0500083"]
    },
    "0500083":{
        "id":"0500083",
        "name":null,
        "areas":null,
        "lat":36.998994,
        "lng": -122.054989,
        "type":null,
        "to":["0500082","0500084"]
    },
    "0500084":{
        "id":"0500084",
        "name":null,
        "areas":null,
        "lat":36.998956,
        "lng": -122.055123,
        "type":null,
        "to":["0500083","0500085"]
    },
    "0500085":{
        "id":"0500085",
        "name":null,
        "areas":null,
        "lat":36.998986,
        "lng": -122.055182,
        "type":null,
        "to":["0500084","0518000","0500087","0500091","0500086"]
    },
    "0500086":{
        "id":"0500086",
        "name":null,
        "areas":null,
        "lat":36.998947,
        "lng": -122.055193,
        "type":null,
        "to":["0500085","0518000"]
    },
    "0500087":{
        "id":"0500087",
        "name":null,
        "areas":null,
        "lat":36.999024,
        "lng": -122.05538,
        "type":null,
        "to":["0500085","0518000"]
    },
    "0500088":{
        "id":"0500088",
        "name":null,
        "areas":null,
        "lat":36.999341,
        "lng": -122.055246,
        "type":null,
        "to":["0500048","0500089"]
    },
    "0500089":{
        "id":"0500089",
        "name":null,
        "areas":null,
        "lat":36.999247,
        "lng": -122.05515,
        "type":null,
        "to":["0500088","0500090"]
    },
    "0500090":{
        "id":"0500090",
        "name":null,
        "areas":null,
        "lat":36.999136,
        "lng": -122.055096,
        "type":null,
        "to":["0500089","0500091"]
    },
    "0500091":{
        "id":"0500091",
        "name":null,
        "areas":null,
        "lat":36.999024,
        "lng": -122.055101,
        "type":null,
        "to":["0500090", "0500085"]
    },
    "0500092":{
        "id":"0500092",
        "name":null,
        "areas":null,
        "lat":36.998904,
        "lng": -122.05456,
        "type":null,
        "to":["0500037","0500093"]
    },
    "0500093":{
        "id":"0500093",
        "name":null,
        "areas":null,
        "lat":36.998806,
        "lng": -122.054356,
        "type":null,
        "to":["0500092","0500094"]
    },
    "0500094":{
        "id":"0500094",
        "name":null,
        "areas":null,
        "lat":36.99875,
        "lng": -122.05413,
        "type":null,
        "to":["0500093","0500095","0500096"]
    },
    "0500095":{
        "id":"0500095",
        "name":null,
        "areas":null,
        "lat":36.998626,
        "lng": -122.054055,
        "type":null,
        "to":["0500094","0500251"]
    },
    "0500096":{
        "id":"0500096",
        "name":null,
        "areas":null,
        "lat":36.998917,
        "lng": -122.054248,
        "type":null,
        "to":["0500094","0500041"]
    },
    "0500097":{
        "id":"0500097",
        "name":null,
        "areas":null,
        "lat":36.999774,
        "lng": -122.055654,
        "type":null,
        "to":["0500048","0500098"]
    },
    "0500098":{
        "id":"0500098",
        "name":null,
        "areas":null,
        "lat":36.999963,
        "lng": -122.056121,
        "type":null,
        "to":["0500097"]
    },
    "0500099":{
        "id":"0500099",
        "name":null,
        "areas":null,
        "lat":36.999988,
        "lng": -122.055616,
        "type":null,
        "to":["0500049","0500100"]
    },
    "0500100":{
        "id":"0500100",
        "name":null,
        "areas":null,
        "lat":37.000143,
        "lng": -122.055729,
        "type":null,
        "to":["0500099","0500100"]
    },
    "0500100":{
        "id":"0500100",
        "name":null,
        "areas":null,
        "lat":37.000143,
        "lng": -122.055729,
        "type":null,
        "to":["0500099","0500101"]
    },
    "0500101":{
        "id":"0500101",
        "name":null,
        "areas":null,
        "lat":37.000459,
        "lng": -122.055595,
        "type":null,
        "to":["0500100","0500102"]
    },
    "0500102":{
        "id":"0500102",
        "name":null,
        "areas":null,
        "lat":37.000669,
        "lng": -122.055354,
        "type":null,
        "to":["0500101","0500103"]
    },
    "0500103":{
        "id":"0500103",
        "name":null,
        "areas":null,
        "lat":37.000751,
        "lng":  -122.055166,
        "type":null,
        "to":["0500102","0500081","0500104"]
    },
    "0500104":{
        "id":"0500104",
        "name":null,
        "areas":null,
        "lat":37.001239,
        "lng":  -122.055354,
        "type":null,
        "to":["0500103","0500105","0500106"]
    },
    "0500105":{
        "id":"0500105",
        "name":null,
        "areas":null,
        "lat":37.001214,
        "lng": -122.055509,
        "type":null,
        "to":["0500104"]
    },
    "0500106":{
        "id":"0500106",
        "name":null,
        "areas":null,
        "lat":37.001488,
        "lng": -122.055112,
        "type":null,
        "to":["0500104","0500107"]
    },
    "0500107":{
        "id":"0500107",
        "name":null,
        "areas":null,
        "lat":37.001531,
        "lng": -122.054806,
        "type":null,
        "to":["0500106","0500108"]
    },
    "0500108":{
        "id":"0500108",
        "name":null,
        "areas":null,
        "lat":37.001406,
        "lng": -122.054436,
        "type":null,
        "to":["0500107","0500127","0500126","0500109"]
    },
    "0500109":{
        "id":"0500109",
        "name":null,
        "areas":null,
        "lat":37.001218,
        "lng": -122.054447,
        "type":null,
        "to":["0500108","0500112","0500110"]
    },
    "0500110":{
        "id":"0500110",
        "name":null,
        "areas":null,
        "lat":37.001098,
        "lng": -122.054554,
        "type":null,
        "to":["0500109","0500111"]
    },
    "0500111":{
        "id":"0500111",
        "name":null,
        "areas":null,
        "lat":37.001008,
        "lng": -122.054307,
        "type":null,
        "to":["0500110","0500125","0500112"]
    },
    "0500112":{
        "id":"0500112",
        "name":null,
        "areas":null,
        "lat":37.001128,
        "lng": -122.054248,
        "type":null,
        "to":["0500111", "0500109"]
    },
    "0500113":{
        "id":"0500113",
        "name":null,
        "areas":null,
        "lat":37.000819,
        "lng": -122.054613,
        "type":null,
        "to":["0500125","0500114"]
    },
    "0500114":{
        "id":"0500114",
        "name":null,
        "areas":null,
        "lat":37.000704,
        "lng": -122.054474,
        "type":null,
        "to":["0500113","0500115"]
    },
    "0500115":{
        "id":"0500115",
        "name":null,
        "areas":null,
        "lat":37.000652,
        "lng": -122.054506,
        "type":null,
        "to":["0500114","0500145","0500116"]
    },
    "0500116":{
        "id":"0500116",
        "name":null,
        "areas":null,
        "lat":37.000519,
        "lng": -122.05464,
        "type":null,
        "to":["0500115","0500121","0500117"]
    },
    "0500117":{
        "id":"0500117",
        "name":null,
        "areas":null,
        "lat":37.000545,
        "lng": -122.054731,
        "type":null,
        "to":["0500116","0500118"]
    },
    "0500118":{
        "id":"0500118",
        "name":null,
        "areas":null,
        "lat":37.000524,
        "lng": -122.054833,
        "type":null,
        "to":["0500117","0500081","0500119"]
    },
    "0500119":{
        "id":"0500119",
        "name":null,
        "areas":null,
        "lat":37.000404,
        "lng":-122.054812,
        "type":null,
        "to":["0500118","0500120"]
    },
    "0500120":{
        "id":"0500120",
        "name":null,
        "areas":null,
        "lat":37.000361,
        "lng":-122.054656,
        "type":null,
        "to":["0500119","0500121","0500079"]
    },
    "0500121":{
        "id":"0500121",
        "name":null,
        "areas":null,
        "lat":37.000408,
        "lng":-122.054597,
        "type":null,
        "to":["0500120", "0500116","0500144"]
    },
    "0500122":{
        "id":"0500122",
        "name":null,
        "areas":null,
        "lat":37.001509,
        "lng":-122.054007,
        "type":null,
        "to":["0500126","0500128","0500127","0500123"]
    },
    "0500123":{
        "id":"0500123",
        "name":null,
        "areas":null,
        "lat":37.001565,
        "lng":-122.054055,
        "type":null,
        "to":["0500122", "0524000","0500177","0500124"]
    },
    "0500124":{
        "id":"0500124",
        "name":null,
        "areas":null,
        "lat":37.001603,
        "lng":-122.05413,
        "type":null,
        "to":["0500123"]
    },
    "0500125":{
        "id":"0500125",
        "name":null,
        "areas":null,
        "lat":37.000896,
        "lng":-122.054356,
        "type":null,
        "to":["0500111","0500113","0500148"]
    },
    "0500126":{
        "id":"0500126",
        "name":null,
        "areas":null,
        "lat":37.001423,
        "lng":-122.054168,
        "type":null,
        "to":["0500108","0500122"]
    },
    "0500127":{
        "id":"0500127",
        "name":null,
        "areas":null,
        "lat":37.001423,
        "lng":-122.054168,
        "type":null,
        "to":["0500108","0500122"]
    },
    "0500128":{
        "id":"0500128",
        "name":null,
        "areas":null,
        "lat":37.00153,
        "lng": -122.053932,
        "type":null,
        "to":["0500122","0500170","0500129"]
    },
    "0500129":{
        "id":"0500129",
        "name":null,
        "areas":null,
        "lat":37.001492,
        "lng":  -122.053819,
        "type":null,
        "to":["0500128","0525000","0500172"]
    },
    "0500130":{
        "id":"0500130",
        "name":null,
        "areas":null,
        "lat":37.001505,
        "lng":-122.053551,
        "type":null,
        "to":["0500172","0500152","0500131"]
    },
    "0500131":{
        "id":"0500131",
        "name":null,
        "areas":null,
        "lat":37.001385,
        "lng":-122.053648,
        "type":null,
        "to":["0500130","0500132"]
    },
    "0500132":{
        "id":"0500132",
        "name":null,
        "areas":null,
        "lat":37.001308,
        "lng":-122.053594,
        "type":null,
        "to":["0500131","0500133"]
    },
    "0500133":{
        "id":"0500133",
        "name":null,
        "areas":null,
        "lat":37.001308,
        "lng":-122.053594,
        "type":null,
        "to":["0500132","0500134"]
    },
    "0500134":{
        "id":"0500134",
        "name":null,
        "areas":null,
        "lat":37.001205,
        "lng":-122.053599,
        "type":null,
        "to":["0500133","0500135"]
    },
    "0500135":{
        "id":"0500135",
        "name":null,
        "areas":null,
        "lat":37.001145,
        "lng":-122.053664,
        "type":null,
        "to":["0500134","0500136"]
    },
    "0500136":{
        "id":"0500136",
        "name":null,
        "areas":null,
        "lat":37.001029,
        "lng": -122.053653,
        "type":null,
        "to":["0500135","0500137"]
    },
    "0500137":{
        "id":"0500137",
        "name":null,
        "areas":null,
        "lat":37.000948,
        "lng": -122.053685,
        "type":null,
        "to":["0500136","0500151","0500150","0500138"]
    },
    "0500138":{
        "id":"0500138",
        "name":null,
        "areas":null,
        "lat":37.000708,
        "lng":-122.053658,
        "type":null,
        "to":["0500137","0500139"]
    },
    "0500139":{
        "id":"0500139",
        "name":null,
        "areas":null,
        "lat":37.000609,
        "lng":-122.053583,
        "type":null,
        "to":["0500138","0500140"]
    },
    "0500140":{
        "id":"0500140",
        "name":null,
        "areas":null,
        "lat":37.000537,
        "lng":-122.053798,
        "type":null,
        "to":["0500139","0500141"]
    },
    "0500141":{
        "id":"0500141",
        "name":null,
        "areas":null,
        "lat":37.000455,
        "lng":-122.053841,
        "type":null,
        "to":["0500140","0500147","0500142"]
    },
    "0500142":{
        "id":"0500142",
        "name":null,
        "areas":null,
        "lat":37.000357,
        "lng":-122.0539,
        "type":null,
        "to":["0500141","0500143"]
    },
    "0500143":{
        "id":"0500143",
        "name":null,
        "areas":null,
        "lat":37.000305,
        "lng":-122.054029,
        "type":null,
        "to":["0500142","0500144","0500243","0500213"]
    },
    "0500144":{
        "id":"0500144",
        "name":null,
        "areas":null,
        "lat":37.000382,
        "lng":-122.054366,
        "type":null,
        "to":["0500143", "0500121"]
    },
    "0500145":{
        "id":"0500145",
        "name":null,
        "areas":null,
        "lat":37.000631,
        "lng":-122.054324,
        "type":null,
        "to":["0500115","0500148","0500146"]
    },
    "0500146":{
        "id":"0500146",
        "name":null,
        "areas":null,
        "lat":37.000571,
        "lng":-122.054109,
        "type":null,
        "to":["0500145","0500147"]
    },
    "0500147":{
        "id":"0500147",
        "name":null,
        "areas":null,
        "lat":37.000485,
        "lng":-122.05398,
        "type":null,
        "to":["0500146","0500147","0500141"]
    },
    "0500148":{
        "id":"0500148",
        "name":null,
        "areas":null,
        "lat":37.000828,
        "lng":-122.054195,
        "type":null,
        "to":["0500145", "0500125","0500149"]
    },
    "0500149":{
        "id":"0500149",
        "name":null,
        "areas":null,
        "lat":37.000806,
        "lng":-122.053964,
        "type":null,
        "to":["0500148","0500151","0500150"]
    },
    "0500150":{
        "id":"0500150",
        "name":null,
        "areas":null,
        "lat":37.000776,
        "lng":-122.05375,
        "type":null,
        "to":["0500149", "0500137"]
    },
    "0500151":{
        "id":"0500151",
        "name":null,
        "areas":null,
        "lat":37.000965,
        "lng":-122.053927,
        "type":null,
        "to":["0500149", "0500137"]
    },
    "0500152":{
        "id":"0500152",
        "name":null,
        "areas":null,
        "lat":37.001616,
        "lng":-122.053342,
        "type":null,
        "to":["0500130","0500168","0500153"]
    },
    "0500153":{
        "id":"0500153",
        "name":null,
        "areas":null,
        "lat":37.001689,
        "lng":-122.053192,
        "type":null,
        "to":["0500152","0500155","0500154"]
    },
    "0500154":{
        "id":"0500154",
        "name":null,
        "areas":null,
        "lat":37.001659,
        "lng":-122.053025,
        "type":null,
        "to":["0500153","0500156","0500157"]
    },
    "0500155":{
        "id":"0500155",
        "name":null,
        "areas":null,
        "lat":37.001835,
        "lng":-122.053261,
        "type":null,
        "to":["0500153","0500163"]
    },
    "0500156":{
        "id":"0500156",
        "name":null,
        "areas":null,
        "lat":37.001595,
        "lng":-122.052982,
        "type":null,
        "to":["0500154","0500158"]
    },
    "0500157":{
        "id":"0500157",
        "name":null,
        "areas":null,
        "lat":37.001698,
        "lng":-122.052768,
        "type":null,
        "to":["0500154","0527000","0500161","0500263"]
    },
    "0500158":{
        "id":"0500158",
        "name":null,
        "areas":null,
        "lat":37.001526,
        "lng":-122.052843,
        "type":null,
        "to":["0500156","0528000","0500160","0500159","0500263"]
    },
    "0500159":{
        "id":"0500159",
        "name":null,
        "areas":null,
        "lat":37.001372,
        "lng":-122.052816,
        "type":null,
        "to":["0500158"]
    },
    "0500160":{
        "id":"0500160",
        "name":null,
        "areas":null,
        "lat":37.001372,
        "lng":-122.052816,
        "type":null,
        "to":["0500158","0529000"]
    },
    "0500161":{
        "id":"0500161",
        "name":null,
        "areas":null,
        "lat":37.001817,
        "lng":-122.052602,
        "type":null,
        "to":["0500157","0500162"]
    },
    "0500162":{
        "id":"0500162",
        "name":null,
        "areas":null,
        "lat":37.001817,
        "lng":-122.052548,
        "type":null,
        "to":["0500161","0530000"]
    },
    "0500163":{
        "id":"0500163",
        "name":null,
        "areas":null,
        "lat":37.001946,
        "lng":-122.053138,
        "type":null,
        "to":["0500155","0500167","0500178","0500164"]
    },
    "0500164":{
        "id":"0500164",
        "name":null,
        "areas":null,
        "lat":37.001873,
        "lng":-122.052929,
        "type":null,
        "to":["0500163","0531000"]
    },
    "0500165":{
        "id":"0500165",
        "name":null,
        "areas":null,
        "lat":37.001792,
        "lng":-122.053353,
        "type":null,
        "to":["0500168","0500167"]
    },
    "0500166":{
        "id":"0500166",
        "name":null,
        "areas":null,
        "lat":37.002053,
        "lng":-122.053041,
        "type":null,
        "to":["0500178","0500179"]
    },
    "0500167":{
        "id":"0500167",
        "name":null,
        "areas":null,
        "lat":37.001886,
        "lng":-122.053288,
        "type":null,
        "to":["0500165","0500195","0500163"]
    },
    "0500168":{
        "id":"0500168",
        "name":null,
        "areas":null,
        "lat":37.001702,
        "lng":-122.053288,
        "type":null,
        "to":["0500165","0500152"]
    },
    "0500169":{
        "id":"0500169",
        "name":null,
        "areas":null,
        "lat":37.001749,
        "lng":-122.053685,
        "type":null,
        "to":["0500195","0500173"]
    },
    "0500170":{
        "id":"0500170",
        "name":null,
        "areas":null,
        "lat":37.001672,
        "lng":-122.053835,
        "type":null,
        "to":["0500174","0500128","0534000", "0535000","0533000"]
    },
    "0500171":{
        "id":"0500171",
        "name":null,
        "areas":null,
        "lat":37.002023,
        "lng":-122.05354,
        "type":null,
        "to":["0500180", "0500178", "0523000"]
    },
    "0500172":{
        "id":"0500172",
        "name":null,
        "areas":null,
        "lat":37.001488,
        "lng":-122.053723,
        "type":null,
        "to":["0500129","0500130"]
    },
    "0500173":{
        "id":"0500173",
        "name":null,
        "areas":null,
        "lat":37.001732,
        "lng":-122.05375,
        "type":null,
        "to":["0500169","0500182","0500174"]
    },
    "0500174":{
        "id":"0500174",
        "name":null,
        "areas":null,
        "lat":37.00171,
        "lng":-122.053792,
        "type":null,
        "to":["0500173","0500175","0500170"]
    },
    "0500175":{
        "id":"0500175",
        "name":null,
        "areas":null,
        "lat":37.001728,
        "lng":-122.053894,
        "type":null,
        "to":["0500174","0500176"]
    },
    "0500176":{
        "id":"0500176",
        "name":null,
        "areas":null,
        "lat":37.001792,
        "lng":-122.053986,
        "type":null,
        "to":["0500175","0500185","0500177"]
    },
    "0500177":{
        "id":"0500177",
        "name":null,
        "areas":null,
        "lat":37.001715,
        "lng":-122.053986,
        "type":null,
        "to":["0500176","0500123"]
    },
    "0500178":{
        "id":"0500178",
        "name":null,
        "areas":null,
        "lat":37.002036,
        "lng":-122.053133,
        "type":null,
        "to":["0500163","0500180","0500171","0500166"]
    },
    "0500179":{
        "id":"0500179",
        "name":null,
        "areas":null,
        "lat":37.002083,
        "lng":-122.052945,
        "type":null,
        "to":["0500166","0532000"]
    },
    "0500180":{
        "id":"0500180",
        "name":null,
        "areas":null,
        "lat":37.002019,
        "lng":-122.053642,
        "type":null,
        "to":["0500178","0500181","0500171"]
    },
    "0500181":{
        "id":"0500181",
        "name":null,
        "areas":null,
        "lat":37.001976,
        "lng":-122.053674,
        "type":null,
        "to":["0500180","0500182","0500183"]
    },
    "0500182":{
        "id":"0500182",
        "name":null,
        "areas":null,
        "lat":37.001929,
        "lng":-122.053658,
        "type":null,
        "to":["0500181","0500173"]
    },
    "0500183":{
        "id":"0500183",
        "name":null,
        "areas":null,
        "lat":37.00202,
        "lng":-122.053916,
        "type":null,
        "to":["0500181", "0522000","0500184"]
    },
    "0500184":{
        "id":"0500184",
        "name":null,
        "areas":null,
        "lat":37.00201,
        "lng":-122.054157,
        "type":null,
        "to":["0500183","0500186","0500185"]
    },
    "0500185":{
        "id":"0500185",
        "name":null,
        "areas":null,
        "lat":37.00186,
        "lng":-122.054077,
        "type":null,
        "to":["0500184","0500176", "0521000"]
    },
    "0500186":{
        "id":"0500186",
        "name":null,
        "areas":null,
        "lat":37.00200,
        "lng":-122.054324,
        "type":null,
        "to":["0500184", "0520000","0500187"]
    },
    "0500187":{
        "id":"0500187",
        "name":null,
        "areas":null,
        "lat":37.001942,
        "lng":-122.054549,
        "type":null,
        "to":["0500186","0500188"]
    },
    "0500188":{
        "id":"0500188",
        "name":null,
        "areas":null,
        "lat":37.002028,
        "lng":-122.054656,
        "type":null,
        "to":["0500187","0519000","0500189"]
    },
    "0500189":{
        "id":"0500189",
        "name":null,
        "areas":null,
        "lat":37.002053,
        "lng":-122.054839,
        "type":null,
        "to":["0500188","0500190"]
    },
    "0500190":{
        "id":"0500190",
        "name":null,
        "areas":null,
        "lat":37.002062,
        "lng":-122.055203,
        "type":null,
        "to":["0500189","0500191"]
    },
    "0500191":{
        "id":"0500191",
        "name":null,
        "areas":null,
        "lat":37.002158,
        "lng":-122.055182,
        "type":null,
        "to":["0500190","0500192"]
    },
    "0500192":{
        "id":"0500192",
        "name":null,
        "areas":null,
        "lat":37.002169,
        "lng": -122.055262,
        "type":null,
        "to":["0500191","0500193"]
    },
    "0500193":{
        "id":"0500193",
        "name":null,
        "areas":null,
        "lat":37.002135,
        "lng":-122.055713,
        "type":null,
        "to":["0500192","0500194"]
    },
    "0500194":{
        "id":"0500194",
        "name":null,
        "areas":null,
        "lat":37.002306,
        "lng":-122.055869,
        "type":null,
        "to":["0500193"]
    },
    "0500195":{
        "id":"0500195",
        "name":null,
        "areas":null,
        "lat":37.0018,
        "lng":-122.053535,
        "type":null,
        "to":["0500167", "0500169", "0526000"]
    },
    "0500196":{
        "id":"0500196",
        "name":null,
        "areas":null,
        "lat":36.99992,
        "lng":-122.053637,
        "type":null,
        "to":["0536000","0500209","0500197"]
    },
    "0500197":{
        "id":"0500197",
        "name":null,
        "areas":null,
        "lat":36.999907,
        "lng":-122.053755,
        "type":null,
        "to":["0500196", "0500011","0500198"]
    },
    "0500198":{
        "id":"0500198",
        "name":null,
        "areas":null,
        "lat":36.999873,
        "lng":-122.053755,
        "type":null,
        "to":["0500197","0500199"]
    },
    "0500199":{
        "id":"0500199",
        "name":null,
        "areas":null,
        "lat":36.999864,
        "lng":-122.053841,
        "type":null,
        "to":["0500198", "0500010"]
    },
    "0500200":{
        "id":"0500200",
        "name":null,
        "areas":null,
        "lat":36.999675,
        "lng":-122.053503,
        "type":null,
        "to":["0536000","0500232"]
    },    
    "0500201":{
        "id":"0500201",
        "name":null,
        "areas":null,
        "lat":36.999581,
        "lng":-122.053626,
        "type":null,
        "to":["0536000","0500231","0500202"]
    },
    "0500202":{
        "id":"0500202",
        "name":null,
        "areas":null,
        "lat":36.999508,
        "lng":-122.053648,
        "type":null,
        "to":["0500201","0500208","0500203"]
    },
    "0500203":{
        "id":"0500203",
        "name":null,
        "areas":null,
        "lat":36.999453,
        "lng": -122.053487,
        "type":null,
        "to":["0500202","0500246","0500204"]
    },
    "0500204":{
        "id":"0500204",
        "name":null,
        "areas":null,
        "lat":36.999444,
        "lng": -122.053567,
        "type":null,
        "to":["0500203","0500205"]
    },
    "0500205":{
        "id":"0500205",
        "name":null,
        "areas":null,
        "lat":36.99938,
        "lng": -122.053583,
        "type":null,
        "to":["0500204","0500206"]
    },
    "0500206":{
        "id":"0500206",
        "name":null,
        "areas":null,
        "lat":36.999384,
        "lng": -122.053664,
        "type":null,
        "to":["0500205","0500207"]
    },
    "0500207":{
        "id":"0500207",
        "name":null,
        "areas":null,
        "lat":36.999436,
        "lng": -122.053653,
        "type":null,
        "to":["0500206","0549000"]
    },
    "0500208":{
        "id":"0500208",
        "name":null,
        "areas":null,
        "lat":36.999517,
        "lng": -122.053755,
        "type":null,
        "to":["0500202", "0500015"]
    },
    "0500209":{
        "id":"0500209",
        "name":null,
        "areas":null,
        "lat":37.000027,
        "lng": -122.053685,
        "type":null,
        "to":["0537000","0500196","0500210"]
    },
    "0500210":{
        "id":"0500210",
        "name":null,
        "areas":null,
        "lat":37.000112,
        "lng": -122.053701,
        "type":null,
        "to":["0500209","0500216","0500214","0500211"]
    },
    "0500211":{
        "id":"0500211",
        "name":null,
        "areas":null,
        "lat":37.00022,
        "lng": -122.053696,
        "type":null,
        "to":["0500210","0500212"]
    },
    "0500212":{
        "id":"0500212",
        "name":null,
        "areas":null,
        "lat":37.000228,
        "lng": -122.053809,
        "type":null,
        "to":["0500211","0500213"]
    },
    "0500213":{
        "id":"0500213",
        "name":null,
        "areas":null,
        "lat":37.000258,
        "lng": -122.054002,
        "type":null,
        "to":["0500212","0500143"]
    },
    "0500214":{
        "id":"0500214",
        "name":null,
        "areas":null,
        "lat":37.000245,
        "lng":  -122.053696,
        "type":null,
        "to":["0500210","0500215"]
    },
    "0500215":{
        "id":"0500215",
        "name":null,
        "areas":null,
        "lat":37.000215,
        "lng":-122.053514,
        "type":null,
        "to":["0500214"]
    },
    "0500216":{
        "id":"0500216",
        "name":null,
        "areas":null,
        "lat":37.000117,
        "lng":-122.053626,
        "type":null,
        "to":["0500210","0538000","0500217"]
    },
    "0500217":{
        "id":"0500217",
        "name":null,
        "areas":null,
        "lat":37.000108,
        "lng":-122.05353,
        "type":null,
        "to":["0500216","0500221","0500218"]
    },
    "0500218":{
        "id":"0500218",
        "name":null,
        "areas":null,
        "lat":37.000108,
        "lng":-122.053412,
        "type":null,
        "to":["0500217","0500219","0539000"]
    },
    "0500219":{
        "id":"0500219",
        "name":null,
        "areas":null,
        "lat":37.000087,
        "lng":-122.053256,
        "type":null,
        "to":["0500218","0500222","0500219","0500220"]
    },
    "0500220":{
        "id":"0500220",
        "name":null,
        "areas":null,
        "lat":37.000262,
        "lng":-122.053197,
        "type":null,
        "to":["0500219","0543000","0544000"]
    },
    "0500221":{
        "id":"0500221",
        "name":null,
        "areas":null,
        "lat":37.000318,
        "lng":-122.053492,
        "type":null,
        "to":["0500217","0543000","0542000"]
    },
    "0500222":{
        "id":"0500222",
        "name":null,
        "areas":null,
        "lat":37.000023,
        "lng":-122.05324,
        "type":null,
        "to":["0500219","0500234","0500223"]
    },
    "0500223":{
        "id":"0500223",
        "name":null,
        "areas":null,
        "lat":36.999958,
        "lng":-122.053127,
        "type":null,
        "to":["0500222","0500235", "0500224"]
    },
    "0500224":{
        "id":"0500224",
        "name":null,
        "areas":null,
        "lat":36.999885,
        "lng":-122.053074,
        "type":null,
        "to":["0500223","0500225"]
    },
    "0500225":{
        "id":"0500225",
        "name":null,
        "areas":null,
        "lat":36.999825,
        "lng":-122.052961,
        "type":null,
        "to":["0500224","0500226"]
    },
    "0500226":{
        "id":"0500226",
        "name":null,
        "areas":null,
        "lat":36.999714,
        "lng":-122.052902,
        "type":null,
        "to":["0500225","0500255","0500244","0500237","0500227"]
    },
    "0500227":{                 //merrill mail and office entrance
        "id":"0500227",
        "name":null,
        "areas":null,
        "lat":36.999697,
        "lng":-122.053047,
        "type":null,
        "to":["0500226","0540000","0541000","0500228"]
    },
    "0500228":{
        "id":"0500228",
        "name":null,
        "areas":null,
        "lat":36.999684,
        "lng":-122.053251,
        "type":null,
        "to":["0500227","0500252","0500232","0500229"]
    },
    "0500229":{
        "id":"0500229",
        "name":null,
        "areas":null,
        "lat":36.999641,
        "lng":-122.053428,
        "type":null,
        "to":["0500228","0500230"]
    },
    "0500230":{
        "id":"0500230",
        "name":null,
        "areas":null,
        "lat":36.999615,
        "lng":-122.053337,
        "type":null,
        "to":["0500229","0500231"]
    },
    "0500231":{
        "id":"0500231",
        "name":null,
        "areas":null,
        "lat":36.999547,
        "lng":-122.053358,
        "type":null,
        "to":["0500230","0500201"]
    },
    "0500232":{
        "id":"0500232",
        "name":null,
        "areas":null,
        "lat":36.999727,
        "lng":-122.053444,
        "type":null,
        "to":["0500228", "0500233","0500200"]
    },
    "0500233":{
        "id":"0500233",
        "name":null,
        "areas":null,
        "lat":36.999825,
        "lng":-122.053481,
        "type":null,
        "to":["0500232","0500234"]
    },
    "0500234":{
        "id":"0500234",
        "name":null,
        "areas":null,
        "lat":37.000014,
        "lng":-122.05339,
        "type":null,
        "to":["0500233","0500222"]
    },
    "0500235":{
        "id":"0500235",
        "name":null,
        "areas":null,
        "lat":37.000014,
        "lng":-122.052999,
        "type":null,
        "to":["0500223","0500236"]
    },
    "0500236":{
        "id":"0500236",
        "name":null,
        "areas":null,
        "lat":37.000014,
        "lng":-122.052848,
        "type":null,
        "to":["0500235","0545000"]
    },
    "0500237":{
        "id":"0500237",
        "name":null,
        "areas":null,
        "lat":36.99983,
        "lng": -122.052881,
        "type":null,
        "to":["0500226","0500238"]
    },
    "0500238":{
        "id":"0500238",
        "name":null,
        "areas":null,
        "lat":37.000125,
        "lng": -122.052881,
        "type":null,
        "to":["0500237","0500239"]
    },
    "0500239":{
        "id":"0500239",
        "name":null,
        "areas":null,
        "lat":37.00019,
        "lng": -122.052993,
        "type":null,
        "to":["0500238","0500240"]
    },
    "0500240":{
        "id":"0500240",
        "name":null,
        "areas":null,
        "lat":37.000224,
        "lng": -122.053159,
        "type":null,
        "to":["0500239","0500241"]
    },
    "0500241":{
        "id":"0500241",
        "name":null,
        "areas":null,
        "lat":37.000292,
        "lng": -122.053358,
        "type":null,
        "to":["0500240","0500242"]
    },
    "0500242":{
        "id":"0500242",
        "name":null,
        "areas":null,
        "lat":37.000284,
        "lng": -122.053519,
        "type":null,
        "to":["0500241","0500243"]
    },
    "0500243":{
        "id":"0500243",
        "name":null,
        "areas":null,
        "lat":37.000331,
        "lng": -122.053626,
        "type":null,
        "to":["0500242","0500143"]
    },
    "0500244":{
        "id":"0500244",
        "name":null,
        "areas":null,
        "lat":36.999624,
        "lng": -122.052859,
        "type":null,
        "to":["0500226","0500245"]
    },
    "0500245":{
        "id":"0500245",
        "name":null,
        "areas":null,
        "lat":36.999568,
        "lng": -122.052918,
        "type":null,
        "to":["0500244","0500253"]
    },
    "0500246":{
        "id":"0500246",
        "name":null,
        "areas":null,
        "lat":36.999447,
        "lng":-122.053348,
        "type":null,
        "to":["0500203","0500247","0550000"]
    },
    "0500247":{
        "id":"0500247",
        "name":null,
        "areas":null,
        "lat":36.999438,
        "lng":-122.053187,
        "type":null,
        "to":["0500246","0500252","0500248"]
    },
    "0500248":{
        "id":"0500248",
        "name":null,
        "areas":null,
        "lat":36.999233,
        "lng":-122.053219,
        "type":null,
        "to":["0500247","0500249"]
    },
    "0500249":{
        "id":"0500249",
        "name":null,
        "areas":null,
        "lat":36.999006,
        "lng":-122.053589,
        "type":null,
        "to":["0500248","0500250"]
    },
    "0500250":{
        "id":"0500250",
        "name":null,
        "areas":null,
        "lat":36.998937,
        "lng":-122.053595,
        "type":null,
        "to":["0500249","0500251"]
    },
    "0500251":{
        "id":"0500251",
        "name":null,
        "areas":null,
        "lat":36.998701,
        "lng":-122.053439,
        "type":null,
        "to":["0500250", "0500095"]
    },
    "0500252":{
        "id":"0500252",
        "name":null,
        "areas":null,
        "lat":36.999494,
        "lng":-122.053117,
        "type":null,
        "to":["0500247", "0500228","0500253"]
    },
    "0500253":{
        "id":"0500253",
        "name":null,
        "areas":null,
        "lat":36.999498,
        "lng":-122.052908,
        "type":null,
        "to":["0500252", "0500245","0500254"]
    },
    "0500254":{
        "id":"0500254",
        "name":null,
        "areas":null,
        "lat":36.999485,
        "lng":-122.052769,
        "type":null,
        "to":["0500253"]
    },
    "0500255":{
        "id":"0500255",
        "name":null,
        "areas":null,
        "lat":36.999738,
        "lng":-122.052833,
        "type":null,
        "to":["0500226","0500256"]
    },
    "0500256":{
        "id":"0500256",
        "name":null,
        "areas":null,
        "lat":36.999777,
        "lng":-122.052822,
        "type":null,
        "to":["0500255","0500257"]
    },
    "0500257":{
        "id":"0500257",
        "name":null,
        "areas":null,
        "lat":36.999775,
        "lng":-122.052758,
        "type":null,
        "to":["0500256","0500258"]
    },
    "0500258":{
        "id":"0500258",
        "name":null,
        "areas":null,
        "lat":36.999785,
        "lng":-122.052565,
        "type":null,
        "to":["0500257","0500259"]
    },
    "0500259":{
        "id":"0500259",
        "name":null,
        "areas":null,
        "lat":36.999768,
        "lng":-122.052474,
        "type":null,
        "to":["0500258","0500260"]
    },
    "0500260":{
        "id":"0500260",
        "name":null,
        "areas":null,
        "lat":36.999815,
        "lng":-122.052329,
        "type":null,
        "to":["0500259","0500261"]
    },
    "0500261":{             //ming ong computer lab
        "id":"0500261",
        "name":null,
        "areas":null,
        "lat":36.999803,
        "lng":-122.052254,
        "type":null,
        "to":["0500260","0500262","0548000"]
    },
    "0500262":{             //D C entrance
        "id":"0500262",
        "name":null,
        "areas":null,
        "lat":36.999982,
        "lng":-122.052179,
        "type":null,
        "to":["0500261","0546000","0547000"]
    },
    "0500263":{
        "id":"0500263",
        "name":null,
        "areas":null,
        "lat":37.001599,
        "lng":-122.052852,
        "type":null,
        "to":["0500158","0500157"]
    }
};