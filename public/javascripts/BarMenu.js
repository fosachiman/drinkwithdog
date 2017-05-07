import React from 'react';
import axios from 'axios';
import BarListing from './BarListing';
import BarMarker from './BarMarker';
import MenuHeader from './MenuHeader';
import ExpandedBar from './ExpandedBar';

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bars: [],
      menu: 'list',
      singleBar: null
    }
    this.singleBarView =this.singleBarView.bind(this);
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

  singleBarView(bar) {
    this.setState({ menu: 'bar' });
    this.setState({ singleBar: bar });
  }

  renderSingleBarMenu(bar) {
    return (
      <ExpandedBar
        bar={bar}
      />
      )
  }

  //if menu state is bar, return expanded bar component, if menu state is list,
  //return barListing components with renderBars loop

  render() {
    let renderBars;
    if (this.state.menu === 'bar') {
      renderBars = this.renderSingleBarMenu(this.state.singleBar);
    }
    else {
      renderBars = this.state.bars.map((bar, index) => {
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
          singleBarView={this.singleBarView}
        />
      )
      })
    }
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
      <MenuHeader />
        {renderBars}
        {renderMarkers}
      </div>
    );
  }
}
