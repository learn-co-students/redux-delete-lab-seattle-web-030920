import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = event => {
    event.preventDefault();
    this.props.delete(this.props.id);
  }

  render() {
    return(
      <li>
<span>{this.props.name}</span><button onClick={() => this.props.delete(this.props.id)}>DELETE</button>      </li>
    );
  }
};

export default Band;
