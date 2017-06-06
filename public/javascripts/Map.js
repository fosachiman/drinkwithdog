import React from 'react';
import BarMenu from './Barmenu';
import SearchBar from './SearchBar';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 'list',
      singleBar: null,
      singleMarker: null,
      closeBars:[]
    }
    this.singleBarView = this.singleBarView.bind(this);
    this.multiBarView = this.multiBarView.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.closeLastMarker = this.closeLastMarker.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.map !== nextProps.map)
      this.getBarDistances(nextProps.map)
  }

  singleBarView(bar, marker) {
    this.setState({ singleBar: bar });
    this.setState({ singleMarker: marker });
    this.setState({ menu: 'bar' });
  }

  multiBarView() {
    this.setState({ menu: 'list' })
  }

  getBarDistances(map) {
    let center = map.getCenter();
    console.log(center);
    let currentLatitude = center.lat;
    console.log(currentLatitude)
    let currentLongitude = center.lng;
    let closeBars = this.props.bars.map((bar) => {
      return {distance: [this.distance(bar.latitude, bar.longitude, currentLatitude, currentLongitude)], bar: bar}
    })
    .sort((a,b) => { return a.distance - b.distance })
    .filter((bar, index) => {
      return index < 7;
    })
    .map((bar) => {
      return bar.bar;
    })
    this.setState({ closeBars })
  }

  //distance calculation copied from StackOverflow (Haverstine Formula Thread)
  distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  createMarker(bar) {
    let el = document.createElement('div');
    el.className = 'marker';
    el.setAttribute('id', bar.name.replace(/\s/g, '') + '-marker');
    let popup = new mapboxgl.Popup({closeButton: false, offset:25})
      .setText(bar.name)
    let marker = new mapboxgl.Marker(el, {offset:[-25, -25]})
      .setLngLat([bar.longitude, bar.latitude])
      .setPopup(popup)
      .addTo(this.props.map);
    el.addEventListener('click', () => this.singleBarView(bar, marker));
      return marker;
  }

  closeLastMarker() {
    if (this.state.singleMarker) {
      let popup = this.state.singleMarker.getPopup();
      if (popup.isOpen())
        this.state.singleMarker.togglePopup();
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <SearchBar
            bars={this.props.bars}
            singleBarView={this.singleBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
            map={this.props.map}
          />
          <BarMenu
            map={this.props.map}
            bars={this.state.closeBars}
            menu={this.state.menu}
            singleBar={this.state.singleBar}
            singleMarker={this.state.singleMarker}
            singleBarView={this.singleBarView}
            multiBarView={this.multiBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
          />
        </div>
      </div>
    );
  }
}
