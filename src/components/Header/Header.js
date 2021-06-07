import "./Header.sass";
import { Nav, Navbar } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import { CgAdd } from "react-icons/cg";
import { GrInProgress } from "react-icons/gr";
import { GiKnifeFork, GiAppleSeeds } from "react-icons/gi";
import { Link } from "react-router-dom";
import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand> {headerTitle} </Navbar.Brand>
        </Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/finished-orders">
                <MdDone size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/current-orders">
                <GrInProgress size={30} />
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/stock">
                <GiAppleSeeds size={30} />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
