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
        this.setState(initialState);
        e.target.reset();
    }


    printInputFields = () => {
        const state = this.state;
        const formInputs = [];
        for (let key of Object.keys(state)) {
            if(!(key === 'description')){
                const inputField = <label style={label}>{key}<input style={input} type='text' name={key} onChange={this.handleEvent} /></label>;
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