import React, { Component } from 'react';

class ApartmentDetails extends Component {
    render() {
        const { title, description, address, city, country, price, size, url, available } = this.props;
        return (
            <div>
                <ul>
                    <li><b>{title}</b></li>
                    <li><img src={url} alt={title}></img></li>
                    <li>{description}</li>
                    <li><b>Address:</b> {address}</li>
                    <li><b>City:</b> {city}</li>
                    <li><b>Country:</b> {country}</li>
                    <li><b>Price:</b> {price}</li>
                    <li><b>Square meter:</b> {size}</li>
                    <li>{available}</li>
                </ul>
            </div>
        );
    }
}

export default ApartmentDetails;