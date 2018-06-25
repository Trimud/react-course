import React, { Component } from 'react';
import Contact from './contact.js';

class Contacts extends Component {
    render() {
        return (
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    {this.props.persons.map((person, i) => <Contact key={i} dataID={i} onClick={this.props.handleClick} name={person.firstName + ' ' + person.lastName} personData={JSON.stringify(person)} />)}
                </div>
            </div>
        )
    }
}

export default Contacts;
