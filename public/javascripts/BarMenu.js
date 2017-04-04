import React from 'react';
import axios from 'axios';
import BarListing from './BarListing'

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('api')
    .then((response) => {
      console.log(response);
      this.parseResponse(response.data.bars)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  parseResponse(response) {
    let names = response.map((bar) => {
      return bar.name;
    })
    this.renderBars(names);
  }

  renderBars(bars) {
    let barNames = bars.forEach((bar, index) => {
      return (
        <BarListing key={index} name={bar}/>
      )
    })
  }

  render() {
    return (
      <div className="bar-menu">
        hello hello hello
        {this.renderBars}
      </div>
    );
  }
}
