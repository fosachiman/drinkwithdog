import React from 'react';
import BarMenu from './Barmenu';
import SearchBar from './SearchBar';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 'list',
      singleBar: null,
      singleMarker: null,
    }
    this.singleBarView = this.singleBarView.bind(this);
    this.multiBarView = this.multiBarView.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.closeLastMarker = this.closeLastMarker.bind(this);
  }

  singleBarView(bar, marker) {
    this.setState({ singleBar: bar });
    this.setState({ singleMarker: marker });
    this.setState({ menu: 'bar' });
  }

  multiBarView() {
    this.setState({ menu: 'list' })
  }

  createMarker(bar) {
    let el = document.createElement('div');
    el.className = 'marker';
    el.setAttribute('id', bar.name.replace(/\s/g, '') + '-marker');
    let popup = new mapboxgl.Popup({closeButton: false, offset:25})
      .setText(bar.name)
    let marker = new mapboxgl.Marker(el, {offset:[-25, -25]})
      .setLngLat([bar.longitude, bar.latitude])
      .setPopup(popup)
      .addTo(this.props.map);
    el.addEventListener('click', () => this.singleBarView(bar, marker));
      return marker;
  }

  closeLastMarker() {
    if (this.state.singleMarker) {
      let popup = this.state.singleMarker.getPopup();
      if (popup.isOpen())
        this.state.singleMarker.togglePopup();
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <SearchBar
            bars={this.props.bars}
            singleBarView={this.singleBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
            map={this.props.map}
          />
          <BarMenu
            map={this.props.map}
            bars={this.props.bars}
            menu={this.state.menu}
            singleBar={this.state.singleBar}
            singleMarker={this.state.singleMarker}
            singleBarView={this.singleBarView}
            multiBarView={this.multiBarView}
            createMarker={this.createMarker}
            closeLastMarker={this.closeLastMarker}
          />
        </div>
      </div>
    );
  }
}
