//this is an array of nodes objects in json.
//I already loaded it into nodes and saved it as
//js because we would have to do XMLHttpRequest.
//var nodes = [{this is json}].
//everything between the brackets is json.
var nodes = {
        "0901000":{
        "id":"0901000",
        "name":"Porter/Kresge Dining Hall",
        "areas":"Porter College",
        "lat":36.994276,
        "lng":-122.065903,
        "type":"Dining Hall",
        "to":["0900039"]
    },
    "0902000":{
        "id":"0902000",
        "name":"Porter/Kresge Housing & Residential Office",
        "areas":"Porter College",
        "lat":36.996563,
        "lng":-122.065731,
        "type":"Student Services",
        "to": []
     },
    "0903000":{
        "id":"0903000",
        "name":"Hitchcock Lounge",
        "areas":"Porter College",
        "lat":36.994501,
        "lng":-122.065820,
        "type":"Other",
        "to": ["0900039"]
    },
    "0904000":{
        "id":"0904000",
        "name":"Bowls by Cafe Brasil",
        "areas":"Porter College",
        "lat":36.994197,
        "lng":-122.065755,
        "type":"Food To Go",
        "to":["0900024","0900036"]
    },
    "0905000": {
        "id":"0905000",
        "name":"Sesnon Art Gallery",
        "areas":"Porter College",
        "lat":36.994006,
        "lng":-122.065178,
        "type":"Other",
        "to":["0900019","0900045"]
    },
    "0906000":{
        "id":"0906000",
        "name":"Porter Computer Lab",
        "areas":"Porter College",
        "lat":36.994272,
        "lng":-122.065199,
        "type":"Academic",
        "to": ["0900046"]
    },
    "0907000":{
        "id":"0907000",
        "name":"Student Activities Office",
        "areas":"Porter College",
        "lat":36.994062,
        "lng":-122.065348,
        "type":"Student Services",
        "to":["0900038","0900046"]
    }, 
    "0900001":{
        "id":"0900001",
        "name":null,
        "areas":null,
        "lat":36.992921,
        "lng":-122.065069,
        "type":null,
        "to":["0900002","0900005"]
    },
    "0900002":{
        "id":"0900002",
        "name":null,
        "areas":null,
        "lat":36.992996,
        "lng":-122.065053,
        "type":null,
        "to":["0900001","0900003"]
    },
    "0900003":{
        "id":"0900003",
        "name":null,
        "areas":null,
        "lat":36.993050,
        "lng":-122.064959,
        "type":null,
        "to":["0900002","0900004"]
    },
    "0900004":{
        "id":"0900004",
        "name":null,
        "areas":null,
        "lat":36.993146,
        "lng":-122.064795,
        "type":null,
        "to":["0900003","0900007","0900008","0900031"]
    },
    "0900005":{
        "id":"0900005",
        "name":null,
        "areas":null,
        "lat":36.992940,
        "lng":-122.064508,
        "type":null,
        "to":["0900001","0900006"]
    },
    "0900006":{
        "id":"0900006",
        "name":null,
        "areas":null,
        "lat":36.992996,
        "lng":-122.064556,
        "type":null,
        "to":["0900005","0900007"]
    },
    "0900007":{
        "id":"0900007",
        "name":null,
        "areas":null,
        "lat":36.993045,
        "lng":-122.064682,
        "type":null,
        "to":["0900004","0900006"]
    },
    "0900008":{
        "id":"0900008",
        "name":null,
        "areas":null,
        "lat":36.993272,
        "lng":-122.064843,
        "type":null,
        "to":["0900004","0900009","0900026","0900031"]
    },
    "0900009":{
        "id":"0900009",
        "name":null,
        "areas":null,
        "lat":36.993360,
        "lng":-122.064897,
        "type":null,
        "to":["0900008","0900010","0900018","0900026"]
    },
    "0900010":{
        "id":"0900010",
        "name":null,
        "areas":null,
        "lat":36.993494,
        "lng":-122.064927,
        "type":null,
        "to":["0900009","0900011","0900018"]
    },
    "0900011":{
        "id":"0900011",
        "name":null,
        "areas":null,
        "lat":36.993629,
        "lng":-122.064977,
        "type":null,
        "to":["0900010","0900012","0900019"]
    },
    "0900012":{
        "id":"0900012",
        "name":null,
        "areas":null,
        "lat":36.993878,
        "lng":-122.064926,
        "type":null,
        "to":["0900011","0900013"]
    },
    "0900013":{
        "id":"0900013",
        "name":null,
        "areas":null,
        "lat":36.994199,
        "lng":-122.064857,
        "type":null,
        "to":["0900012","0900014"]
    },
    "0900014":{
        "id":"0900014",
        "name":null,
        "areas":null,
        "lat":36.994378,
        "lng":-122.064862,
        "type":null,
        "to":["0900013","0900015"]
    },
    "0900015":{
        "id":"0900015",
        "name":null,
        "areas":null,
        "lat":36.994394,
        "lng":-122.065085,
        "type":null,
        "to":["0900014","0900016"]
    },
    "0900016":{
        "id":"0900016",
        "name":null,
        "areas":null,
        "lat":36.994413,
        "lng":-122.065348,
        "type":null,
        "to":["0900015","0900017","0900038"]
    },
    "0900017":{
        "id":"0900017",
        "name":null,
        "areas":null,
        "lat":36.994471,
        "lng":-122.065396,
        "type":null,
        "to":["0900016","0900037","0900040"]
    },
    "0900018":{
        "id":"0900018",
        "name":null,
        "areas":null,
        "lat":36.993434,
        "lng":-122.064991,
        "type":null,
        "to":["0900009","0900010","0900019"]
    },
    "0900019":{
        "id":"0900019",
        "name":null,
        "areas":null,
        "lat":36.993643,
        "lng":-122.065116,
        "type":null,
        "to":["0900018","0900011","0900020","0900045","0905000"]
    },
    "0900020":{
        "id":"0900020",
        "name":null,
        "areas":null,
        "lat":36.993808,
        "lng":-122.065368,
        "type":null,
        "to":["0900019","0900021","0900045"]
    },
    "0900021":{
        "id":"0900021",
        "name":null,
        "areas":null,
        "lat":36.993842,
        "lng":-122.065564,
        "type":null,
        "to":["0900020","0900022"]
    },
    "0900022":{
        "id":"0900022",
        "name":null,
        "areas":null,
        "lat":36.993838,
        "lng":-122.065723,
        "type":null,
        "to":["0900021","0900023"]
    },
    "0900023":{
        "id":"0900023",
        "name":null,
        "areas":null,
        "lat":36.993752,
        "lng":-122.065881,
        "type":null,
        "to":["0900022","0900024","0900025","0900032"]
    },
    "0900024":{
        "id":"0900024",
        "name":null,
        "areas":null,
        "lat":36.994033,
        "lng":-122.065833,
        "type":null,
        "to":["0900023","0900032","0900036","0904000"]
    },
    "0900025":{
        "id":"0900025",
        "name":null,
        "areas":null,
        "lat":36.993500,
        "lng":-122.065962,
        "type":null,
        "to":["0900023","0900026","0900027"]
    },
    "0900026":{
        "id":"0900026",
        "name":null,
        "areas":null,
        "lat":36.993208,
        "lng":-122.065165,
        "type":null,
        "to":["0900008","0900009","0900025","0900030","0900031"]
    },
    "0900027":{
        "id":"0900027",
        "name":null,
        "areas":null,
        "lat":36.993215,
        "lng":-122.066177,
        "type":null,
        "to":["0900025","0900028","0900029"]
    },
    "0900028":{
        "id":"0900028",
        "name":null,
        "areas":null,
        "lat":36.993174,
        "lng":-122.066257,
        "type":null,
        "to":["0900027","0900029"]
    },
    "0900029":{
        "id":"0900029",
        "name":null,
        "areas":null,
        "lat":36.993157,
        "lng":-122.066059,
        "type":null,
        "to":["0900027","0900028","0900030"]
    },
    "0900030":{
        "id":"0900030",
        "name":null,
        "areas":null,
        "lat":36.993193,
        "lng":-122.065828,
        "type":null,
        "to":["0900029","0900026","0900031"]
    },
    "0900031":{
        "id":"0900031",
        "name":null,
        "areas":null,
        "lat":36.993189,
        "lng":-122.065321,
        "type":null,
        "to":["0900004","0900008","0900026","0900030"]
    },
    "0900032":{
        "id":"0900032",
        "name":null,
        "areas":null,
        "lat":36.993871,
        "lng":-122.066067,
        "type":null,
        "to":["0900023","0900024","0900033"]
    },
    "0900033":{
        "id":"0900033",
        "name":null,
        "areas":null,
        "lat":36.993995,
        "lng":-122.066290,
        "type":null,
        "to":["0900032","0900034"]
    },
    "0900034":{
        "id":"0900034",
        "name":null,
        "areas":null,
        "lat":36.994175,
        "lng":-122.066432,
        "type":null,
        "to":["0900033","0900035"]
    },
    "0900035":{
        "id":"0900035",
        "name":null,
        "areas":null,
        "lat":36.994379,
        "lng":-122.066982,
        "type":null,
        "to":["0900034"]
    },
    "0900036":{
        "id":"0900036",
        "name":null,
        "areas":null,
        "lat":36.994265,
        "lng":-122.065587,
        "type":null,
        "to":["0900024","0900037","0900038","0900039","0904000"]
    },
    "0900037":{
        "id":"0900037",
        "name":null,
        "areas":null,
        "lat":36.994434,
        "lng":-122.065568,
        "type":null,
        "to":["0900016","0900017","0900036","0900039"]
    },
    "0900038":{
        "id":"0900038",
        "name":null,
        "areas":null,
        "lat":36.994258,
        "lng":-122.065396,
        "type":null,
        "to":["0900016","0900036","0900036","0907000"]
    },
    "0900039":{
        "id":"0900039",
        "name":null,
        "areas":null,
        "lat":36.994442,
        "lng":-122.065742,
        "type":null,
        "to":["0900036","0900037","0901000","0903000"]
    },
    "0900040":{
        "id":"0900040",
        "name":null,
        "areas":null,
        "lat":36.994594,
        "lng":-122.065358,
        "type":null,
        "to":["0900017","0900041"]
    },
    "0900041":{
        "id":"0900041",
        "name":null,
        "areas":null,
        "lat":36.994905,
        "lng":-122.065353,
        "type":null,
        "to":["0900040","0900042"]
    },
    "0900042":{
        "id":"0900042",
        "name":null,
        "areas":null,
        "lat":36.995171,
        "lng":-122.065299,
        "type":null,
        "to":["0900041","0900043"]
    },
    "0900043":{
        "id":"0900043",
        "name":null,
        "areas":null,
        "lat":36.995342,
        "lng":-122.065245,
        "type":null,
        "to":["0900042","0900044"]
    },
    "0900044":{
        "id":"0900044",
        "name":null,
        "areas":null,
        "lat":36.995414,
        "lng":-122.065278,
        "type":null,
        "to":["0900044"]
    },
    "0900045":{
        "id":"0900045",
        "name":null,
        "areas":null,
        "lat":36.993981,
        "lng":-122.065312,
        "type":null,
        "to":["0900019","0900046","0905000"]
    },
    "0900046":{
        "id":"0900046",
        "name":null,
        "areas":null,
        "lat":36.994191,
        "lng":-122.065264,
        "type":null,
        "to":["0900045","0900038","0906000","0907000"]
    },
    "0100001":{					//bus stop
        "id":"0100001",
        "name": "Rachel Carson Bus Stop",
        "areas":"Rachel Carson",
        "lat":36.992831,
        "lng":-122.064784,
        "type":"Bus Stop",
        "to":["0100002","0100003"]
    },
        "0100002":{					//crosswalk
        "id":"0100002",
        "name":null,
        "areas":null,
        "lat":36.992843,
        "lng":-122.064496,
        "type":null,
        "to":["0100001","0100003"]
    },
        "0100003":{
        "id":"0100003",
        "name":null,
        "areas":null,
        "lat":36.992631,
        "lng":-122.064536,
        "type":null,
        "to":["0100001","0100002","0100004"]
    },
        "0100004":{
        "id":"0100004",
        "name":null,
        "areas":null,
        "lat":36.992547,
        "lng":-122.064558,
        "type":null,
        "to":["0100003","0100005"]
    },
        "0100005":{
        "id":"0100005",
        "name":null,
        "areas":null,
        "lat":36.992448,
        "lng":-122.064603,
        "type":null,
        "to":["0100004","0100006"]
    },
        "0100006":{					//west of lot 146, bend in the sidewalk
        "id":"0100006",
        "name":null,
        "areas":null,
        "lat":36.992301,
        "lng":-122.064648,
        "type":null,
        "to":["0100005","0100007"]
    },
        "0100007":{					//head of the college
        "id":"0100007",
        "name":null,
        "areas":null,
        "lat":36.992077,
        "lng":-122.064654,
        "type":null,
        "to":["0100006","0100008","0100009"]
    },
        "0100008":{					//down into the quad
        "id":"0100008",
        "name":null,
        "areas":null,
        "lat":36.991957,
        "lng":-122.064694,
        "type":null,
        "to":[]
    },
        "0100009":{					//outside ResNet
        "id":"0100009",
        "name":null,
        "areas":null,
        "lat":36.992118,
        "lng":-122.064848,
        "type":null,
        "to":["0100007","0102000"]
    },
        "0100010":{
        "id":"0100010",
        "name":null,
        "areas":null,
        "lat":36.991817,
        "lng":-122.064741,
        "type":null,
        "to":["0100008","0100011"]
    },
        "0100011":{					//central quad, near comp lab
        "id":"0100011",
        "name":null,
        "areas":null,
        "lat":36.991579,
        "lng":-122.064824,
        "type":null,
        "to":["0100010","0100012","0100040","0107000"]
    },
        "0100012":{					//outside dining hall
        "id":"0100012",
        "name":null,
        "areas":null,
        "lat":36.991714,
        "lng":-122.065051,
        "type":null,
        "to":["0100011","0101000"]
    },
        "0100013":{					//center of plaza
        "id":"0100013",
        "name":null,
        "areas":null,
        "lat":36.991452,
        "lng":-122.064880,
        "type":null,
        "to":["0100011","0100014","0105000"]
    },
        "0100014":{					//nw lower quad
        "id":"0100014",
        "name":null,
        "areas":null,
        "lat":36.991164,
        "lng":-122.064963,
        "type": null,
        "to":["0100013","0100015","0100017"]
    },
        "0100015":{					//west lower quad
        "id":"0100015",
        "name":null,
        "areas":null,
        "lat":36.991040,
        "lng":-122.065026,
        "type":null,
        "to":["0100014","0100016"]
    },
        "0100016":{					//sw lower quad
        "id":"0100016",
        "name":null,
        "areas":null,
        "lat":36.990942,
        "lng":-122.065053,
        "type":null,
        "to":["0100015","0100019"]
    },
        "0100017":{					//north lower quad
        "id":"0100017",
        "name":null,
        "areas":null,
        "lat":36.991136,
        "lng":-122.064846,
        "type":null,
        "to":["0100014","0100018","0100020"]
    },
        "0100018":{					//center lower quad
        "id":"0100018",
        "name":null,
        "areas":null,
        "lat":36.991009,
        "lng":-122.064888,
        "type":null,
        "to":["0100015","0100017","0100019","0100021"]
    },
        "0100019":{					//south lower quad
        "id":"0100019",
        "name":null,
        "areas":null,
        "lat":36.990909,
        "lng":-122.064922,
        "type":null,
        "to":["0100016","0100018","0100022","0100023"]
    },
        "0100020":{					//ne lower quad
        "id":"0100020",
        "name":null,
        "areas":null,
        "lat":36.991114,
        "lng":-122.064657,
        "type":null,
        "to":["0100017","0100021",]
    },
        "0100021":{					//east lower quad
        "id":"0100021",
        "name":null,
        "areas":null,
        "lat":36.990973,
        "lng":-122.064725,
        "type":null,
        "to":["0100018","0100020","0100022","0106000"]
    },
        "0100022":{					//se lower quad
        "id":"0100022",
        "name":null,
        "areas":null,
        "lat":36.990879,
        "lng":-122.064761,
        "type":null,
        "to":["0100019","0100022"]
    },
        "0100023":{					//south 19 towards service road
        "id":"0100023",
        "name":null,
        "areas":null,
        "lat":36.990795,
        "lng":-122.064962,
        "type":null,
        "to":["0100019","0100024","0100053"]
    },
        "0100024":{					//south 23 towards parking lot
        "id":"0100024",
        "name":null,
        "areas":null,
        "lat":36.990597,
        "lng":-122.065022,
        "type":null,
        "to":["0100023","0100025"]
    },
        "0100025":{					//south 24 first bisection of parking lot
        "id":"0100025",
        "name":null,
        "areas":null,
        "lat":36.990204,
        "lng":-122.065156,
        "type":null,
        "to":["0100024","0100026","0100029"]
    },
        "0100026":{					//south 25 second bisection of parking lot
        "id":"0100026",
        "name":null,
        "areas":null,
        "lat":36.990005,
        "lng":-122.065233,
        "type":null,
        "to":["0100025","0100027"]
    },
        "0100027":{					//south 26 third bisection of parking lot
        "id":"0100027",
        "name":null,
        "areas":null,
        "lat":36.989791,
        "lng":-122.065315,
        "type":null,
        "to":["0100026","0100028"]
    },
        "0100028":{					//south parking lot, north of Oakes Rd
        "id":"0100028",
        "name":null,
        "areas":null,
        "lat":36.989683,
        "lng":-122.065340,
        "type":null,
        "to":["0100027"]
    },
        "0100029":{					//west of first bisection
        "id":"0100029",
        "name":null,
        "areas":null,
        "lat":36.990271,
        "lng":-122.065345,
        "type":null,
        "to":["0100025","0100030"]
    },
        "0100030":{					//perpendicular 3-way to road west of 29
        "id":"0100030",
        "name":null,
        "areas":null,
        "lat":36.990373,
        "lng":-122.065572,
        "type":null,
        "to":["0100029","0100031","0100033"]
    },
        "0100031":{					//west 30
        "id":"0100031",
        "name":null,
        "areas":null,
        "lat":36.990531,
        "lng":-122.065775,
        "type":null,
        "to":["0100030","0100032","0100038"]
    },
        "0100032":{					//west of second bisection
        "id":"0100032",
        "name":null,
        "areas":null,
        "lat":36.990084,
        "lng":-122.065505,
        "type":null,
        "to":["0100026","0100033"]
    },
        "0100033":{					//4-way sw 30
        "id":"0100033",
        "name":null,
        "areas":null,
        "lat":36.990193,
        "lng":-122.065740,
        "type":null,
        "to":["0100030","0100032","0100034","0100036"]
    },
        "0100034":{					//west 33
        "id":"0100034",
        "name":null,
        "areas":null,
        "lat":36.990455,
        "lng":-122.066042,
        "type":null,
        "to":["0100033","0100038"]
    },
        "0100035":{					//west of third bisection
        "id":"0100035",
        "name":null,
        "areas":null,
        "lat":36.989891,
        "lng":-122.065651,
        "type":null,
        "to":["0100027","0100036"]
    },
        "0100036":{					//4-way sw 33
        "id":"0100036",
        "name":null,
        "areas":null,
        "lat":36.990023,
        "lng":-122.065899,
        "type":null,
        "to":["0100033","0100035","0100037"]
    },
        "0100037":{					//west 36
        "id":"0100037",
        "name":null,
        "areas":null,
        "lat":36.990209,
        "lng":-122.066178,
        "type":null,
        "to":["0100036","0100039"]
    },
        "0100038":{					//southwest bus stop
        "id":"0100038",
        "name":null,
        "areas":null,
        "lat":36.990612,
        "lng":-122.066145,
        "type":null,
        "to":["0100031","0100034","0100039"]
    },
        "0100039":{					//sidewalk along bus stop, sw
        "id":"0100039",
        "name":null,
        "areas":null,
        "lat":36.990284,
        "lng":-122.066264,
        "type":null,
        "to":["0100037","0100038"]
    },
        "0100040":{					//beside college 8 cafe
        "id":"0100040",
        "name":null,
        "areas":null,
        "lat":36.991579,
        "lng":-122.064503,
        "type":null,
        "to":["0100011","0100041","0101000"]
    },
        "0100041":{					//north 40
        "id":"0100041",
        "name":null,
        "areas":null,
        "lat":36.991638,
        "lng":-122.064422,
        "type":null,
        "to":["0100040","0100042"]
    },
        "0100042":{					//east 42 along trail
        "id":"0100042",
        "name":null,
        "areas":null,
        "lat":36.991642,
        "lng":-122.064230,
        "type":null,
        "to":["0100041","0100043"]
    },
        "0100043":{					//east of 44, four-way in road
        "id":"0100043",
        "name":null,
        "areas":null,
        "lat":36.991875,
        "lng":-122.063923,
        "type":null,
        "to":["0100042","0100044"]
    },
        "0100044":{					//east of lot 146
        "id":"0100044",
        "name":null,
        "areas":null,
        "lat":36.992056,
        "lng":-122.064202,
        "type":null,
        "to":["0100006","0100043"]
    },
        "0100045":{					//west of lot 146 towards courts
        "id":"0100045",
        "name":null,
        "areas":null,
        "lat":36.992241,
        "lng":-122.064993,
        "type":null,
        "to":["0100006","0100046"]
    },
        "0100046":{					//follow road along 45 southwest
        "id":"0100046",
        "name":null,
        "areas":null,
        "lat":36.992241,
        "lng":-122.064993,
        "type":null,
        "to":["0100045","0100047"]
    },
        "0100047":{					//west 46
        "id":"0100047",
        "name":null,
        "areas":null,
        "lat":36.992136,
        "lng":-122.065272,
        "type":null,
        "to":["0100046","0100048"]
    },
        "0100048":{					//south 47
        "id":"0100048",
        "name":null,
        "areas":null,
        "lat":36.991999,
        "lng":-122.065244,
        "type":null,
        "to":["0100047","0100049"]
    },
        "0100049":{					//sw 48
        "id":"0100049",
        "name":null,
        "areas":null,
        "lat":36.991905,
        "lng":-122.065511,
        "type":null,
        "to":["0100048","0100050"]
    },
        "0100050":{					//west 49
        "id":"0100050",
        "name":null,
        "areas":null,
        "lat":36.991726,
        "lng":-122.065584,
        "type":null,
        "to":["0100049","0100051"]
    },
        "0100051":{					//west 50
        "id":"0100051",
        "name":null,
        "areas":null,
        "lat":36.991613,
        "lng":-122.065839,
        "type":null,
        "to":["0100050","0100052"]
    },
        "0100052":{					//south 51
        "id":"0100052",
        "name":null,
        "areas":null,
        "lat":36.991129,
        "lng":-122.065721,
        "type":null,
        "to":["0100051","0100053"]
    },
        "0100053":{					//se 52, west 23
        "id":"0100053",
        "name":null,
        "areas":null,
        "lat":36.990932,
        "lng":-122.065599,
        "type":null,
        "to":["0100023","0100052","0100054"]
    },
        "0100054":{					//sw 53, ne 38
        "id":"0100054",
        "name":null,
        "areas":null,
        "lat":36.990774,
        "lng":-122.065876,
        "type":null,
        "to":["0100038","0100053"]
    }
};