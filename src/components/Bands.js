import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <ul>
          {this.props.bands.map(band => <Band name={band.name} key={band.id} id={band.id} delete={this.props.delete}/>)}
      </ul>
    );
  }
};

export default Bands;
