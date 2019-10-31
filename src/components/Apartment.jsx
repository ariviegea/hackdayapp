import React, { Component } from 'react';

class Apartment extends Component {
    constructor() {
        super();
        this.state={
            data: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/apartments')
    }

    render() {
        return (
            <div>
                <h1>Apartments list</h1>
            </div>
        )
    }
}

export default Apartment;