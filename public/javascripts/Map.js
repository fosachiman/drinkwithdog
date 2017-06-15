import React from 'react';
import BarMenu from './Barmenu';
import SearchBar from './SearchBar';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeBarsAndMarkers: []
    }
    this.createMarker = this.createMarker.bind(this);
    this.closeLastMarker = this.closeLastMarker.bind(this);
    this.getBarDistances = this.getBarDistances.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.map !== nextProps.map) {
      this.getBarDistances(nextProps.map)
    }
  }

  getBarDistances(theMap) {
    let center = theMap.getCenter();
    let currentLatitude = center.lat;
    let currentLongitude = center.lng;
    let closeBarsAndMarkers = this.props.bars.map((bar) => {
      return {distance: [this.distance(bar.latitude, bar.longitude, currentLatitude, currentLongitude)], bar: bar}
    })
    .sort((a,b) => { return a.distance - b.distance })
    .filter((bar, index) => {
      return index < 7;
    })
    .map((bar) => {
      return {bar: bar, marker:this.createMarker(bar.bar, theMap)}
    })
    this.setState({ closeBarsAndMarkers })
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

  createMarker(bar, map) {
    let el = document.createElement('div');
    el.className = 'marker';
    el.setAttribute('id', bar.name.replace(/\s/g, '') + '-marker');
    let popup = new mapboxgl.Popup({closeButton: false, offset:25})
      .setText(bar.name)
    let marker = new mapboxgl.Marker(el, {offset:[-25, -25]})
      .setLngLat([bar.longitude, bar.latitude])
      .setPopup(popup)
      .addTo(map);
    el.addEventListener('click', () => this.props.singleBarView(bar, marker));
    el.addEventListener('mouseenter', () => this.showBarName(marker));
    el.addEventListener('mouseleave', () => this.unShowBarName(marker));
      return marker;
  }

  showBarName(marker) {
    let popup = marker.getPopup();
    if (!popup.isOpen())
      marker.togglePopup();
  }

  unShowBarName(marker) {
    if (marker === this.props.singleMarker && this.props.menu === 'bar') {
      return null;
    }
    let popup = marker.getPopup();
    if (popup.isOpen())
      marker.togglePopup();
  }

  closeLastMarker() {
    if (this.props.singleMarker) {
      let popup = this.props.singleMarker.getPopup();
      if (popup.isOpen())
        this.props.singleMarker.togglePopup();
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <SearchBar
            bars={this.props.bars}
            singleBarView={this.props.singleBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
            map={this.props.map}
            getBarDistances={this.getBarDistances}
            closeBarsAndMarkers={this.state.closeBarsAndMarkers}
          />
          <BarMenu
            map={this.props.map}
            bars={this.state.closeBarsAndMarkers}
            menu={this.props.menu}
            singleBar={this.props.singleBar}
            singleMarker={this.props.singleMarker}
            singleBarView={this.props.singleBarView}
            multiBarView={this.props.multiBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
            setMarkerState={this.setMarkerState}
          />
        </div>
      </div>
    );
  }
}
