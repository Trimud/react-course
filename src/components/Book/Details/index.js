import React, { Component } from 'react';

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
                            <span className="name firstName">Ivan</span>
                            <span className="name lastName">Ivanov</span>
                        </div>
                    </div>
                    <div className="info">
                        <span className="info-line">☎ <span className="info-phone">0887 123 456</span></span>
                        <span className="info-line">&#9993; <span className="info-email">i.ivanov@gmail.com</span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
