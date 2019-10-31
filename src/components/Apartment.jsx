import React, { Component } from 'react';

const apartment = {
    padding:'20px',
    margin:'20px',
    border:'1px solid black',
    borderRadius: '5px',
   
}
const list = {
    listStyle: 'none',
    textAling: 'center',
    alignItems: 'center'
}

class Apartment extends Component {
    render() {
        const { title, description, address, city, country, price, size, url, available } = this.props;
        return (
            <div style={apartment}>
                <ul style={list}>
                    <li>{title}</li>
                    <li>{description}</li>
                    <li><b>Address:</b> {address}</li>
                    <li><b>City:</b> {city}</li>
                    <li><b>Country:</b> {country}</li>
                    <li><b>Price:</b> {price}</li>
                    <li><b>Square meter:</b> {size}</li>
                    <li>{url}</li>
                    <li>{available}</li>
                    <li><button>More info</button></li>
                </ul>
            </div>
        )
    }
}

export default Apartment;