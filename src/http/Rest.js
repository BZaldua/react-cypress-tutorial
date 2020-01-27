import React, { Component } from 'react';

class GetCall extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    getContacts = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({contacts: data})
        });
    }

    render() {
        return(
            <div onLoad={this.getContacts()}>
                <h4>Contact list</h4>
                {this.state.contacts.map((contact) => (
                    <div>
                        <h5>{contact.name}</h5>
                        <h6>{contact.email}</h6>
                        <p>{contact.company.catchPhrase}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export {GetCall};