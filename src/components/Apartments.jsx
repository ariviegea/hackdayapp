import React, { Component } from 'react';

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
                {apartments.map(apartment => apartment.title)}
            </div>
        );
    }
}

export default Apartments;