import React from 'react';
import axios from 'axios';
import BarListing from './BarListing';
import BarMarker from './BarMarker';

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bars: []
    }
  }

  componentDidMount() {
    axios.get('api')
    .then((response) => {
      this.setState({ bars: response.data.bars })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    let renderBars = this.state.bars.map((bar, index) => {
      return (
        <BarListing
          key={index}
          name={bar.name}
          address={bar.address}
          copy={bar.copy}
          hours={bar.hours}
          website={bar.website}
          type={bar.type}
          latitude={bar.latitude}
          longitude={bar.longitude}
          map={this.props.map}
        />
      )
      })
    let renderMarkers;
    if (this.props.map) {
      renderMarkers = this.state.bars.map((bar, index) => {
      return (
        <BarMarker
          key={index}
          name={bar.name}
          latitude={bar.latitude}
          longitude={bar.longitude}
          map={this.props.map}
        />
        )
    })
    }
    return (
      <div className="bar-menu">
        {renderBars}
        {renderMarkers}
      </div>
    );
  }
}
