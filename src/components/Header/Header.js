import "./Header.sass";
import {Nav, Navbar} from "react-bootstrap";
import {MdDone} from "react-icons/md";
import {GrInProgress} from "react-icons/gr";
import {GiAppleSeeds} from "react-icons/gi";
import {Link} from "react-router-dom";
import React from "react";
import logo from "../../assets/m_sticky_header.png"

const Header = ({headerTitle}) => {
    return (
        <div className="header-wrapper">
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        <img src={logo} id="logo"/>
                        {headerTitle}
                    </Navbar.Brand>
                </Link>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="link" to="/finished-orders">
                            <MdDone size={30}/>
                        </Link>
                        <Link className="link" to="/current-orders">
                            <GrInProgress size={30}/>
                        </Link>
                        <Link className="link" to="/stock">
                            <GiAppleSeeds size={30}/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
