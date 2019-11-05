import React, { Component } from 'react';
import { aboutusDesktop } from './style/AboutUs';
import Icon from './Icon';
import {formStyle, input, label} from './style/Admin';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title:'',
            description: '',
            address: '',
            city: '',
            country: '',
            price: '',
            size: '',
            url: '',
            available: ''
        }
    }

    handleId = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    handleTitle = (e) => {
        this.setState({
           title: e.target.value
        });
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handlePrice = (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handleSize= (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handleUrl= (e) => {
        this.setState({
            country: e.target.value
        })
    }
    handleAvailable= (e) => {
        this.setState({
            country: e.target.value
        })
    }

    addNewApartment = (e) => {
        e.preventDefault()
        console.log(this.state);
        fetch('/api/apartments', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
    }


    render() {
        const { title, description, address, id, city, country, price, size, url, available, submit } = this.state;
        return (
            <div className='admin'>
                <div className='mobile-admin'>
                    <Icon/>
                    <h2 style={aboutusDesktop}>Admin</h2>
                </div>
                <div>
                <h3 style={formStyle}>Submit new apartment</h3>
                    <div style={formStyle}>
                            <form>
                                <label style={label}>
                                Id:
                                    <input style={input} type='text' value={id} onChange={this.handleId}/>
                                </label>
                                <label style={label}>
                                Title:
                                    <input style={input} type='text' value={title} onChange={this.handleTitle}/>
                                </label>
                                <label style={label}>
                                Description:
                                    <textarea style={input} type='text' value={description} onChange={this.handleDescription}/>
                                </label>
                                <label style={label}>
                                Address:
                                    <input style={input} type='text' value={address} onChange={this.handleAddress}/>
                                </label>
                                <label style={label}>
                                City:
                                    <input style={input} type='text' value={city} onChange={this.handleCity}/>
                                </label>
                                <label style={label}>
                                Country:
                                    <input style={input} type='text' value={country} onChange={this.handleCountry}/>
                                </label>
                                <label style={label}>
                                Price:
                                    <input style={input} type='text' value={price} onChange={this.handlePrice}/>
                                </label>
                                <label style={label}>
                                Size:
                                    <input style={input} type='text' value={size} onChange={this.handleSize}/>
                                </label>
                                <label style={label}>
                                Url:
                                    <input style={input} type='text' value={url} onChange={this.handleUrl}/>
                                </label>
                                <label style={label}>
                                Available:
                                    <input style={input} type='text' value={available} onChange={this.handleAvailable}/>
                                </label>
                                <button type='submit' value={submit} onClick={this.addNewApartment}>Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;