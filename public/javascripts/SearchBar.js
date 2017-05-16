import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input className="search-box" type="text" />
        <div className="search-button"><img className="search-image" src="./images/DWD_Icon_Search-25.svg" /></div>
      </div>
    );
  }
}
