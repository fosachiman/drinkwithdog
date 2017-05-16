import React from 'react';
import SingleBarInfo from './SingleBarInfo';

export default class ExpandedBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="single-bar-header">
          <div className="bar-name-single">{this.props.bar.name}</div>
          <div className="bar-type">{this.props.bar.type} - </div>
          <div className="dog-policy">{this.props.bar.dogPolicy}</div>
        </div>
        <SingleBarInfo bar={this.props.bar} />
      </div>
    );
  }
}
