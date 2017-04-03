import React from 'react';
import Map from './Map.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}
