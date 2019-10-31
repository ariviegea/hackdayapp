import React, { Component } from 'react';
import Card from './Card';
import Filter from './Filter';


class Apartments extends Component {
    constructor(props) {
        super(props);
        this.state={
            apartments: [],
            toDisplay: []
        };
    }
    componentDidMount() {
        fetch('/api/apartments')
          .then(res => res.json())
          .then(apartments => {
            this.setState({...this.state, apartments, toDisplay: apartments});
          })
          .catch('Issues getting data from the server')
    }

    changeToDisplay = (cities) => {
        this.setState({
            ...this.state,
            toDisplay: cities
        })
    }

    render() {
        return (
            <div>
                <Filter apartments={this.state.apartments} changeToDisplay={this.changeToDisplay} />
                {this.state.toDisplay.map((apartment, index) => <Card key={index} props={this.props} id={apartment.id} title={apartment.title} description={apartment.description} address={apartment.address} city={apartment.city} country={apartment.country} price={apartment.price} size={apartment.size} url={apartment.url} available={apartment.available} /> )} 
            </div>
        );
    }
}

export default Apartments;