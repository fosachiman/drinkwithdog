import React from 'react';

export default class ExpandedBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.bar.name}
      </div>
    );
  }
}
