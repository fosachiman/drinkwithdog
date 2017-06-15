import React from 'react';
import Map from './Map';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      latlng: [50,50],
      bars: [],
      singleBar: null,
      singleMarker: null,
      menu: 'list'
    }
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.singleBarView = this.singleBarView.bind(this);
    this.multiBarView = this.multiBarView.bind(this);
    this.getBars = this.getBars.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9zYWNoaW1hbiIsImEiOiJjajB4eng5M2owMW5sMzJtdGRzNHBjaGxsIn0.yWVExsYazGI3TOlGhLNv-w';
    this.getBars();
  }

  getBars() {
    axios.get('api')
    .then((response) => {
      this.setState({ bars: response.data.bars })
    }).then(() => this.getCurrentPosition())
    .catch((error) => {
      console.log(error);
    })
  }

  getCurrentPosition() {
    let geo = navigator.geolocation;
    // let geoOptions = {
    //   maximumAge: 5 * 60 * 1000,
    //   timeout: 10 * 1000
    // }
    geo.getCurrentPosition(this.success, this.error);
  }

  error(err) {
    console.log(err)
    this.setState({ latlng: [-73.999, 40.673]})
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 11,
      center: this.state.latlng
    });
    this.setState({ map })
  }

  success(pos) {
    let crd = pos.coords;
    let lat = crd.latitude;
    let lng = crd.longitude;
    this.setState({ latlng: [lng, lat] });
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 14,
      center: this.state.latlng
    });
    // let geoLocateControl = map.addControl(new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //       enableHighAccuracy: true,
    //   },
    //   trackUserLocation: {
    //     showUserLocation: true,
    //     trackUserLocation: true
    //   }
    // }));
    // console.log(geoLocateControl)
    this.setState({ map });
  }

  singleBarView(bar, marker) {
    let popup = marker.getPopup();
    if (popup.isOpen())
      marker.togglePopup();
    this.setState({ singleBar: bar });
    this.setState({ singleMarker: marker });
    this.setState({ menu: 'bar' });
  }

  multiBarView() {
    this.setState({ menu: 'list' })
  }

  render() {
    return (
      <div>
        <Map
          map={this.state.map}
          latlng={this.state.latlng}
          bars={this.state.bars}
          singleBarView={this.singleBarView}
          multiBarView={this.multiBarView}
          singleBar={this.state.singleBar}
          singleMarker={this.state.singleMarker}
          menu={this.state.menu}
          getBars={this.getBars}/>
      </div>
    );
  }
}

