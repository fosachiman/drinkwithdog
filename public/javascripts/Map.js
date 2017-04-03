import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

export default class Map extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      latlng: [50,50]
    }
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9zYWNoaW1hbiIsImEiOiJjajB4eng5M2owMW5sMzJtdGRzNHBjaGxsIn0.yWVExsYazGI3TOlGhLNv-w';
    let location = this.getCurrentPosition();
  }

  getCurrentPosition() {
    let geo = navigator.geolocation;
    geo.getCurrentPosition(this.success, error);
    let error = (err) => {
      console.log(err);
    }
  }

  success(pos) {
    let crd = pos.coords;
    let lat = crd.latitude;
    let lng = crd.longitude;
    this.setState({ latlng: [lng, lat] });
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 13,
      hash: true,
      center: this.state.latlng
    });
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
        </div>
      </div>
    );
  }
}
