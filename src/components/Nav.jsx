import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navStyle, ulStyle } from './style/Nav';
import { slide as Menu } from 'react-burger-menu';

const menuStyle = {
    backgroundColor:'black',
    width:'300px'
    // bm-overlay
    // bm-menu-wrap
    // bm-burger-button"
}

class Nav extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="mobile-nav">
                    <Menu style={menuStyle}>
                        <div style={navStyle}>
                            <h1>Logo</h1>
                            <ul style={ulStyle}>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/apartments">
                                    <li>Apartments</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                            </ul>
                        </div>
                    </Menu>
                </div>
                <div className="desktop-nav">
                    <nav>
                    <div style={navStyle}>
                        <h1>Logo</h1>
                        <ul style={ulStyle}>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/apartments">
                                <li>Apartments</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    </nav>

                </div>
            </>
        )
    }
}

export default Nav;