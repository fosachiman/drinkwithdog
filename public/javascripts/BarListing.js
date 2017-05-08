import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBarClick(bar) {
    this.props.singleBarView(bar);
  }


  render() {
    return (
      <div className="bar-listing" onClick={() => {this.handleBarClick(this.props.bar)}}>
        <div className="bar-name">{this.props.name}</div>
        <div className="bar-type">{this.props.type} - </div>
        <div className="dog-policy">{this.props.policy}</div>
      </div>
    );
  }
}
