let Bar = require('./bars');
let helpers = require('../api-helpers/google-places');


// "195 Centre St, Brooklyn\nTwo blocks from the Smith-9th (F, G) stops in Carroll Gardens."
// "Monday Closed \nTue–Fri 5–10 \nSaturday Noon–10 \nSunday Noon–6"


let bars = [
  new Bar({
    name: "Other Half Brewing Company",
    type: "Brewery with taproom",
    copy: "Other Half produces some of New York City's most sought after beers, especially New England-style IPAs and interesting Imperial Stouts. The tiny taproom situated close to the BQE in formerly industrial Gowanus also welcomes dogs. On some days, especially on can releases (check their Twitter), the bar taproom is extremely busy and loud, and it might not be the best place for dogs who are uncomfortable in such situations. However, on most days, there is enough space for your furry friend to lounge around, listen to hip-hop music, and watch you drink a triple IPA. At the taproom, you can also pick up their limited release bottles and cans and a bunch of well-designed merchandise.",
    dogPolicy: "Dogs allowed in taproom",
    address: "helpers.getAddress(this.name, this.latitude, this.longitude)",
    hours: "",
    website: "otherhalfbrewing.com",
    latitude: 40.67388,
    longitude: -73.99905
  }),
  new Bar({
    name: "Folksbier Brauerei",
    type: "Brewery with taproom",
    copy: "Folksbier Braurei is a small brewery on a low-key street in Carroll Gardens, very close to the BQE. The dimly lit tap room is decorated in a minimalist, rustic fashion. The beer is poured from elaborate, hand-made tap handles. Even though the tap room serves some snacks, dogs are permitted in the space. Since the place is relatively quiet and relatively spacious, dogs will likely have a good time and not feel too cramped. The beer generally leans to the side of German inspiration, but by no menas limits itself to that.",
    dogPolicy: "Dogs allowed in taproom",
    address: "101 Luquer St, Brooklyn\nA ten minute walk from the Carroll St or Smith-9th (F,G) stops in Carrol Gardens.",
    hours: "Monday 4–11\nTue–Wed Closed\nThursday 4–11\nFriday 4–Midnight\nSaturday Noon–Midnight\nSunday Noon–10",
    website: "folksbier.com",
    latitude: 40.6781,
    longitude: -74.00117
  }),
  new Bar({
    name: "Strong Rope Brewery",
    type: "Brewery with taproom",
    copy: "Strong Rope is a small tap room and brewery on a side-street in Gowanus. The brewery makes English-style beer and prides itself on using as many ingredients from New York State as possible (there is a map which even shows you from where the ingredients are sourced). As an extra plus, there are about 10 beers on tap at all times. The tap room serves no food, but you are free to order food from many restaurants. The brewery is not large, but it is generally quiet and pretty low-key, so canine companions will not be shocked by hectic antics of patrons. There are no bottles yet (although there are bottles of certain liquors they were involved in making), but you can bring a growler and fill it up.",
    dogPolicy: "Dogs allowed in taproom",
    address: "574 President St, Brooklyn\nOne block from the Union St (R) stop in Gowanus.",
    hours: "Mon–Tue Closed\nWed–Thurs 5–10\nFriday 5–11\nSaturday Noon–11\nSunday Noon–8",
    website: "strongropebrewery.com",
    latitude: 40.6768,
    longitude: -73.9841
  }),
  new Bar({
    name: "Finback Brewery",
    type: "Brewery with taproom",
    copy: "Finback Brewing is located very much off the beaten path in an industrial warehouse in the otherwise residential area of Glendale, Queens (driving with dog might be the best way to get there). The huge taproom is very dog friendly, and there are often many dogs hanging out on the concrete floors (some of the dogs are regulars). Like many other brewery taprooms, Finback has many board games available for patrons, as well as cornhole (some dogs really do not like cornhole). The taproom has plenty of taps and they also sell four-packs of cans and single bottles. Humans are free to take the tours, but dogs might have to stay back.",
    dogPolicy: "Dogs allowed in taproom",
    address: "7801 77th Ave, Glendale\nLocated just outside of Ridgewood, this brewery is best accessed by car.",
    hours: "Monday Closed \nWed–Fri 5–10\nSaturday 1–10\nSunday 1–7",
    website: "finbackbrewery.com",
    latitude: 40.70669,
    longitude: -73.87325
  }),
  new Bar({
    name: "Bridge and Tunnel Brewery",
    type: "Brewery with taproom",
    copy: "Located in a remote corner of Ridgewood on the Bushwick border, Bridge and Tunnel is a true-blooded Queens creation. The tap room is built inside an old warehouse, and the owners did not seek to change very much of the appearance from the industrial past. The bar itself looks like that of a neighborhood pub. B&T specializes in making dark beer, often with relatively high alcohol by volume. Fortunately, a pint of this beer is VERY affordable at the tap room. They also only serve free snacks. Dogs are welcome inside and can hang out on the concrete floors watching you get tipsy on a surprisingly drinkable 9% alcohol beer.",
    dogPolicy: "Dogs allowed in taproom",
    address: "15-35 Decatur St, Brooklyn\nFour short blocks from the Halsey (L) stop in Bushwick.",
    hours: "Mon–Thurs Closed\nFriday 5–10\nSaturday 1–9\nSunday 1–9",
    website: "bridgeandtunnelbrewery.com",
    latitude: 40.69382,
    longitude: -73.90283
  }),
  new Bar({
    name: "LIC Beer Project",
    type: "Brewery with taproom",
    copy: "",
    dogPolicy: "Dogs allowed in taproom",
    address: "39-28 23rd St, Long Island City",
    hours: "Mon–Tue Closed\nWednesday 4–9\nThur–Fri 4–11\nSaturday 1–11\nSunday 1–9",
    website: "licbeerproject.com",
    latitude: 40.75492,
    longitude: -73.93922
  }),
  new Bar ({
    name: "Big Alice Brewing",
    type: "Brewery with taproom",
    copy: "Big Alice is located in a very industrial part of Long Island City. Originally, the brewery started out with no tasting room and just selling extremely alcoholic one-offs. However, their brewing ethos has changed and now there is a small tap room and beers are brewed more than one time (they also have less booze, on average). Dogs are welcome to hang out on the floor, but the place can definitely get a little crowded at times. Worth a visit with you canine compatriot, especially because there are so many other dog friendly breweries nearby.",
    dogPolicy: "Dogs allowed in taproom",
    address: "8-08 43rd Rd, Long Island City",
    hours: "Mon–Tue Closed\nWed–Thurs 5–9\nFriday 5–10\nSaturday Noon–10\nSunday Noon–8",
    website: "bigalicebrewing.com",
    latitude: 40.75208,
    longitude: -73.95058
  })
]



bars.forEach((bar, index) => {
  bars[index].hours = helpers.getHours(bar.name, bar.latitude, bar.longitude)
})

module.exports = bars;



