import React from 'react';

export default class SingleBarInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'description'
    }
  }

  render() {
    return (
      <div className="single-bar-info">
        {this.props.bar.copy}
      </div>
    );
  }
}
