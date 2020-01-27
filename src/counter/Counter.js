import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            contador: 0,
            myArray: [1, 2, 3],
            myObject: {
                key: 'value'
            }
        };
    }

    incrementCounter= () =>  {
        this.setState({contador: this.state.contador + 1});
    }

    decrementCounter = () => {
        this.setState({contador: this.state.contador - 1});
    }

    render() {
        return (
            <div>
                <span>{this.state.contador}</span>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
            </div>
        );
    }
};

export default Counter;