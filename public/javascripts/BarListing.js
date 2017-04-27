import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  showMarker() {
  //   let marker = new mapboxgl.Marker()
  //   .setLngLat([this.props.longitude, this.props.latitude])
  //   .addTo(this.props.map);
  //   console.log(this.props.map);
    console.log(this.props.longitude);
    // console.log(marker);
  }


  render() {
    return (
      <div className="bar-listing" onClick={() => {this.showMarker()}}>
        {this.props.name}
      </div>
    );
  }
}
