import React from 'react';

export default class Filters extends React.Component {

  constructor(props) {
    super(props);
  }

  handleCheckboxChange(e) {
    if (e.target.checked)
      this.props.changeBoxCheckState(true);
    else
      this.props.changeBoxCheckState(false);
  }

  handleRefreshButtonClick() {
    this.props.multiBarView();
    this.props.getBarDistances(this.props.map)
  }

  render() {
    let render = (
      <div className="refresh-container">
        <input className="check-box" type='checkbox' id='search-check' onChange={(e) => {this.handleCheckboxChange(e)}}/>
        <label className="auto-refresh" for='search-check'>Update bars automatically</label>
      </div>
    )
    if (this.props.hasMoved) {
      render = (
        <button className="refresh-button"
          onClick={() => this.handleRefreshButtonClick()}
        >Redo Search in this Area
        </button>
      )
    }
    return (
      <div className="filter-container">
        {render}
      </div>
    );
  }
}
