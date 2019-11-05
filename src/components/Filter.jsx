import React, { Component } from 'react';
import { Checkbox } from 'antd';

const li = {
    marginLeft:'10px'
}

class Filter extends Component {

    filteredCountry = (city) => this.props.apartments.filter(apartment => apartment.city === city);
    
    onCheck = (e, city) => {
        if(e.target.checked)
            this.props.changeToDisplay(this.filteredCountry(city));
    }

    render() {
       
        return this.props.apartments.map(city => (
            <div className='filter'>
                    <li style={li}><Checkbox onChange={e => this.onCheck(e, city.city)}/> {city.city}</li>
            </div>
        ));
            
    }
}

export default Filter;