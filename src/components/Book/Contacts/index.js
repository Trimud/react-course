import React, { Component } from 'react';
import Contact from './contact.js';

class Contacts extends Component {
    render() {
        let persons = this.props.persons || [];
        return (
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    {persons.map(
                        (person, i) =>
                        <Contact key={i} dataID={i} name={person.firstName + ' ' + person.lastName} personData={JSON.stringify(person)} handleClick={() => this.props.handleClick(i)} />
                    )}
                </div>
            </div>
        )
    }
}

export default Contacts;
