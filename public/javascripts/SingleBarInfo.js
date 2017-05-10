import React from 'react';

export default class SingleBarInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: 'copy'
    }
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    if (this.state.view === 'copy')
      this.setState({ view: 'info' })
    else
      this.setState({ view: 'copy' })
  }

  render() {
    return (
      <div className="single-bar-info">
        <div>{this.props.bar.copy}</div>
        <img className="down-arrow" onClick={() => this.toggleState()} src="./images/DWD_Icon_Arrow.svg" />
      </div>
    );
  }
}
