import React, { Component } from 'react';
import Contacts from './Contacts';
import Details from './Details';

// Exercise 1
import Clock from './Exercise1/Clock';
import Button from './Exercise1/Button';

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
                <Clock />
                <Button />
            </div>
        )
    }
}

export default Book;
