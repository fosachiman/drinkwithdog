import React from 'react';

export default class SingleBarInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'info'
    }
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    if (this.state.view === 'copy')
      this.setState({ view: 'info' })
    else
      this.setState({ view: 'copy' })
  }

  infoState() {
    return (
      <div>
      <div className="single-bar-linecont">
        <img className="single-bar-icon" src="./images/DWD_Icon_Paw.svg"/>
        <div className="single-bar-line">{this.props.bar.dogPolicy}</div>
      </div>
      <div className="single-bar-linecont">
        <img className="single-bar-icon" src="./images/DWD_Icon_Location.svg"/>
        <div className="single-bar-line">{this.props.bar.address}</div>
      </div>
      <div className="single-bar-linecont">
        <img className="single-bar-icon" src="./images/DWD_Icon_Clock.svg"/>
        <div className="single-bar-line">{this.props.bar.hours}</div>
      </div>
      <div className="single-bar-linecont">
        <img className="single-bar-icon" src="./images/DWD_Icon_Link.svg"/>
        <div className="single-bar-line">{this.props.bar.website}</div>
      </div>
      <img className="down-arrow" onClick={() => this.toggleState()} src="./images/DWD_Icon_Arrow.svg" />
      </div>
    )
  }

  render() {
    let view;
    if (this.state.view === 'info')
      view = this.infoState();
    else
      view = <div>
             <div>{this.props.bar.copy}</div>
             <img className="down-arrow" onClick={() => this.toggleState()} src="./images/DWD_Icon_Arrow.svg" />
             </div>
    return (
      <div className="single-bar-info">
        {view}
      </div>
    );
  }
}
