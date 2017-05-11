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
      singleBar: null
    }
    this.singleBarView = this.singleBarView.bind(this);
    this.multiBarView = this.multiBarView.bind(this);
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
  multiBarView() {
    this.setState({ menu: 'list' })
  }

  render() {
    let renderBars;
    if (this.state.menu === 'bar') {
      renderBars = this.renderSingleBarMenu(this.state.singleBar);
    }
    else {
      if (this.props.map) {
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
   }
    return (
      <div className="bar-menu">
      <MenuHeader menuState={this.state.menu} multiBarView={this.multiBarView}/>
        {renderBars}
      </div>
    );
  }
}
