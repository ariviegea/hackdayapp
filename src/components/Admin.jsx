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
            address: ''
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
        const { title, description, address, id, submit } = this.state;
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
                                <button type='submit' value={submit} onClick={this.addNewApartment}>Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;