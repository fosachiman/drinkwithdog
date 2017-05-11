import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBarClick(bar, marker) {
    this.props.singleBarView(bar);
    this.openPopup(bar, marker);
    this.props.map.flyTo({ center: [this.props.longitude, this.props.latitude] });
  }

  createMarker() {
    let el = document.createElement('div');
    el.className = 'marker';
    el.setAttribute('id', this.props.name.replace(/\s/g, '') + '-marker');
    let popup = new mapboxgl.Popup({closeButton: false, offset:25})
      .setText(this.props.name)
    let marker = new mapboxgl.Marker(el, {offset:[-25, -25]})
      .setLngLat([this.props.longitude, this.props.latitude])
      .setPopup(popup)
      .addTo(this.props.map);
    return marker;
  }

  openPopup(bar, marker) {
    marker.togglePopup();
  }

  render() {
    let barMarker = this.createMarker();
    return (
      <div className="bar-listing" onClick={() => {this.handleBarClick(this.props.bar, barMarker)}}>
        <div className="bar-name">{this.props.name}</div>
        <div className="bar-type">{this.props.type} - </div>
        <div className="dog-policy">{this.props.policy}</div>
      </div>
    );
  }
}
