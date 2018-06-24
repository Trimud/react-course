import React, { Component } from 'react';
// import Contact from './contact.js';

class Details extends Component {
    render() {
        return (
            <div id="details">
                <h1>Details</h1>
                <div className="content">
                    <div className="info">
                        <div className="col">
                            <span className="avatar">&#9787;</span>
                        </div>
                        <div className="col">
                            <span className="name">Ivan</span>
                            <span className="name">Ivanov</span>
                        </div>
                    </div>
                    <div className="info">
                        <span className="info-line">☎ 0887 123 456</span>
                        <span className="info-line">&#9993; i.ivanov@gmail.com</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
