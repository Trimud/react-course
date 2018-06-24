import React, { Component } from 'react';
import Contact from './contact.js';

class Contacts extends Component {
    render() {
        return (
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    <Contact name="Ivan Ivanov" />
                </div>
            </div>
        )
    }
}

export default Contacts;
