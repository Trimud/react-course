import React, { Component } from 'react';
import Contacts from './Contacts';
import Details from './Details';

class Book extends Component {
    render() {
        return (
            <div id="book">
                <Contacts />
                <Details />
            </div>
        )
    }
}

export default Book;
