import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { navStyle, ulStyle, menuStyle } from './style/Nav';
import { slide as Menu } from 'react-burger-menu';
import Icon from './Icon';


class Nav extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="mobile-nav">
                    <Menu style={menuStyle} right reveal >
                        <Icon/>
                        <div style={navStyle}>
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
                        <ul style={ulStyle}>
                            <Link to="/">
                                <li><Icon/></li>
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