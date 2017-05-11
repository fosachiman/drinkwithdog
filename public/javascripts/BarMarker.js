import React from 'react';

export default class BarMarker extends React.Component {

  constructor(props) {
    super(props);

  }

  // createMarker() {
  //   let el = document.createElement('div');
  //   el.className = 'marker';
  //   el.setAttribute('id', this.props.name.replace(/\s/g, '') + '-marker');
  //   let popup = new mapboxgl.Popup({closeButton: false, offset:25})
  //     .setText(this.props.name)
  //   let marker = new mapboxgl.Marker(el, {offset:[-25, -25]})
  //     .setLngLat([this.props.longitude, this.props.latitude])
  //     .setPopup(popup)
  //     .addTo(this.props.map);
  // }

  render() {
    // let barMarker = this.createMarker();
    return (
      <div>

      </div>
    );
  }
}
