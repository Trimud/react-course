import React, { Component } from 'react';
import Contacts from './Contacts';
import Details from './Details';

// Import Contacts data
import persons from '../../data/contacts.json';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(index) {
        this.setState({
            selectedPerson: index
        });
    }
    render() {
        return (
            <div id="book">
                <Contacts persons={persons} handleClick={this.handleClick} selected={this.state.selectedPerson} />
                <Details person={persons[this.state.selectedPerson]} />
            </div>
        )
    }
}

export default Book;
