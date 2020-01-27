import React, { Component } from 'react';

class SimpleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} id='simpleForm'/>
                </label>
                <input type="submit" value="Submit" id='simpleFormSubmit'/>
            </form>
        );
    }
}

class EssayForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea placeholder={this.state.value} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export {SimpleForm, EssayForm};