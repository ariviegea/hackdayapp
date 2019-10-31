import React, { Component } from 'react';
import Card from './Card';

class Apartments extends Component {
    constructor() {
        super();
        this.state={
            apartments: [],
        };
    }
    componentDidMount() {
        fetch('/api/apartments')
          .then(res => res.json())
          .then(apartments => this.setState({apartments}, () => console.log('Hello work bitch', apartments)))
    }

    render() {
        const { apartments } = this.state;
        return (
            <div>
                {apartments.map((apartment, index) => <Card key={index} title={apartment.title} description={apartment.description} address={apartment.address} city={apartment.city} country={apartment.country} price={apartment.price} size={apartment.size} url={apartment.url} available={apartment.available} /> )}
            </div>
        );
    }
}

export default Apartments;