import React from 'react';
import Fuse from 'fuse.js';
import SearchResult from './SearchResult';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      matches: null,
      focused: false,
    }
    this.clearMatches = this.clearMatches.bind(this);
  }

  searchBars(bars, input) {
    let options = {
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 3,
      keys: [
        "name"
      ]
    };
    let fuse = new Fuse(bars, options);
    let result = fuse.search(input);
    this.setState({ matches: result })
  }

  handleTextChange(e) {
    let input = e.target.value
    this.searchBars(this.props.bars, input)
  }

  showMatches(matches) {
    let matchDisplay;
    if (matches) {
      matchDisplay = matches.map((match) => {
        return (
          <SearchResult
            name={match.name}
            bar={match}
            singleBarView={this.props.singleBarView}
            createMarker={this.props.createMarker}
            closeLastMarker={this.props.closeLastMarker}
            map={this.props.map}
            clearMatches={this.clearMatches}
            focused={this.state.focused}
            closeBarsAndMarkers={this.props.closeBarsAndMarkers}
          />
        )
      })
    }
    return matchDisplay;
  }

  clearMatches() {
    this.setState({ matches: null });
  }

  focus() {
    this.setState({ focused: true })
  }

  focusOut() {
    this.setState({ focused: false })
  }

  render() {
    let searchStyle = {visibility: 'hidden'};
    if (this.props.hasMoved)
      searchStyle = {visibility: 'visible'};
    return (
      <div className="search-container" tabIndex="1" onBlur={() => this.focusOut()} onFocus={() => this.focus()}>
        <input className="search-box" type="text"
          onChange={(e) => this.handleTextChange(e)}
        />
        <div className="search-button"><img className="search-image" src="./images/DWD_Icon_Search-25.svg" /></div>
        <button className="refresh-button"
          onClick={() => this.props.getBarDistances(this.props.map)}
          style={searchStyle}>
            Redo Search in this Area
          </button>
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
