import React from 'react';

export default class SingleBarInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'info'
    }
    this.toggleState = this.toggleState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bar !== nextProps.bar)
      this.setState({ view: 'info' })
  }

  toggleState() {
    if (this.state.view === 'copy')
      this.setState({ view: 'info' })
    else
      this.setState({ view: 'copy' })
  }

  hoursFormat(barHours) {
    let formatted = barHours.replace(/,/g, '\r\n');
    return formatted;
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
          <div className="single-bar-line">{this.hoursFormat(this.props.bar.hours)}</div>
        </div>
        <div className="single-bar-linecont">
          <img className="single-bar-icon" src="./images/DWD_Icon_Link.svg"/>
          <div className="single-bar-line">{this.props.bar.website}</div>
        </div>
        <div className="arrow-area">
          <p onClick={() => this.toggleState()} className="arrow-label">More Info</p>
          <img className="down-arrow" onClick={() => this.toggleState()} src="./images/DWD_Icon_Arrow.svg" />
        </div>
      </div>
    )
  }

  render() {
    let view;
    if (this.state.view === 'info')
      view = this.infoState();
    else
      view = <div>
                <div className="arrow-area">
                <img className="up-arrow" onClick={() => this.toggleState()} src="./images/DWD_Icon_Arrow.svg" />
                <p onClick={() => this.toggleState()} className="arrow-label-bottom">Back</p>
                </div>
              <p>{this.props.bar.copy}</p>
             </div>
    return (
      <div className="single-bar-info">
        {view}
      </div>
    );
  }
}
