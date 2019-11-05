import React, { Component } from 'react';
import { aboutusDesktop } from './style/AboutUs';
import Icon from './Icon';
import { formStyle, input, label } from './style/Admin';


const initialState = {
    title: '',
    description: '',
    street: '',
    flat:'',
    city: '',
    country: '',
    price: '',
    size: '',
    url: '',
    available: ''
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }

    handleEvent = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value
        });
    }
    addNewApartment = async(e) => {
        e.persist()
        e.preventDefault()
        console.log(this.state);
        const response = await fetch('/api/apartments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
        if(response.status === 201){
            this.setState(initialState);
            e.target.reset()
            this.displayMessage('Succesful')
        } else if(response.status === 400){
            const responseBody = await response.json();
            this.displayMessage(responseBody.msg);
        } else {
            this.displayMessage('Server error')
        }
    }

    displayMessage = (message) => {
        console.log(message);
        return message;
    }

    printInputFields = () => {
        const state = this.state;
        const formInputs = [];
        for (let property of Object.keys(state)) {
            if(!(property === 'description')){
                const inputField = <label style={label}>{property}<input style={input} type='text' name={property} onChange={this.handleEvent} /></label>;
                formInputs.push(inputField);
            }
        }
        return formInputs;
    }


    render() {
        return (
            <div className='admin'>
                <div className='mobile-admin'>
                    <Icon />
                    <h2 style={aboutusDesktop}>Admin</h2>
                </div>
                <div>
                    <h3 style={formStyle}>Submit new apartment</h3>
                    <div style={formStyle}>
                        <form onSubmit={this.addNewApartment}>
                            {this.printInputFields()}
                            <label style={label}>
                                Description:
                                    <textarea style={input} type='text' name='description' onChange={this.handleEvent} />
                            </label>
                            <button type='submit' >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;