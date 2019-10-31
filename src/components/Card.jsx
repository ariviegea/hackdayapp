import React, { Component } from 'react';
import { apartment, list, img } from './style/Card';
import ButtonDetails from './ButtonDetails';
import ApartmentDetails from './ApartmentDetails';


class Card extends Component {
    triggerButton() {
        this.apartmentDetails.toggle();
      }
    render() {
        const { title, description, address, city, country, price, size, url, available } = this.props;
        return (
            <div style={apartment}>
                <ul style={list}>
                    <li><b>{title}</b></li>
                    <li><img style={img} src={url} alt={title}></img></li>
                    <li>{description}</li>
                    <li><b>Address:</b> {address}</li>
                    <li><b>City:</b> {city}</li>
                    <li><b>Country:</b> {country}</li>
                    <li><b>Price:</b> {price}</li>
                    <li><b>Square meter:</b> {size}</li>
                    <li>{available}</li>
                    <ApartmentDetails ref={ apartmentDetails => this.apartmentDetails = apartmentDetails}></ApartmentDetails>
                    <li><ButtonDetails onClick={this.triggerButton}>More info</ButtonDetails></li>
                </ul>
            </div>
        )
    }
}

export default Card;