import React, { Component } from 'react';
import Contact from './contact.js';

// Import Contacts data
import persons from '../../../data/contacts.json';

class Contacts extends Component {
    render() {
        return (
            <div id="list" onClick={this.onClick}>
                <h1>Contacts</h1>
                <div className="content">
                    {persons.map((person, i) => <Contact key={i} name={person.firstName + ' ' + person.lastName} personData={JSON.stringify(person)} />)}
                </div>
            </div>
        )
    }
}

export default Contacts;
