import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBarClick() {
    console.log('clickity clack');
  }


  render() {
    return (
      <div className="bar-listing" onClick={() => {this.handleBarClick()}}>
        <div className="bar-name">{this.props.name}</div>
        <div className="bar-type">{this.props.type}</div>
        <div className="dog-policy">{this.props.policy}</div>
      </div>
    );
  }
}
