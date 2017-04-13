import React from 'react';
import axios from 'axios';
import BarListing from './BarListing'

export default class BarMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bars: []
    }
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
    this.setState({ bars: names });
  }

  render() {
    let renderBars = this.state.bars.map((bar, index) => {
      return (
        <BarListing key={index} name={bar}/>
        )
    })
    return (
      <div className="bar-menu">
        {renderBars}
      </div>
    );
  }
}
