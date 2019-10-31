import React, { Component } from 'react';
import { Checkbox } from "antd";

const li = {
    marginLeft:'10px'
}

class Filter extends Component {

    filteredCountry = (country) => this.props.apartments.filter(apartment => apartment.country === country);
    
    onCheck = (e, country) => {
        if(e.target.checked)
            this.props.changeToDisplay(this.filteredCountry(country));
    }

    render() {
       
        return this.props.apartments.map(country => (
            <div className='filter'>
                    <li style={li}><Checkbox onChange={e => this.onCheck(e, country.country)}/> {country.country}</li>
            </div>
        ));
            
    }
}

export default Filter;