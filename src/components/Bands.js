import React, { Component } from 'react'
import Band from './Band'

export class Bands extends Component {
    render() {
        return (
            <ul>
                {this.props.bands.map(b=><Band key={b.id} band={b} delete={this.props.delete}/>)}
            </ul>
        )
    }
}

export default Bands
