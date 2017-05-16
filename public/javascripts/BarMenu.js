import React from 'react';
import axios from 'axios';
import BarListing from './BarListing';
import MenuHeader from './MenuHeader';
import ExpandedBar from './ExpandedBar';

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bars: [],
      menu: 'list',
      singleBar: null,
      singleMarker: null,
    }
    this.singleBarView = this.singleBarView.bind(this);
    this.multiBarView = this.multiBarView.bind(this);
    this.closeLastMarker = this.closeLastMarker.bind(this);
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

  closeLastMarker() {
    if (this.state.singleMarker)
      this.state.singleMarker.togglePopup();
  }

  singleBarView(bar, marker) {
    this.setState({ singleBar: bar });
    this.setState({ singleMarker: marker });
    this.setState({ menu: 'bar' });
  }

  renderSingleBarMenu(bar) {
    return (
      <ExpandedBar
        bar={bar}
        marker={this.state.singleMarker}
      />
      )
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

  render() {
    let renderBars;
    if (this.state.menu === 'bar') {
      renderBars = this.renderSingleBarMenu(this.state.singleBar);
    }
    else {
      if (this.props.map) {
        renderBars = this.state.bars.map((bar, index) => {
          let marker = this.createMarker(bar);
        return (
          <BarListing
            key={index}
            name={bar.name}
            address={bar.address}
            copy={bar.copy}
            hours={bar.hours}
            website={bar.website}
            type={bar.type}
            policy={bar.dogPolicy}
            latitude={bar.latitude}
            longitude={bar.longitude}
            map={this.props.map}
            bar={bar}
            marker={marker}
            singleBarView={this.singleBarView}
            closeLastMarker={this.closeLastMarker}
          />
        )
        })
      }
   }
    return (
      <div className="bar-menu">
      <MenuHeader menuState={this.state.menu} multiBarView={this.multiBarView}/>
        {renderBars}
      </div>
    );
  }
}
