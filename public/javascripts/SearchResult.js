import React from 'react';

export default class SearchResult extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(bar) {
    let markerFind = document.getElementById(bar.name.replace(/\s/g, '') + '-marker');
    if (markerFind)
      markerFind.parentNode.removeChild(markerFind);
    let marker = this.props.createMarker(bar);
    this.props.closeLastMarker();
    this.props.singleBarView(bar, marker);
    marker.togglePopup();
    this.props.map.flyTo({ center: [bar.longitude, bar.latitude] });
    this.resetMatches();
  }

  resetMatches() {
    this.props.clearMatches()
  }

  render() {
    let style;
    if (!this.props.focused)
      style = {visibility: 'hidden'}
    return (
      <div className="search-results" style={style} onClick={() => this.handleClick(this.props.bar)}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
