let Bar = require('./bars');
let helpers = require('../api-helpers/google-places');
var mongoose = require('mongoose');
var db = mongoose.connection;


let bars = [
 new Bar({
    name: "Other Half Brewing Company",
    type: "Brewery with taproom",
    copy: "Other Half produces some of New York City's most sought after beers, especially New England-style IPAs and interesting Imperial Stouts. The tiny taproom situated close to the BQE in formerly industrial Gowanus also welcomes dogs. On some days, especially on can releases (check their Twitter), the bar taproom is extremely busy and loud, and it might not be the best place for dogs who are uncomfortable in such situations. However, on most days, there is enough space for your furry friend to lounge around, listen to hip-hop music, and watch you drink a triple IPA. At the taproom, you can also pick up their limited release bottles and cans and a bunch of well-designed merchandise.",
    dogPolicy: "Dogs allowed in taproom",
    address: "195 Centre St, Brooklyn\nTwo blocks from the Smith-9th (F, G) stops in Carroll Gardens.",
    hours: "Monday Closed \nTue–Fri 5–10 \nSaturday Noon–10 \nSunday Noon–6",
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
  new Bar({
    name: "Big Alice Brewing",
    type: "Brewery with taproom",
    copy: "Big Alice is located in a very industrial part of Long Island City. Originally, the brewery started out with no tasting room and just selling extremely alcoholic one-offs. However, their brewing ethos has changed and now there is a small tap room and beers are brewed more than one time (they also have less booze, on average). Dogs are welcome to hang out on the floor, but the place can definitely get a little crowded at times. Worth a visit with you canine compatriot, especially because there are so many other dog friendly breweries nearby.",
    dogPolicy: "Dogs allowed in taproom",
    address: "8-08 43rd Rd, Long Island City",
    hours: "Mon–Tue Closed\nWed–Thurs 5–9\nFriday 5–10\nSaturday Noon–10\nSunday Noon–8",
    website: "bigalicebrewing.com",
    latitude: 40.75208,
    longitude: -73.95058
  }),
  new Bar({
    name: "Transmitter Brewing",
    type: "Brewery with tasting samples",
    copy: "Transmitter is tucked away under a bridge in the industrial part of Long Island City, Queens. It is not exactly an easy place to get to, but it is the only dedicated exclusively farmhouse brewery in the five boroughs. The brewery does not have a traditional tasting room with taps, but rather gives you small tastings from a bottle in a very tiny room. You are then allowed to purchase a bottle and either drink it on premises or take it home and drink it there. Usually, there are about three bottles to choose from. Dogs are allowed, as the bar aspect of this place is very bare bones.",
    dogPolicy: "Dogs allowed in tasting room",
    address: "53-02 11th St, Long Island City",
    hours: "Mon–Thurs Closed\nFriday 4–8\nSaturday Noon–8\nSunday Noon–6",
    website: "transmitterbrew.com",
    latitude: 40.74023,
    longitude: -73.9527
  }),
  new Bar({
    name: "Gun Hill Brewing Company",
    type: "Brewery with taproom",
    copy: "",
    dogPolicy: "Dogs allowed in taproom",
    address: "3227 Laconia Ave, Bronx",
    hours: "Mon–Wed 2:30–9\nThursday\t1–11\nFriday 1–Midnight\nSaturday Noon–Midnight\nSunday Noon–10",
    website: "gunhillbrewing.com",
    latitude: 40.87212,
    longitude: -73.8559
  }),
  new Bar({
    name: "Kings County Brewers Collective",
    type: "Brewery with taproom",
    copy: "Kings County Brewers Collective, or KCBC for short, is a shiny new brewery close to the Jefferson stop in Bushwick. The brewery is usually hopping with lots of people, even some who look like they came from outside of Bushwick. Occasionally, this place is also hopping with hopping dogs watching you drink your boozy hop juice. As with many other breweries, there are board games and picnic tables. Sometimes, there are secret sour beers, which you may need ot ask about. Also, food is actually served in this location, but it is not served by the brewery, but rather by a rotating selection of gourmet food pop-ups. The food is good. The beer is good. Humans and dogs are both happy.",
    dogPolicy: "Dogs allowed in taproom",
    address: "381 Troutman St, Brooklyn",
    hours: "Monday Closed\nTue–Thurs 5–10\nFriday 5–11\nSaturday Noon–11\nSunday Noon–8",
    website: "kcbcbeer.com",
    latitude: 40.70606,
    longitude: -73.92369
  }),
  new Bar({
    name: "Coney Island Brewing Company",
    type: "Brewery with taproom",
    copy: "Far away from most other breweries, although quite accessible by subway, Coney Island Brewing Company is a hole in the wall of the Coney Island Cyclones' stadium. Coney Island used to be a contract brewer, but recently was acquired by Boston Beer Company (Samuel Adams), and now, they have opened up a very small brewery. Fortunately, this very small, very narrow taproom lets you bring your dog to provide you with moral support while you sample some Coney Island beers that you can't exactly find in any bodega in Brooklyn; you are, however, able to sample some of their flagship beers on tap at the location. During better weather, there is a pretty large outdoor space (of course your canine companion is welcome there).",
    dogPolicy: "Dogs allowed in taproom",
    address: "1904 Surf Ave, Brooklyn",
    hours: "Mon–Tue Closed\nWednesday Noon–6\nThurs-Sun Noon–8",
    website: "coneyislandbeer.com",
    latitude: 40.57476,
    longitude: -73.98483
  }),
  new Bar({
    name: "The Bronx Brewery",
    type: "Brewery with taproom",
    copy: "",
    dogPolicy: "Dogs allowed in outdoor space",
    address: "856 E 136th St, Bronx",
    hours: "Mon–Wed 3–7\nThurs–Fri 3–8\nSaturday Noon–8\nSunday Noon–7",
    website: "thebronxbrewery.com",
    latitude: 40.8019,
    longitude: -73.91059
  }),
  new Bar({
    name: "Departed Soles Brewing Company",
    type: "Brewery with taproom",
    copy: "This is a strange little brewery located deep within a building. You have to walk through a gelato parlor to get inside. Inside, the aesthetic is 1990s hip-hop, subways from the 1980s, and fancy sneakers. The bar features gluten-free beer as the deceased best friend of the brewer was a celiac (and a sneakerhead... hence Departed Soles). That said, they also have non-gluten free beer. The beers are affordable and flights are available. Dogs are certainly allowed inside. No food is sold at the place, but as I pointed out, you literally have to walk through a food dealer to get inside. Mini tours through the tiny brewery are available (although unlike most NJ breweries, you don't have to take the tour in order to drink).",
    dogPolicy: "Dogs allowed in taproom",
    address: "150 Bay St #2a, Jersey City",
    hours: "Mon–Wed Closed\nThurs–Fri 4–9\nSaturday 2–9\nSunday 2–7",
    website: "departedsoles.com",
    latitude: 40.72102,
    longitude: -74.03994
  }),
  new Bar({
    name: "The Flagship Brewing Company",
    type: "Brewery with taproom",
    copy: "Staten Island was, for the longest time, the least brewery-full borough. Fortunately, Flagship Brewery (and Staten Island Brewing Company) has started to change that. Fortunately, this brewery is located very close to the Staten Island Ferry in a nondescript industrial building, which you must enter through a backstreet. The taproom space is quite large with a very standard set-up of picnic tables and board games. They even periodically announce bingo numbers... or at least they did when we were there. There are a number of beers on tap that usually work with the more traditional styles. That said, they are good, and there is plenty of space for your four-legged, non-feline companion to explore Richmond County.",
    dogPolicy: "Dogs allowed in taproom",
    address: "40 Minthorne St, Staten Island",
    hours: "Mon–Wed Closed\nThurs–Sat Noon–Midnight\nSunday Noon–8",
    website: "theflagshipbrewery.com",
    latitude: 40.63723,
    longitude: -74.07565
  }),
  new Bar({
    name: "Lineup Brewing",
    type: "Brewery with taproom",
    copy: "Coming in 2017",
    dogPolicy: "Dogs allowed in taproom",
    address: "33 35th St. #6A, Brooklyn",
    hours: "TBA",
    website: "lineupbrewing.com/",
    latitude: 40.65728,
    longitude: -74.00751
  }),
  new Bar({
    name: "The Owl Farm",
    type: "Bar with craft beer",
    copy: "",
    dogPolicy: "Dogs allowed in bar until 6pm",
    address: "297 9th St, Brooklyn",
    hours: "Mon–Fri 2–4AM\nSat–Sun 12:30PM–4AM",
    website: "theowlfarm.com",
    latitude: 40.66957,
    longitude: -73.98661
  }),
  new Bar({
    name: "Pine Box Rock Shop",
    type: "Bar with craft beer",
    copy: "",
    dogPolicy: "Dogs allowed in bar",
    address: "",
    hours: "Mon–Tue 4–2AM\nWed–Fri 4–4AM\nSaturday 2–4AM\nSunday 2–2AM",
    website: "pineboxrockshop.com",
    latitude: 40.70527,
    longitude: -73.93267
  }),
  new Bar({
    name: "Precious Metal",
    type: "Bar with craft beer",
    copy: "",
    dogPolicy: "Dogs allowed in bar",
    address: "143 Troutman St, Brooklyn",
    hours: "Mon–Tue 4–2AM\nWed–Fri 4-4AM\nSaturday 2–4AM\nSunday 2–Midnight",
    website: "",
    latitude: 40.70008,
    longitude: -73.92958
  }),
  new Bar({
    name: "Bar Great Harry",
    type: "Bar with craft beer",
    copy: "",
    dogPolicy: "Dogs allowed in bar",
    address: "280 Smith St, Brooklyn",
    hours: "Mon–Fri 2–4AM\nSat–Sun 12:30PM–4AM",
    website: "bargreatharry.com",
    latitude: 40.68239,
    longitude: -73.99355
  })
  // new Bar({
  //   name: "Lantern Hall",
  //   type: "Bar with craft beer",
  //   copy: "",
  //   dogPolicy: "Dogs allowed in bar",
  //   address: "",
  //   hours: "",
  //   website: "",
  //   latitude: 40.70626,
  //   longitude: -73.93136
  // }),
  // new Bar({
  //   name: "Mission Dolores",
  //   type: "Bar with craft beer",
  //   copy: "",
  //   dogPolicy: "Dogs allowed in bar",
  //   address: "",
  //   hours: "",
  //   website: "",
  //   latitude: 40.67618,
  //   longitude: -73.98343
  // }),
  // new Bar({
  //   name: "Nowadays",
  //   type: "Outdoor space with cans",
  //   copy: "",
  //   dogPolicy: "Dogs allowed on premises",
  //   address: "",
  //   hours: "",
  //   website: "",
  //   latitude: 40.69252,
  //   longitude: -73.90158
  // })
]

// THIS CODE ADDS ALL BARS TO DATABASE
function updateBars(barData) {
  barData.forEach((bar) => {
    Bar.create(bar, function (err, barData) {
      if (err) return console.error(err);
        console.log(barData);
    })
  })
}

let promise = new Promise((resolve, reject) => {
  let promiseCounter = 0;
  bars.forEach((bar, index) => {
    helpers.getHours(bar.name, bar.latitude, bar.longitude)
    .then((result) => {
      bar.hours = result
      promiseCounter++
      if (bars.length === promiseCounter)
        resolve()
    })
  })
})

promise.then(() => {
  updateBars(bars);
  console.log('ok');
})

promise.catch((err) => {
  console.log(err)
})


module.exports = bars;



