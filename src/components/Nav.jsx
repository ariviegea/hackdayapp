import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ulStyle, menuStyle, ulStyleDesktop, navStyleDesktop, navStyleMobile} from './style/Nav';
import { slide as Menu } from 'react-burger-menu';


class Nav extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <>
                <div className="mobile-nav">
                    <Menu style={menuStyle} right reveal >
                        <div style={navStyleMobile}>
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
                                <Link to="/admin">
                                <li>Admin</li>
                                </Link>
                            </ul>
                        </div>
                    </Menu>
                </div>
                <div className="desktop-nav">
                    <nav>
                    <div style={navStyleDesktop}>
                        <ul style={ulStyleDesktop}>
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/apartments">
                                <li>Apartments</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                            <Link to="/admin">
                                <li>Admin</li>
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