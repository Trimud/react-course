import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact" data-id="id">
                <span className="avatar small">&#9787;</span>
                <span className="title">{this.props.name}</span>
            </div>
        )
    }
}

export default Contact;
