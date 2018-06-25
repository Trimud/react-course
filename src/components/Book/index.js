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
    handleClick() {
        // console.log(222);
        this.setState({
            selectedPerson: 2
        });
    }
    render() {
        // console.log(persons[0]);
        return (
            <div id="book">
                <Contacts persons={persons} handleClick={this.handleClick} />
                <Details person={persons[this.state.selectedPerson]} />
            </div>
        )
    }
}

export default Book;
