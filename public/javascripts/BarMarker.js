import React from 'react';

export default class BarMarker extends React.Component {

  constructor(props) {
    super(props);
  }

  createMarker() {
    let marker = new mapboxgl.Marker()
      .setLngLat([this.props.longitude, this.props.latitude])
      .addTo(this.props.map);
    return marker;
  }

  render() {
    let barMarker = this.createMarker();
    return (
      <div>

      </div>
    );
  }
}
