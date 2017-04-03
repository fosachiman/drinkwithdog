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

module.exports = Bar;
