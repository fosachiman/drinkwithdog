import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
      sortedBars: [],
      matches: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bars !== nextProps.bars)
      this.sortBars(nextProps)
  }

  sortBars(props) {
    let sortedBars = props.bars.map((bar) => {
        return bar.name;
      }).sort();
    this.setState({ sortedBars })
  }

  handleTextChange(e) {
    let input = e.target.value
    this.setState({ textInput: input })
    if (input.length > 2)
      this.findMatches(input)
  }

  findMatches(input) {
    let pattern = input;
    let re = new RegExp(pattern, "gi");
    let matches = this.state.sortedBars.filter((bar) => {
      return bar.match(re)
    })
    this.setState({ matches })
  }

  showMatches(matches) {
    let matchDisplay;
    if (matches) {
      matchDisplay = matches.map((match) => {
        return (
          <div className="search-results">
            <p>{match}</p>
          </div>
        )
      })
    }
    return matchDisplay;
  }

  render() {

    return (
      <div>
        <input className="search-box" type="text" value={this.state.textInput} onChange={(e) => this.handleTextChange(e)}/>
        <div className="search-button"><img className="search-image" src="./images/DWD_Icon_Search-25.svg" /></div>
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}
