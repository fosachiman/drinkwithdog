import React from 'react';

export default class BarListing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
