import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBarClick(bar, marker) {
    this.props.closeLastMarker()
    this.props.singleBarView(bar, marker);
    this.openPopup(marker);
    this.props.map.flyTo({ center: [this.props.longitude, this.props.latitude] });
  }

  openPopup(marker) {
    marker.togglePopup();
  }

  render() {
    return (
      <div className="bar-listing" onClick={() => {this.handleBarClick(this.props.bar, this.props.marker)}}>
        <div className="bar-name">{this.props.name}</div>
        <div className="bar-type">{this.props.type} - </div>
        <div className="dog-policy">{this.props.policy}</div>
      </div>
    );
  }
}
