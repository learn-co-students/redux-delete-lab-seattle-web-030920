import React, { Component } from 'react';

class Band extends Component {

  handleDelete= ()=>{
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
};

export default Band;
