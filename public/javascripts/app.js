import React from 'react';
import Map from './Map';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      latlng: [50,50],
      bars: []
    }
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9zYWNoaW1hbiIsImEiOiJjajB4eng5M2owMW5sMzJtdGRzNHBjaGxsIn0.yWVExsYazGI3TOlGhLNv-w';
    let location = this.getCurrentPosition();
    this.getBars();
  }

  getBars() {
    axios.get('api')
    .then((response) => {
      this.setState({ bars: response.data.bars })
    })
    .catch((error) => {
      console.log(error);
    })
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
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 13,
      hash: true,
      center: this.state.latlng
    });
    this.setState({ map });
  }

  render() {
    return (
      <div>
        <Map map={this.state.map} latlng={this.state.latlng} bars={this.state.bars}/>
      </div>
    );
  }
}

