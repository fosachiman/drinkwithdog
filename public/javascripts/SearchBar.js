import React from 'react';
import Fuse from 'fuse.js';
import SearchResult from './SearchResult';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      matches: null
    }
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
    console.log(result);
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
          />
        )
      })
    }
    return matchDisplay;
  }

  render() {
    return (
      <div className="search-container">
        <input className="search-box" type="text" onChange={(e) => this.handleTextChange(e)}/>
        <div className="search-button"><img className="search-image" src="./images/DWD_Icon_Search-25.svg" /></div>
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
