const mongoose = require('mongoose');

const barSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  copy: {type: String},
  dogPolicy: {type: String},
  address: {type: String, required: true},
  hours: {type: String},
  website: {type: String},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true}
});

let Bar = mongoose.model("Bar", barSchema);

let otherHalfCopy = "Other Half produces some of New York City's most sought after beers, especially New England-style IPAs and interesting Imperial Stouts. The tiny taproom situated close to the BQE in formerly industrial Gowanus also welcomes dogs. On some days, especially on can releases (check their Twitter), the bar taproom is extremely busy and loud, and it might not be the best place for dogs who are uncomfortable in such situations. However, on most days, there is enough space for your furry friend to lounge around, listen to hip-hop music, and watch you drink a triple IPA. At the taproom, you can also pick up their limited release bottles and cans and a bunch of well-designed merchandise."

let otherHalf = new Bar({
    name: "Other Half Brewing Company",
    type: "Brewery with Taproom",
    copy: otherHalfCopy,
    dogPolicy: "Dogs Allowed in Taproom",
    address: "195 Centre St, Brooklyn Two blocks from the Smith-9th (F, G) stops in Carroll Gardens.",
    hours: "Monday Closed Tue–Fri 5–10 Saturday Noon–10 Sunday Noon–6",
    website: "otherhalfbrewing.com",
    latitude: 40.67388,
    longitude: -73.99905
  })

module.exports = otherHalf;
