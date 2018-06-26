import React, { Component } from 'react';

class Details extends Component {
    render() {
        let person = this.props.person;
        return (
            <div id="details" className="maincol">
                <h1>Details</h1>
                <div className="content">
                    <div className="info">
                        <div className="col">
                            <span className="avatar">&#9787;</span>
                        </div>
                        <div className="col">
                            <span className="name firstName">{person.firstName}</span>
                            <span className="name lastName">{person.lastName}</span>
                        </div>
                    </div>
                    <div className="info">
                        <span className="info-line">&#9742; {person.phone}</span>
                        <span className="info-line">&#9993; {person.email}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
