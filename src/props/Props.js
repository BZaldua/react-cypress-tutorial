import React, { Component } from 'react';
import './Props.css'

class Props extends Component {
    render() {
        return (
            <h1 class="title">Adios {this.props.name} </h1>
        );
    }
}

export default Props;