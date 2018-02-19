//this is an array of nodes objects in json.
//I already loaded it into nodes and saved it as
//js because we would have to do XMLHttpRequest.
//var nodes = [{this is json}].
//everything between the brackets is json.
var nodes = {
    "0501000":{ 
        "id":"0501000",
        "name":"Crown/Merrill Dining Hall",
        "areas":"Crown College",
        "lat":37.000132,
        "lng":-122.054404,
        "type":"Dining Hall",
        "to": ["0500001"]
    },
    "0502000":{
        "id":"0502000",
        "name":"Banana Joe's",
        "areas":"Crown College",
        "lat":36.999989,
        "lng":-122.054399,
        "type":"Food To Go",
        "to":["0500003"]
    },
    "0503000":{ 
        "id":"0503000",
        "name":"Descartes House",
        "areas":"Crown College",
        "lat":36.999252,
        "lng":-122.054616,
        "type":"Residential",
        "to":["0500022"]
    },
    "0504000":{ 
        "id":"0504000",
        "name":"Rutherford House",
        "areas":"Crown College",
        "lat":36.99944,
        "lng": -122.05424,
        "type":"Residential",
        "to":["0500026"]
    },
    "0505000":{ 
        "id":"0505000",
        "name":"Galileo House",
        "areas":"Crown College",
        "lat":36.99965,
        "lng": -122.054401,
        "type":"Residential",
        "to":["0500028"]
    },
    "0506000":{ 
        "id":"0506000",
        "name":"Gauss House",
        "areas":"Crown College",
        "lat":36.99947,
        "lng": -122.054737,
        "type":"Residential",
        "to":["0500032"]
    },
    "0507000":{ 
        "id":"0507000",
        "name":"Harvey House",
        "areas":"Crown College",
        "lat":36.999976,
        "lng": -122.055273,
        "type":"Residential",
        "to":["0500053"]
    },
    "0508000":{ 
        "id":"0508000",
        "name":"Maxwell House",
        "areas":"Crown College",
        "lat":37.000134,
        "lng": -122.055477,
        "type":"Residential",
        "to":["0500055"]
    },
    "0509000":{ 
        "id":"0509000",
        "name":"Leonardo House",
        "areas":"Crown College",
        "lat":37.000387,
        "lng": -122.055305,
        "type":"Residential",
        "to":["0500057"]
    },
    "0510000":{ 
        "id":"0510000",
        "name":"Galen House",
        "areas":"Crown College",
        "lat":37.000186,
        "lng":-122.055134,
        "type":"Residential",
        "to":["0500058"]
    },
    "0511000":{
        "id":"0511000",
        "name":"Crown Classrooms",
        "areas":"Crown College",
        "lat":37.000044,
        "lng": -122.054839,
        "type":"Classroom",
        "to":["0500063","0500064"]
    },
    "0512000":{
        "id":"0512000",
        "name":"Crown Library",
        "areas":"Crown College",
        "lat":36.999774,
        "lng": -122.054892,
        "type":"Academic",
        "to":["0500065"]
    },
    "0513000":{
        "id":"0513000",
        "name":"Crown Computer Lab",
        "areas":"Crown College",
        "lat":36.999774,
        "lng": -122.054892,
        "type":"Academic",
        "to":["0500065"]
    },
    "0514000":{
        "id":"0514000",
        "name":"Vallier Hall",
        "areas":"Crown College",
        "lat":36.999856,
        "lng": -122.054501,
        "type":"Academic",
        "to":["0500065", "0500004","0500066","0500067","0500068"]
    },
    "0515000":{
        "id":"0515000",
        "name":"Fireside Lounge",
        "areas":"Crown College",
        "lat":37.000117,
        "lng": -122.05456,
        "type":"Other",
        "to":["0500074", "0500073"]
    },
    "0516000":{
        "id":"0516000",
        "name":"Crown Mailroom",
        "areas":"Crown College",
        "lat":37.000267,
        "lng": -122.054565,
        "type":"Other",
        "to":["0500075"]
    },
    "0517000":{
        "id":"0516000",
        "name":"Crown College Offices",
        "areas":"Crown College",
        "lat":37.000267,
        "lng": -122.054763,
        "type":"Other",
        "to":["0500075"]
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
        "to":["0500008", "0500012", "0500013"]
    },
    "0500011":{
        "id":"0500011",
        "name":null,
        "areas":null,
        "lat":36.999892,
        "lng": -122.053831,
        "type":null,
        "to":["0500009"]
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
        "to":["0500010", "0500012", "0500014"]
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
        "to":["0500014", "0500016"]
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
        "to":["0500018", "0500020","0500019","0500040"]
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
        "to":["0500036","0500042", "0500041","0500040"]
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
        "lat":36.999757,
        "lng": -122.054302,
        "type":null,
        "to":["0500027"]
    },
    "0500040":{
        "id":"0500040",
        "name":null,
        "areas":null,
        "lat":36.999063,
        "lng": -122.054232,
        "type":null,
        "to":["0500017", "0500037","0500018","0500019","0500041"]
    },
    "0500041":{
        "id":"0500041",
        "name":null,
        "areas":null,
        "lat":36.999063,
        "lng": -122.054232,
        "type":null,
        "to":["0500037","0500040"]
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
        "to":["0500047", "0500043", "0500049"]
    },
    "0500049":{
        "id":"0500049",
        "name":null,
        "areas":null,
        "lat":36.999796,
        "lng": -122.055337,
        "type":null,
        "to":["0500047", "0500048","0500054","0500055"]
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
        "to":["0500061","0500080"]
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
        "id":"0500076",
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
        "to":["0500075", "0500078"]
    },
    "0500080":{
        "id":"0500080",
        "name":null,
        "areas":null,
        "lat":37.000387,
        "lng":-122.055193,
        "type":null,
        "to":["0500058", "0500062","0500081"]
    },
    "0500081":{
        "id":"0500081",
        "name":null,
        "areas":null,
        "lat":37.000601,
        "lng":-122.054881,
        "type":null,
        "to":["0500080"]
    }
};