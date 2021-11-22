import React from 'react';
import { NavLink } from 'react-router-dom';
import me from '../../../images/me.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={me} alt="" />
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/portfolio" activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/blogs" activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>

                </ul>

                <footer className="footer">
                    <p>
                        @2021 newardevil.com
                    </p>
                </footer>

            </nav>
        </div>
    );
};

export default Navbar;