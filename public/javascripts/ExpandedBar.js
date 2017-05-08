import React from 'react';

export default class ExpandedBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bar-name-single">{this.props.bar.name}</div>
      </div>
    );
  }
}
