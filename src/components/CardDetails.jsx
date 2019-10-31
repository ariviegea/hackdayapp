import React, { Component } from 'react';
import { list } from './style/Card';

class CardDetails extends Component {
    render() {
        const { description, available } = this.props;
        return (
            <div>
                <ul style={list}>
                    <li>{description}</li>
                    <li>{available ? <b>Available</b> : <b>Not available</b>}</li>
                </ul>
                <button>Book</button>
            </div>
        );
    }
}

export default CardDetails;