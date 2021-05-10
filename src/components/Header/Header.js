import "./Header.sass";
import { Nav, Navbar } from "react-bootstrap";
import { GiKitchenKnives } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand> {headerTitle} </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/Orders">
                <MdDone size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/Orders">
                <GrInProgress size={30} />
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/createfood">
                <CgAdd size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/Orders">
                <GiKitchenKnives id="icon" size={30} />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
