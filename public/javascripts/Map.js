import React from 'react';
import BarMenu from './Barmenu';
export default class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <BarMenu
            map={this.props.map}
          />
        </div>
      </div>
    );
  }
}
