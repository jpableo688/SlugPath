//this is an array of nodes objects in json.
//I already loaded it into nodes and saved it as
//js because we would have to do XMLHttpRequest.
//var nodes = [{this is json}].
//everything between the brackets is json.
var nodes = 
[
  {
    "id": 100000,
    "name": "Rachel Carson College",
    "area": "Rachel Carson College",
    "latitude": 36.991519,
    "longitude": -122.064845,
    "type": "Residential"
  },
  {
    "id": 200000,
    "name": "College 9",
    "area": "College 9 & 10",
    "latitude": 37.001536,
    "longitude": -122.057328,
    "type": "Residential"
  },
  {
    "id": 300000,
    "name": "College 10",
    "area": "College 9 & 10",
    "latitude": 37.000545,
    "longitude": -122.057994,
    "type": "Residential"
  },
  {
    "id": 400000,
    "name": "Cowell College",
    "area": "Cowell College",
    "latitude": 36.99709,
    "longitude": -122.054324,
    "type": "Residential"
  },
  {
    "id": 500000,
    "name": "Crown College",
    "area": "Crown College",
    "latitude": 37,
    "longitude": -122.054592,
    "type": "Residential"
  },
  {
    "id": 600000,
    "name": "Kresge College",
    "area": "Kresge College",
    "latitude": 36.997376,
    "longitude": -122.066755,
    "type": "Residential"
  },
  {
    "id": 700000,
    "name": "Merrill College",
    "area": "Merrill College",
    "latitude": 36.999826,
    "longitude": -122.053284,
    "type": "Residential"
  },
  {
    "id": 800000,
    "name": "Oakes College",
    "area": "Oakes College",
    "latitude": 36.989404,
    "longitude": -122.064069,
    "type": "Residential"
  },
  {
    "id": 900000,
    "name": "Porter College",
    "area": "Porter College",
    "latitude": 36.994903,
    "longitude": -122.065389,
    "type": "Residential"
  },
  {
    "id": 1000000,
    "name": "Stevenson College",
    "area": "Stevenson College",
    "latitude": 36.99747,
    "longitude": -122.05209,
    "type": "Residential"
  },
  {
    "id": 1100000,
    "name": "Jack Baskin School of Engineering",
    "area": "Science Hill",
    "latitude": 37.00072,
    "longitude": -122.063096,
    "type": "Academic"
  },
  {
    "id": 1200000,
    "name": "Physical Sciences Building",
    "area": "Science Hill",
    "latitude": 36.999605,
    "longitude": -122.062029,
    "type": "Academic"
  },
  {
    "id": 1300000,
    "name": "Department of Chemistry & Biochemistry",
    "area": "Science Hill",
    "latitude": 36.999541,
    "longitude": -122.062132,
    "type": "Academic"
  },
  {
    "id": 1400000,
    "name": "Science & Engineering Library",
    "area": "Science Hill",
    "latitude": 36.999013,
    "longitude": -122.060636,
    "type": "Academic"
  },
  {
    "id": 1500000,
    "name": "Earth & Marine Sciences",
    "area": "Science Hill",
    "latitude": 36.99806,
    "longitude": -122.059596,
    "type": "Academic"
  },
  {
    "id": 1600000,
    "name": "Media Theater",
    "area": "Media Theater",
    "latitude": 36.994847,
    "longitude": -122.06196,
    "type": "Academic"
  },
  {
    "id": 1700000,
    "name": "Department of Music",
    "area": "Department of Music",
    "latitude": 36.993059,
    "longitude": -122.060619,
    "type": "Academic"
  },
  {
    "id": 1800000,
    "name": "OPERS",
    "area": "OPERS",
    "latitude": 36.994411,
    "longitude": -122.055063,
    "type": "Activities"
  },
  {
    "id": 1900000,
    "name": "Classroom Unit",
    "area": "Classroom Unit",
    "latitude": 36.997865,
    "longitude": -122.05718,
    "type": "Academic"
  },
  {
    "id": 2000000,
    "name": "McHenry Library",
    "area": "McHenry Library",
    "latitude": 36.995744,
    "longitude": -122.05915,
    "type": "Academic"
  },
  {
    "id": 2100000,
    "name": "Student Health Center",
    "area": "Student Health Center",
    "latitude": 36.9995522,
    "longitude": -122.0577115,
    "type": "Student Services"
  },
  {
    "id": 2200000,
    "name": "Kerr Hall",
    "area": "Kerr Hall",
    "latitude": 36.997,
    "longitude": -122.06204,
    "type": "Academic"
  },
  {
    "id": 2300000,
    "name": "Quarry Amphitheater",
    "area": "Quarry Plaza",
    "latitude": 36.998589,
    "longitude": -122.056024,
    "type": "Activities"
  },
  {
    "id": 101000,
    "name": "Rachel Carson/Oakes Dining Hall",
    "area": "Rachel Carson College",
    "latitude": 36.991493,
    "longitude": -122.065283,
    "type": "Dining Hall"
  },
  {
    "id": 102000,
    "name": "ResNet",
    "area": "Rachel Carson College",
    "latitude": 36.992149,
    "longitude": -122.065012,
    "type": "Student Services"
  },
  {
    "id": 103000,
    "name": "College Eight Cafe",
    "area": "Rachel Carson College",
    "latitude": 36.991527,
    "longitude": -122.064551,
    "type": "Food To Go"
  },
  {
    "id": 104000,
    "name": "West Field House",
    "area": "Rachel Carson College",
    "latitude": 36.991506,
    "longitude": -122.063883,
    "type": "Activities"
  },
  {
    "id": 105000,
    "name": "Red Room",
    "area": "Rachel Carson College",
    "latitude": 36.991306,
    "longitude": -122.06477,
    "type": "Other"
  },
  {
    "id": 106000,
    "name": "Rachel Carson & Oakes Residential Life",
    "area": "Rachel Carson College",
    "latitude": 36.990977,
    "longitude": -122.064736,
    "type": "Student Services"
  },
  {
    "id": 201000,
    "name": "College 9 & 10 Dining Hall",
    "area": "College 9 & 10",
    "latitude": 37.000731,
    "longitude": -122.057769,
    "type": "Dining Hall"
  },
  {
    "id": 202000,
    "name": "Terry Fresca Restaurant & Coffee Bar",
    "area": "College 9 & 10",
    "latitude": 37.000978,
    "longitude": -122.057736,
    "type": "Dining Hall"
  },
  {
    "id": 203000,
    "name": "Terry Frietas Cafe",
    "area": "College 9 & 10",
    "latitude": 37.0003468,
    "longitude": -122.057966,
    "type": "Food To Go"
  },
  {
    "id": 204000,
    "name": "Recreational Lounge",
    "area": "College 9 & 10",
    "latitude": 37.0006144,
    "longitude": -122.0577187,
    "type": "Activities"
  },
  {
    "id": 205000,
    "name": "Namaste Lounge",
    "area": "College 9 & 10",
    "latitude": 37.0007468,
    "longitude": -122.0571587,
    "type": "Activities"
  },
  {
    "id": 206000,
    "name": "College 9 & 10 Residential Life",
    "area": "College 9 & 10",
    "latitude": 37.001422,
    "longitude": -122.05699,
    "type": "Student Services"
  },
  {
    "id": 207000,
    "name": "Social Science 1",
    "area": "College 9 & 10",
    "latitude": 37.002115,
    "longitude": -122.05803,
    "type": "Academic"
  },
  {
    "id": 208000,
    "name": "Social Science 2",
    "area": "College 9 & 10",
    "latitude": 37.001527,
    "longitude": -122.058747,
    "type": "Academic"
  },
  {
    "id": 209000,
    "name": "College 9 & 10 Multi-Purpose Room",
    "area": "College 9 & 10",
    "latitude": 37.000767,
    "longitude": -122.057835,
    "type": "Activities"
  },
  {
    "id": 210000,
    "name": "College 9 & 10 Lounge Room",
    "area": "College 9 & 10",
    "latitude": 37.000618,
    "longitude": -122.057719,
    "type": "Activities"
  },
  {
    "id": 211000,
    "name": "College 9 & 10 Community Room",
    "area": "College 9 & 10",
    "latitude": 37.002229,
    "longitude": -122.059317,
    "type": "Activities"
  },
  {
    "id": 401000,
    "name": "Page Smith Library",
    "area": "Cowell College",
    "latitude": 36.996893,
    "longitude": -122.053601,
    "type": "Academic"
  },
  {
    "id": 402000,
    "name": "Cowell/Stevenson Dining Hall",
    "area": "Cowell College",
    "latitude": 36.996826,
    "longitude": -122.053062,
    "type": "Dining Hall"
  },
  {
    "id": 403000,
    "name": "Cowell Coffee Shop",
    "area": "Cowell College",
    "latitude": 36.997162,
    "longitude": -122.053062,
    "type": "Food To Go"
  },
  {
    "id": 404000,
    "name": "Cowell College Administration",
    "area": "Cowell College",
    "latitude": 36.997316,
    "longitude": -122.053515,
    "type": "Student Services"
  },
  {
    "id": 405000,
    "name": "Mary Holmes Lounge",
    "area": "Cowell College",
    "latitude": 36.997042,
    "longitude": -122.053071,
    "type": "Other"
  },
  {
    "id": 406000,
    "name": "Cowell Computer Lab",
    "area": "Cowell College",
    "latitude": 36.997008,
    "longitude": -122.055111,
    "type": "Academic"
  },
  {
    "id": 407000,
    "name": "Eloise Pickard Smith Gallery",
    "area": "Cowell College",
    "latitude": 36.997036,
    "longitude": -122.052881,
    "type": "Other"
  },
  {
    "id": 501000,
    "name": "Crown/Merrill Dining Hall",
    "area": "Crown College",
    "latitude": 37.000126,
    "longitude": -122.054424,
    "type": "Dining Hall"
  },
  {
    "id": 502000,
    "name": "Banana Joe's",
    "area": "Crown College",
    "latitude": 36.999989,
    "longitude": -122.054432,
    "type": "Food To Go"
  },
  {
    "id": 503000,
    "name": "Crown Lounge",
    "area": "Crown College",
    "latitude": 37.000116,
    "longitude": -122.054575,
    "type": "Other"
  },
  {
    "id": 504000,
    "name": "Crown Library",
    "area": "Crown College",
    "latitude": 36.999844,
    "longitude": -122.054801,
    "type": "Academic"
  },
  {
    "id": 505000,
    "name": "Crown Computer Lab",
    "area": "Crown College",
    "latitude": 36.999844,
    "longitude": -122.054801,
    "type": "Academic"
  },
  {
    "id": 601000,
    "name": "Porter/Kresge Housing & Residential Office",
    "area": "Kresge College",
    "latitude": 36.996563,
    "longitude": -122.065731,
    "type": "Student Services"
  },
  {
    "id": 602000,
    "name": "Kresge Lounge",
    "area": "Kresge College",
    "latitude": 36.997492,
    "longitude": -122.067002,
    "type": "Other"
  },
  {
    "id": 603000,
    "name": "Kresge Food Co-Op",
    "area": "Kresge College",
    "latitude": 36.997329,
    "longitude": -122.06578,
    "type": "Market"
  },
  {
    "id": 604000,
    "name": "STARS",
    "area": "Kresge College",
    "latitude": 36.997488,
    "longitude": -122.066416,
    "type": "Student Services"
  },
  {
    "id": 605000,
    "name": "Housing & Student Life Office",
    "area": "Kresge College",
    "latitude": 36.998526,
    "longitude": -122.066434,
    "type": "Student Services"
  },
  {
    "id": 606000,
    "name": "Kresge Town Hall",
    "area": "Kresge College",
    "latitude": 36.998712,
    "longitude": -122.066297,
    "type": "Activities"
  },
  {
    "id": 607000,
    "name": "Owl's Nest Cafe",
    "area": "Kresge College",
    "latitude": 36.998853,
    "longitude": -122.066139,
    "type": "Food To Go"
  },
  {
    "id": 608000,
    "name": "College Programs Office",
    "area": "Kresge College",
    "latitude": 36.998727,
    "longitude": -122.066067,
    "type": "Student Services"
  },
  {
    "id": 609000,
    "name": "Kresge Computer Room",
    "area": "Kresge College",
    "latitude": 36.997622,
    "longitude": -122.065783,
    "type": "Academic"
  },
  {
    "id": 701000,
    "name": "Vivas",
    "area": "Merrill College",
    "latitude": 37.000156,
    "longitude": -122.053374,
    "type": "Dining Hall"
  },
  {
    "id": 702000,
    "name": "Baobab Lounge",
    "area": "Merrill College",
    "latitude": 37.000081,
    "longitude": -122.053418,
    "type": "Academic"
  },
  {
    "id": 703000,
    "name": "Ming Ong Computer Lab",
    "area": "Merrill College",
    "latitude": 36.999728,
    "longitude": -122.052379,
    "type": "Academic"
  },
  {
    "id": 704000,
    "name": "Merrill Library",
    "area": "Merrill College",
    "latitude": 36.999401,
    "longitude": -122.053302,
    "type": "Academic"
  },
  {
    "id": 705000,
    "name": "Cultural Center",
    "area": "Merrill College",
    "latitude": 37.000064,
    "longitude": -122.053806,
    "type": "Other"
  },
  {
    "id": 706000,
    "name": "KZSC 88.1FM",
    "area": "Merrill College",
    "latitude": 37.000627,
    "longitude": -122.054123,
    "type": "Other"
  },
  {
    "id": 707000,
    "name": "UCSC Cantú Queer Center",
    "area": "Merrill College",
    "latitude": 37.000606,
    "longitude": -122.05389,
    "type": "Student Services"
  },
  {
    "id": 801000,
    "name": "Oakes Cafe",
    "area": "Oakes",
    "latitude": 36.989227,
    "longitude": -122.063303,
    "type": "Food To Go"
  },
  {
    "id": 802000,
    "name": "Oakes Learning Center",
    "area": "Oakes",
    "latitude": 36.989308,
    "longitude": -122.063325,
    "type": "Student Services"
  },
  {
    "id": 803000,
    "name": "Oakes Library",
    "area": "Oakes",
    "latitude": 36.989807,
    "longitude": -122.062882,
    "type": "Academic"
  },
  {
    "id": 804000,
    "name": "Oakes Administration & Advising",
    "area": "Oakes",
    "latitude": 36.990053,
    "longitude": -122.062855,
    "type": "Student Services"
  },
  {
    "id": 901000,
    "name": "Porter/Kresge Dining Hall",
    "area": "Porter College",
    "latitude": 36.994276,
    "longitude": -122.065903,
    "type": "Dining Hall"
  },
  {
    "id": 902000,
    "name": "Porter/Kresge Housing & Residential Office",
    "area": "Porter College",
    "latitude": 36.996563,
    "longitude": -122.065731,
    "type": "Student Services"
  },
  {
    "id": 903000,
    "name": "Hitchcock Lounge",
    "area": "Porter College",
    "latitude": 36.994501,
    "longitude": -122.06582,
    "type": "Other"
  },
  {
    "id": 904000,
    "name": "Bowls by Cafe Brasil",
    "area": "Porter College",
    "latitude": 36.994197,
    "longitude": -122.065755,
    "type": "Food To Go"
  },
  {
    "id": 905000,
    "name": "Sesnon Art Gallery",
    "area": "Porter College",
    "latitude": 36.994006,
    "longitude": -122.065178,
    "type": "Other"
  },
  {
    "id": 906000,
    "name": "Porter Computer Lab",
    "area": "Porter College",
    "latitude": 36.994272,
    "longitude": -122.065199,
    "type": "Academic"
  },
  {
    "id": 907000,
    "name": "Student Activities Office",
    "area": "Porter College",
    "latitude": 36.994062,
    "longitude": -122.065348,
    "type": "Student Services"
  },
  {
    "id": 1001000,
    "name": "Stevenson Coffee House",
    "area": "Stevenson College",
    "latitude": 36.997197,
    "longitude": -122.05228,
    "type": "Food To Go"
  },
  {
    "id": 1002000,
    "name": "Stevenson Event Center",
    "area": "Stevenson College",
    "latitude": 36.996954,
    "longitude": -122.052247,
    "type": "Activities"
  },
  {
    "id": 1003000,
    "name": "Stevenson Library",
    "area": "Stevenson College",
    "latitude": 36.997105,
    "longitude": -122.05145,
    "type": "Academic"
  },
  {
    "id": 1004000,
    "name": "UCSC Catering",
    "area": "Stevenson College",
    "latitude": 36.996975,
    "longitude": -122.052826,
    "type": "Other"
  },
  {
    "id": 1005000,
    "name": "Wagstaff Lounge",
    "area": "Stevenson College",
    "latitude": 36.996869,
    "longitude": -122.051667,
    "type": "Other"
  },
  {
    "id": 1006000,
    "name": "Silverman Conference Room",
    "area": "Stevenson College",
    "latitude": 36.997084,
    "longitude": -122.051851,
    "type": "Activities"
  },
  {
    "id": 1007000,
    "name": "Cultural Arts & Diversity",
    "area": "Stevenson College",
    "latitude": 36.997267,
    "longitude": -122.052123,
    "type": "Student Services"
  },
  {
    "id": 1008000,
    "name": "Hahn Art Faciliy",
    "area": "Stevenson College",
    "latitude": 36.997895,
    "longitude": -122.052708,
    "type": "Other"
  },
  {
    "id": 1101000,
    "name": "Perk Coffee Bar at Baskin Engineering",
    "area": "Science Hill",
    "latitude": 37.000551,
    "longitude": -122.063005,
    "type": "Food To Go"
  },
  {
    "id": 1102000,
    "name": "Film & Digital Media Department",
    "area": "Science Hill",
    "latitude": 37.000842,
    "longitude": -122.061441,
    "type": "Student Services"
  },
  {
    "id": 1201000,
    "name": "Perk Coffee Bar at Physical Sciences",
    "area": "Science Hill",
    "latitude": 36.99968,
    "longitude": -122.06197,
    "type": "Food To Go"
  },
  {
    "id": 1501000,
    "name": "Perk Coffee Bar at Earth & Marine Sciences",
    "area": "Science Hill",
    "latitude": 36.997944,
    "longitude": -122.059834,
    "type": "Food To Go"
  },
  {
    "id": 1601000,
    "name": "Digital Arts & New Media",
    "area": "Media Theater",
    "latitude": 36.993883,
    "longitude": -122.060756,
    "type": "Academic"
  },
  {
    "id": 1701000,
    "name": "Recital Hall",
    "area": "Department of Music",
    "latitude": 36.993151,
    "longitude": -122.060834,
    "type": "Academic"
  },
  {
    "id": 1801000,
    "name": "OPERS Multi-Purpose Room",
    "area": "OPERS",
    "latitude": 36.99382,
    "longitude": -122.054821,
    "type": "Activities"
  },
  {
    "id": 1802000,
    "name": "OPERS Wellness Center",
    "area": "OPERS",
    "latitude": 36.993625,
    "longitude": -122.054676,
    "type": "Student Services"
  },
  {
    "id": 1803000,
    "name": "East Field",
    "area": "OPERS",
    "latitude": 36.994028,
    "longitude": -122.05271,
    "type": "Activities"
  },
  {
    "id": 1901000,
    "name": "International Education Office",
    "area": "",
    "latitude": 36.997873,
    "longitude": -122.056586,
    "type": "Student Services"
  },
  {
    "id": 2001000,
    "name": "Global Village Cafe",
    "area": "McHenry Library",
    "latitude": 36.996086,
    "longitude": -122.059356,
    "type": "Food To Go"
  },
  {
    "id": 2301000,
    "name": "Cafe Iveta",
    "area": "Quarry Plaza",
    "latitude": 36.998178,
    "longitude": -122.055801,
    "type": "Food To Go"
  },
  {
    "id": 2302000,
    "name": "Bay Tree Bookstore",
    "area": "Quarry Plaza",
    "latitude": 36.998007,
    "longitude": -122.055702,
    "type": "Market"
  },
  {
    "id": 2303000,
    "name": "Student Union",
    "area": "Quarry Plaza",
    "latitude": 36.99793,
    "longitude": -122.055915,
    "type": "Student Services"
  },
  {
    "id": 2304000,
    "name": "Career Center",
    "area": "Quarry Plaza",
    "latitude": 36.997666,
    "longitude": -122.055561,
    "type": "Student Services"
  },
  {
    "id": 2305000,
    "name": "Express Story",
    "area": "Quarry Plaza",
    "latitude": 36.997697,
    "longitude": -122.055603,
    "type": "Market"
  }
]
;