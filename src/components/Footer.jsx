import React, { Component } from 'react';
import { footer, ulFooter } from './style/Footer';

class Footer extends Component {
    render() {
        return (
            <div style={footer}>
                <ul style={ulFooter}>
                    <li>Homey, all rights reserved to Ariadna</li>
                    <li>who almost died building this</li>
                    <li>EpiCenter Stockholm, Sweden</li>
                    <li>9875567</li>
                </ul>
            </div>
        )
    }
}

export default Footer;