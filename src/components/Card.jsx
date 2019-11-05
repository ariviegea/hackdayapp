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
        const { title, street, flat, city, country, price, size, url } = this.props;
        const { isToggle } = this.state;
        return (
            
            <>
                <div className="apartment-section" style={apartment}>
                    <ul style={list}>
                        <li><h2>{title}</h2></li>
                        <li><img style={img} src={url} alt={title}></img></li>
                        <li><b>Street:</b> {street}</li>
                        <li><b>Number:</b> {flat}</li>
                        <li><b>City:</b> {city}</li>
                        <li><b>Country:</b> {country}</li>
                        <li><b>Price:</b> {price} €</li>
                        <li><b>Square meter:</b> {size} m2</li>
                    </ul>
                    { isToggle &&  <CardDetails {...this.props}/> }
                    <button onClick={this.toggleButton}>{ isToggle ? <b>{`Less details`}</b>: <b>{`More details`}</b>}</button>
                </div>
            </>
        )
    }
}

export default Card;