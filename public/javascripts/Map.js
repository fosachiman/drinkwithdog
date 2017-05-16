import React from 'react';
import BarMenu from './Barmenu';
import SearchBar from './SearchBar';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <SearchBar />
          <BarMenu
            map={this.props.map}
            bars={this.props.bars}
          />
        </div>
      </div>
    );
  }
}
