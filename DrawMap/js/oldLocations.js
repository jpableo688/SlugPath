//this is an array of nodes objects in json.
//I already loaded it into nodes and saved it as
//js because we would have to do XMLHttpRequest.
//var nodes = [{this is json}].
//everything between the brackets is json.
var nodes = {
    "0100000":{
        "id":"0100000",
        "name":"Rachel Carson College",
        "areas":"Rachel Carson College",
        "lat":36.991519,
        "lng":-122.064845,
        "type":"Residential"
    },
    "0200000":{
        "id":"0200000",
        "name":"College 9",
        "areas":"College 9 & 10",
        "lat":37.001536,
        "lng":-122.057328,
        "type":"Residential"
    },
    "0300000":{
        "id":"0300000",
        "name":"College 10",
        "areas":"College 9 & 10",
        "lat":37.000545,
        "lng":-122.057994,
        "type":"Residential"
    },
    "0400000":{
        "id":"0400000",
        "name":"Cowell College",
        "areas":"Cowell College",
        "lat":36.997090,
        "lng":-122.054324,
        "type":"Residential"
    },
    "0500000":{
        "id":"0500000",
        "name":"Crown College",
        "areas":"Crown College",
        "lat":37.000000,
        "lng":-122.054592,
        "type":"Residential"
    },
    "0600000":{
        "id":"0600000",
        "name":"Kresge College",
        "areas":"Kresge College",
        "lat":36.997376,
        "lng":-122.066755,
        "type":"Residential"
    },
    "0700000":{
        "id":"0700000",
        "name":"Merrill College",
        "areas":"Merrill College",
        "lat":36.999826,
        "lng":-122.053284,
        "type":"Residential"
    },
    "0800000":{
        "id":"0800000",
        "name":"Oakes College",
        "areas":"Oakes College",
        "lat":36.989404,
        "lng":-122.064069,
        "type":"Residential"
    },
    "0900000":{
        "id":"0900000",
        "name":"Porter College",
        "areas":"Porter College",
        "lat":36.994903,
        "lng":-122.065389,
        "type":"Residential"
    },
    "1000000":{
        "id":"1000000",
        "name":"Stevenson College",
        "areas":"Stevenson College",
        "lat":36.997470,
        "lng":-122.052090,
        "type":"Residential"
    },
    "1100000":{
        "id":"1100000",
        "name":"Jack Baskin School of Engineering",
        "areas":"Science Hill",
        "lat":37.000720,
        "lng":-122.063096,
        "type":"Academic"
    },
    "1200000":{
        "id":"1200000",
        "name":"Physical Sciences Building",
        "areas":"Science Hill",
        "lat":36.999605,
        "lng":-122.062029,
        "type":"Academic"
    },
    "1300000":{
        "id":"1300000",
        "name":"Department of Chemistry & Biochemistry",
        "areas":"Science Hill",
        "lat":36.999541,
        "lng":-122.062132,
        "type":"Academic"
    },
    "1400000":{
        "id":"1400000",
        "name":"Science & Engineering Library",
        "areas":"Science Hill",
        "lat":36.999013,
        "lng":-122.060636,
        "type":"Academic"
    },
    "1500000":{
        "id":"1500000",
        "name":"Earth & Marine Sciences",
        "areas":"Science Hill",
        "lat":36.998060,
        "lng":-122.059596,
        "type":"Academic"
    },
    "1600000":{
        "id":"1600000",
        "name":"Media Theater",
        "areas":"Media Theater",
        "lat":36.994847,
        "lng":-122.061960,
        "type":"Academic"
    },
    "1700000":{
        "id":"1700000",
        "name":"Department of Music",
        "areas":"Department of Music",
        "lat":36.993059,
        "lng":-122.060619,
        "type":"Academic"
    },
    "1800000":{
        "id":"1800000",
        "name":"OPERS",
        "areas":"OPERS",
        "lat":36.994411,
        "lng":-122.055063,
        "type":"Activities"
    },
    "1900000":{
        "id":"1900000",
        "name":"Classroom Unit",
        "areas":"Classroom Unit",
        "lat":36.997865,
        "lng":-122.057180,
        "type":"Academic"
    },
    "2000000":{
        "id":"2000000",
        "name":"McHenry Library",
        "areas":"McHenry Library",
        "lat":36.995744,
        "lng":-122.059150,
        "type":"Academic"
    },
    "2100000":{
        "id":"2100000",
        "name":"Student Health Center",
        "areas":"Student Health Center",
        "lat":36.9995522,
        "lng":-122.0577115,
        "type":"Student Services"
    },
    "2200000":{
        "id":"2200000",
        "name":"Kerr Hall",
        "areas":"Kerr Hall",
        "lat":36.997000,
        "lng":-122.062040,
        "type":"Academic"
    },
    "2300000":{
        "id":"2300000",
        "name":"Quarry Amphitheater",
        "areas":"Quarry Plaza",
        "lat":36.998589,
        "lng":-122.056024,
        "type":"Activities"
    },
    "0101000":{
        "id":"0101000",
        "name":"Rachel Carson/Oakes Dining Hall",
        "areas":"Rachel Carson College",
        "lat":36.991493,
        "lng":-122.065283,
        "type":"Dining Hall"
    },
    "0102000":{
        "id":"0102000",
        "name":"ResNet",
        "areas":"Rachel Carson College",
        "lat":36.992149,
        "lng":-122.065012,
        "type":"Student Services"
    },
    "0103000":{
        "id":"0103000",
        "name":"College Eight Cafe",
        "areas":"Rachel Carson College",
        "lat":36.991527,
        "lng":-122.064551,
        "type":"Food To Go"
    },
    "0104000":{
        "id":"0104000",
        "name":"West Field House",
        "areas":"Rachel Carson College",
        "lat":36.991506,
        "lng":-122.063883,
        "type":"Activities"
    },
    "0105000":{
        "id":"0105000",
        "name":"Red Room",
        "areas":"Rachel Carson College",
        "lat":36.991306,
        "lng":-122.064770,
        "type":"Other"
    },
    "0106000":{
        "id":"0106000",
        "name":"Rachel Carson & Oakes Residential Life",
        "areas":"Rachel Carson College",
        "lat":36.990977,
        "lng":-122.064736,
        "type":"Student Services"
    },
    "0201000":{
        "id":"0201000",
        "name":"College 9 & 10 Dining Hall",
        "areas":"College 9 & 10",
        "lat":37.000731,
        "lng":-122.057769,
        "type":"Dining Hall"
    },
    "0202000":{
        "id":"0202000",
        "name":"Terry Fresca Restaurant & Coffee Bar",
        "areas":"College 9 & 10",
        "lat":37.000978,
        "lng":-122.057736,
        "type":"Dining Hall"
    },
    "0203000":{
        "id":"0203000",
        "name":"Terry Frietas Cafe",
        "areas":"College 9 & 10",
        "lat":37.0003468,
        "lng":-122.057966,
        "type":"Food To Go "
    },
    "0204000":{
        "id":"0204000",
        "name":"Recreational Lounge",
        "areas":"College 9 & 10",
        "lat":37.0006144,
        "lng":-122.0577187,
        "type":"Activities"
    },
    "0205000":{
        "id":"0205000",
        "name":"Namaste Lounge",
        "areas":"College 9 & 10",
        "lat":37.0007468,
        "lng":-122.0571587,
        "type":"Activities"
    },
    "0206000":{
        "id":"0206000",
        "name":"College 9 & 10 Residential Life",
        "areas":"College 9 & 10",
        "lat":37.001422,
        "lng":-122.056990,
        "type":"Student Services"
    },
    "0207000":{
        "id":"0207000",
        "name":"Social Science 1",
        "areas":"College 9 & 10",
        "lat":37.002115,
        "lng":-122.058030,
        "type":"Academic"
    },
    "0208000":{
        "id":"0208000",
        "name":"Social Science 2",
        "areas":"College 9 & 10",
        "lat":37.001527,
        "lng":-122.058747,
        "type":"Academic"
    },
    "0209000":{
        "id":"0209000",
        "name":"College 9 & 10 Multi-Purpose Room",
        "areas":"College 9 & 10",
        "lat":37.000767,
        "lng":-122.057835,
        "type":"Activities"
    },
    "0210000":{
        "id":"0210000",
        "name":"College 9 & 10 Lounge Room",
        "areas":"College 9 & 10",
        "lat":37.000618,
        "lng":-122.057719,
        "type":"Activities"
    },
    "0211000":{
        "id":"0211000",
        "name":"College 9 & 10 Community Room",
        "areas":"College 9 & 10",
        "lat":37.002229,
        "lng":-122.059317,
        "type":"Activities"
    },
    "0401000":{
        "id":"0401000",
        "name":"Page Smith Library",
        "areas":"Cowell College",
        "lat":36.996893,
        "lng":-122.053601,
        "type":"Academic"
    },
    "0402000":{
        "id":"0402000",
        "name":"Cowell/Stevenson Dining Hall",
        "areas":"Cowell College",
        "lat":36.996826,
        "lng":-122.053062,
        "type":"Dining Hall"
    },
    "0403000":{
        "id":"0403000",
        "name":"Cowell Coffee Shop",
        "areas":"Cowell College",
        "lat":36.997162,
        "lng":-122.053062,
        "type":"Food To Go"
    },
    "0404000":{
        "id":"0404000",
        "name":"Cowell College Administration",
        "areas":"Cowell College",
        "lat":36.997316,
        "lng":-122.053515,
        "type":"Student Services"
    },
    "0405000":{
        "id":"0405000",
        "name":"Mary Holmes Lounge",
        "areas":"Cowell College",
        "lat":36.997042,
        "lng":-122.053071,
        "type":"Other"
    },
    "0406000":{
        "id":"0406000",
        "name":"Cowell Computer Lab",
        "areas":"Cowell College",
        "lat":36.997008,
        "lng":-122.055111,
        "type":"Academic"
    },
    "0407000":{
        "id":"0407000",
        "name":"Eloise Pickard Smith Gallery",
        "areas":"Cowell College",
        "lat":36.997036,
        "lng":-122.052881,
        "type":"Other"
    },
    "0501000":{
        "id":"0501000",
        "name":"Crown/Merrill Dining Hall",
        "areas":"Crown College",
        "lat":37.000126,
        "lng":-122.054424,
        "type":"Dining Hall"
    },
    "0502000":{
        "id":"0502000",
        "name":"Banana Joe's",
        "areas":"Crown College",
        "lat":36.999989,
        "lng":-122.054432,
        "type":"Food To Go"
    },
    "0503000":{
        "id":"0503000",
        "name":"Crown Lounge",
        "areas":"Crown College",
        "lat":37.000116,
        "lng":-122.054575,
        "type":"Other"
    },
    "0504000":{
        "id":"0504000",
        "name":"Crown Library",
        "areas":"Crown College",
        "lat":36.999844,
        "lng":-122.054801,
        "type":"Academic"
    },
    "0505000":{
        "id":"0505000",
        "name":"Crown Computer Lab",
        "areas":"Crown College",
        "lat":36.999844,
        "lng":-122.054801,
        "type":"Academic"
    },
    "0601000":{
        "id":"0601000",
        "name":"Porter/Kresge Housing & Residential Office",
        "areas":"Kresge College",
        "lat":36.996563,
        "lng":-122.065731,
        "type":"Student Services"
    },
    "0602000":{
        "id":"0602000",
        "name":"Kresge Lounge",
        "areas":"Kresge College",
        "lat":36.997492,
        "lng":-122.067002,
        "type":"Other"
    },
    "0603000":{
        "id":"0603000",
        "name":"Kresge Food Co-Op",
        "areas":"Kresge College",
        "lat":36.997329,
        "lng":-122.065780,
        "type":"Market"
    },
    "0604000":{
        "id":"0604000",
        "name":"STARS",
        "areas":"Kresge College",
        "lat":36.997488,
        "lng":-122.066416,
        "type":"Student Services"
    },
    "0605000":{
        "id":"0605000",
        "name":"Housing & Student Life Office",
        "areas":"Kresge College",
        "lat":36.998526,
        "lng":-122.066434,
        "type":"Student Services"
    },
    "0606000":{
        "id":"0606000",
        "name":"Kresge Town Hall",
        "areas":"Kresge College",
        "lat":36.998712,
        "lng":-122.066297,
        "type":"Activities"
    },
    "0607000":{
        "id":"0607000",
        "name":"Owl's Nest Cafe",
        "areas":"Kresge College",
        "lat":36.998853,
        "lng":-122.066139,
        "type":"Food To Go"
    },
    "0608000":{
        "id":"0608000",
        "name":"College Programs Office",
        "areas":"Kresge College",
        "lat":36.998727,
        "lng":-122.066067,
        "type":"Student Services"
    },
    "0609000":{
        "id":"0609000",
        "name":"Kresge Computer Room",
        "areas":"Kresge College",
        "lat":36.997622,
        "lng":-122.065783,
        "type":"Academic"
    },
    "0701000":{
        "id":"0701000",
        "name":"Vivas",
        "areas":"Merrill College",
        "lat":37.000156,
        "lng":-122.053374,
        "type":"Dining Hall"
    },
    "0702000":{
        "id":"0702000",
        "name":"Baobab Lounge",
        "areas":"Merrill College",
        "lat":37.000081,
        "lng":-122.053418,
        "type":"Academic"
    },
    "0703000":{
        "id":"0703000",
        "name":"Ming Ong Computer Lab",
        "areas":"Merrill College",
        "lat":36.999728,
        "lng":-122.052379,
        "type":"Academic"
    },
    "0704000":{
        "id":"0704000",
        "name":"Merrill Library",
        "areas":"Merrill College",
        "lat":36.999401,
        "lng":-122.053302,
        "type":"Academic"
    },
    "0705000":{
        "id":"0705000",
        "name":"Cultural Center",
        "areas":"Merrill College",
        "lat":37.000064,
        "lng":-122.053806,
        "type":"Other"
    },
    "0706000":{
        "id":"0706000",
        "name":"KZSC 88.1FM",
        "areas":"Merrill College",
        "lat":37.000627,
        "lng":-122.054123,
        "type":"Other"
    },
    "0707000":{
        "id":"0707000",
        "name":"UCSC Cantú Queer Center",
        "areas":"Merrill College",
        "lat":37.000606,
        "lng":-122.053890,
        "type":"Student Services"
    },
    "0801000":{
        "id":"0801000",
        "name":"Oakes Cafe",
        "areas":"Oakes",
        "lat":36.989227,
        "lng":-122.063303,
        "type":"Food To Go"
    },
    "0802000":{
        "id":"0802000",
        "name":"Oakes Learning Center",
        "areas":"Oakes",
        "lat":36.989308,
        "lng":-122.063325,
        "type":"Student Services"
    },
    "0803000":{
        "id":"0803000",
        "name":"Oakes Library",
        "areas":"Oakes",
        "lat":36.989807,
        "lng":-122.062882,
        "type":"Academic"
    },
    "0804000":{
        "id":"0804000",
        "name":"Oakes Administration & Advising",
        "areas":"Oakes",
        "lat":36.990053,
        "lng":-122.062855,
        "type":"Student Services"
    },
    "0901000":{
        "id":"0901000",
        "name":"Porter/Kresge Dining Hall",
        "areas":"Porter College",
        "lat":36.994276,
        "lng":-122.065903,
        "type":"Dining Hall"
    },
    "0902000":{
        "id":"0902000",
        "name":"Porter/Kresge Housing & Residential Office",
        "areas":"Porter College",
        "lat":36.996563,
        "lng":-122.065731,
        "type":"Student Services"
    },
    "0903000":{
        "id":"0903000",
        "name":"Hitchcock Lounge",
        "areas":"Porter College",
        "lat":36.994501,
        "lng":-122.065820,
        "type":"Other"
    },
    "0904000":{
        "id":"0904000",
        "name":"Bowls by Cafe Brasil",
        "areas":"Porter College",
        "lat":36.994197,
        "lng":-122.065755,
        "type":"Food To Go"
    },
    "0905000":{
        "id":"0905000",
        "name":"Sesnon Art Gallery",
        "areas":"Porter College",
        "lat":36.994006,
        "lng":-122.065178,
        "type":"Other"
    },
    "0906000":{
        "id":"0906000",
        "name":"Porter Computer Lab",
        "areas":"Porter College",
        "lat":36.994272,
        "lng":-122.065199,
        "type":"Academic"
    },
    "0907000":{
        "id":"0907000",
        "name":"Student Activities Office",
        "areas":"Porter College",
        "lat":36.994062,
        "lng":-122.065348,
        "type":"Student Services"
    },
    "1001000":{
        "id":"1001000",
        "name":"Stevenson Coffee House",
        "areas":"Stevenson College",
        "lat":36.997197,
        "lng":-122.052280,
        "type":"Food To Go"
    },
    "1002000":{
        "id":"1002000",
        "name":"Stevenson Event Center",
        "areas":"Stevenson College",
        "lat":36.996954,
        "lng":-122.052247,
        "type":"Activities"
    },
    "1003000":{
        "id":"1003000",
        "name":"Stevenson Library",
        "areas":"Stevenson College",
        "lat":36.997105,
        "lng":-122.051450,
        "type":"Academic"
    },
    "1004000":{
        "id":"1004000",
        "name":"UCSC Catering",
        "areas":"Stevenson College",
        "lat":36.996975,
        "lng":-122.052826,
        "type":"Other"
    },
    "1005000":{
        "id":"1005000",
        "name":"Wagstaff Lounge",
        "areas":"Stevenson College",
        "lat":36.996869,
        "lng":-122.051667,
        "type":"Other"
    },
    "1006000":{
        "id":"1006000",
        "name":"Silverman Conference Room",
        "areas":"Stevenson College",
        "lat":36.997084,
        "lng":-122.051851,
        "type":"Activities"
    },
    "1007000":{
        "id":"1007000",
        "name":"Cultural Arts & Diversity",
        "areas":"Stevenson College",
        "lat":36.997267,
        "lng":-122.052123,
        "type":"Student Services"
    },
    "1008000":{
        "id":"1008000",
        "name":"Hahn Art Faciliy",
        "areas":"Stevenson College",
        "lat":36.997895,
        "lng":-122.052708,
        "type":"Other"
    },
    "1101000":{
        "id":"1101000",
        "name":"Perk Coffee Bar at Baskin Engineering",
        "areas":"Science Hill",
        "lat":37.000551,
        "lng":-122.063005,
        "type":"Food To Go"
    },
    "1102000":{
        "id":"1102000",
        "name":"Film & Digital Media Department",
        "areas":"Science Hill",
        "lat":37.000842,
        "lng":-122.061441,
        "type":"Student Services"
    },
    "1201000":{
        "id":"1201000",
        "name":"Perk Coffee Bar at Physical Sciences",
        "areas":"Science Hill",
        "lat":36.999680,
        "lng":-122.061970,
        "type":"Food To Go"
    },
    "1501000":{
        "id":"1501000",
        "name":"Perk Coffee Bar at Earth & Marine Sciences",
        "areas":"Science Hill",
        "lat":36.997944,
        "lng":-122.059834,
        "type":"Food To Go"
    },
    "1601000":{
        "id":"1601000",
        "name":"Digital Arts & New Media",
        "areas":"Media Theater",
        "lat":36.993883,
        "lng":-122.060756,
        "type":"Academic"
    },
    "1701000":{
        "id":"1701000",
        "name":"Recital Hall",
        "areas":"Department of Music",
        "lat":36.993151,
        "lng":-122.060834,
        "type":"Academic"
    },
    "1801000":{
        "id":"1801000",
        "name":"OPERS Multi-Purpose Room",
        "areas":"OPERS",
        "lat":36.993820,
        "lng":-122.054821,
        "type":"Activities"
    },
    "1802000":{
        "id":"1802000",
        "name":"OPERS Wellness Center",
        "areas":"OPERS",
        "lat":36.993625,
        "lng":-122.054676,
        "type":"Student Services"
    },
    "1803000":{
        "id":"1803000",
        "name":"East Field",
        "areas":"OPERS",
        "lat":36.994028,
        "lng":-122.052710,
        "type":"Activities"
    },
    "1901000":{
        "id":"1901000",
        "name":"International Education Office",
        "areas":"International Education Office",
        "lat":36.997873,
        "lng":-122.056586,
        "type":"Student Services"
    },
    "2001000":{
        "id":"2001000",
        "name":"Global Village Cafe",
        "areas":"McHenry Library",
        "lat":36.996086,
        "lng":-122.059356,
        "type":"Food To Go"
    },
    "2301000":{
        "id":"2301000",
        "name":"Cafe Iveta",
        "areas":"Quarry Plaza",
        "lat":36.998178,
        "lng":-122.055801,
        "type":"Food To Go"
    },
    "2302000":{
        "id":"2302000",
        "name":"Bay Tree Bookstore",
        "areas":"Quarry Plaza",
        "lat":36.998007,
        "lng":-122.055702,
        "type":"Market"
    },
    "2303000":{
        "id":"2303000",
        "name":"Student Union",
        "areas":"Quarry Plaza",
        "lat":36.997930,
        "lng":-122.055915,
        "type":"Student Services"
    },
    "2304000":{
        "id":"2304000",
        "name":"Career Center",
        "areas":"Quarry Plaza",
        "lat":36.997666,
        "lng":-122.055561,
        "type":"Student Services"
    },
    "2305000":{
        "id":"2305000",
        "name":"Express Story",
        "areas":"Quarry Plaza",
        "lat":36.997697,
        "lng":-122.055603,
        "type":"Market"
    }
};