
var axios = require('axios');
var data = require('../models/data');

function parseText(text) {
  return text.join(', ');
}

module.exports = {
  getHours(name, lat, lng) {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100&keyword=${name}&key=${process.env.GOOGLE}`)
    .then((response) => {
      axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${response.data.results[0].place_id}&key=${process.env.GOOGLE}`)
      .then((response) => {
         return parseText(response.data.result.opening_hours.weekday_text)
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}
