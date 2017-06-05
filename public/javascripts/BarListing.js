import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {}
    }
  }

  componentDidMount() {
    this.props.marker._element.addEventListener('mouseover', () => this.addStyle())
    this.props.marker._element.addEventListener('mouseout', () => this.removeStyle())
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

  addStyle() {
    this.setState({ style: { backgroundColor: "rgb(253,176,46)" } })
  }

  removeStyle() {
    this.setState({ style: {} })
  }

  render() {
    return (
      <div className="bar-listing" style={this.state.style} onClick={() => {this.handleBarClick(this.props.bar, this.props.marker)}}>
        <div className="bar-name">{this.props.name}</div>
        <div className="bar-type">{this.props.type} - </div>
        <div className="dog-policy">{this.props.policy}</div>
      </div>
    );
  }
}
