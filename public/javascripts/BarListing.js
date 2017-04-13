import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bar-listing" onClick={(e) => {showMap(e)}}>
        {this.props.name}
      </div>
    );
  }
}
