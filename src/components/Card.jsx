import React, { Component } from 'react';
import { apartment, list, img } from './style/Card';
import  ApartmentDetails from './ApartmentDetails';



class Card extends Component {
    constructor() {
        super();
        this.state = {
            isToggle: false,
        }
    }

    toggleButton = () => {
        this.setState({ 
            isToggle: !this.state.isToggle
        });
    }

    render() {
        const { title, description, address, city, country, price, size, url, available } = this.props;
        const { isToggle } = this.state;
        return (
            <div style={apartment}>
                <ul style={list}>
                    <li><b>{title}</b></li>
                    <li><img style={img} src={url} alt={title}></img></li>
                    <li><b>Address:</b> {address}</li>
                    <li><b>City:</b> {city}</li>
                    <li><b>Country:</b> {country}</li>
                    <li><b>Price:</b> {price}</li>
                    <li><b>Square meter:</b> {size}</li>
                    <li>{available}</li>
                </ul>
                { isToggle &&  <ApartmentDetails description={description} available={available}/> }
                <h3 onClick={this.toggleButton}>{ isToggle ? `Less details`: `More details`}</h3>
            </div>
        )
    }
}

export default Card;