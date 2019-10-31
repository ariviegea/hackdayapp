import React, { Component } from 'react';

class ApartmentsDetails extends Component {
    constructor() {
        super();
        this.state={
            apartmentDetails: false,
        };
    }

    toggle() {
        this.setState({
            apartmentDetails: !this.state.apartmentDetails
        })
    }

    render() {
        return (
            <div>
                {this.state.apartmentDetails.toString()}
            </div>
        );
    }
}

export default ApartmentsDetails;