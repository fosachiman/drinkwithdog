import React from 'react';
import BarListing from './BarListing';
import MenuHeader from './MenuHeader';
import ExpandedBar from './ExpandedBar';

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bars !== nextProps.bars) {
      this.props.bars.forEach((bar) => {
        bar.marker.remove()
      })
    }
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
      let markers = []
      if (this.props.map) {
        renderBars = this.props.bars.map((bar, index) => {
          let marker = bar.marker;
        return (
          <BarListing
            key={index}
            map={this.props.map}
            bar={bar.bar.bar}
            marker={marker}
            singleBarView={this.props.singleBarView}
            closeLastMarker={this.props.closeLastMarker}
            createMarker={this.props.createMarker}
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
