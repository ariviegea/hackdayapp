import React, { Component } from 'react';
import Card from './Card';
import Filter from './Filter';
import Icon from './Icon';

const list= {
    listStyle:'none',
    margin: '10px'
}

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
            this.setState({apartments, toDisplay: apartments});
          })
          .catch('Issues getting data from the server')
    }

    changeToDisplay = (cities) => {
        this.setState({
            toDisplay: cities
        })
    }

    render() {
        return (
            <div>
                <div className='mobile-home'>
                    <Icon/>
                    <h2>Apartments</h2>
                </div>
                <div className='filter-list-mobile'>
                    <ul style={list}>
                        <Filter apartments={this.state.apartments} changeToDisplay={this.changeToDisplay} />
                    </ul>
                </div>
                <div className='filter-list-desktop'>
                    <ul style={list}>
                        <Filter apartments={this.state.apartments} changeToDisplay={this.changeToDisplay} />
                     </ul>   
                </div>
                {this.state.toDisplay.map((apartment, index) => <Card key={index} props={this.props} id={apartment.id} title={apartment.title} description={apartment.description} address={apartment.address} city={apartment.city} country={apartment.country} price={apartment.price} size={apartment.size} url={apartment.url} available={apartment.available} /> )} 
            </div>
        );
    }
}

export default Apartments;