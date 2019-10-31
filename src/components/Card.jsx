import React, { Component } from 'react';
import { apartment, list, img } from './style/Card';
import  CardDetails from './CardDetails';



class Card extends Component {
    constructor(props) {
        super(props);
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
        const { id, title, description, address, city, country, price, size, url, available } = this.props;
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
                </ul>
                { isToggle &&  <CardDetails id={id} title={title} description={description} address={address} city={city} country={country} price={price} size={size} url={url} available={available}/> }
                <h3 onClick={this.toggleButton}>{ isToggle ? `Less details`: `More details`}</h3>
            </div>
        )
    }
}

export default Card;