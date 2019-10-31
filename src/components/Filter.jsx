import React, { Component } from 'react';
import { Checkbox } from "antd";
// import Apartments from './Apartments';
// import { apartment } from './style/Card';

const list = {
    display:'flex',
    justifyContent:'center',
    listStyle:'none'
}
const li = {
    marginLeft:'10px'
}

class Filter extends Component {

    filteredCity = (city) => this.props.apartments.filter(apartment => apartment.city === city);
    
    onCheck = (e, city) => {
        if(e.target.checked)
            this.props.changeToDisplay(this.filteredCity(city));
    }

    render() {
       
        return this.props.apartments.map(city => (
                <ul style={list}>
                    <li style={li}><Checkbox onChange={e => this.onCheck(e, city.city)}/> {city.city}</li>
                </ul>
        ));
            
    }
}

export default Filter;