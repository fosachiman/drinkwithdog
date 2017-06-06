import React from 'react';
import BarListing from './BarListing';
import MenuHeader from './MenuHeader';
import ExpandedBar from './ExpandedBar';

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSingleBarMenu(bar) {
    return (
      <ExpandedBar
        bar={bar}
        marker={this.props.singleMarker}
      />
    )
  }

  render() {
    let renderBars;
    if (this.props.menu === 'bar') {
      renderBars = this.renderSingleBarMenu(this.props.singleBar);
    }
    else {
      if (this.props.map) {
        renderBars = this.props.bars.map((bar, index) => {
          let marker = this.props.createMarker(bar);
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
            singleBarView={this.props.singleBarView}
            closeLastMarker={this.props.closeLastMarker}
          />
        )
        })
      }
   }
    return (
      <div className="bar-menu">
      <MenuHeader menuState={this.props.menu} multiBarView={this.props.multiBarView}/>
        {renderBars}
      </div>
    );
  }
}
