import "./Header.sass";
import { Row, Nav, Navbar } from "react-bootstrap";
import { AiOutlineLeft } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgAdd } from "react-icons/cg"
import { Link } from "react-router-dom";

import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            {" "}
            {headerTitle}{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link className="link" to="/createfood">
                <CgAdd size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/checkout">
                <AiOutlineShoppingCart size={30} />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/categories">
                <MdRestaurantMenu id="icon" size={30} />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const Header1 = ({ title }) => {
  return (
    <div>
      <Row>
        <div className="col-6">
          <Row>
            <div className="col-2">
              <AiOutlineLeft id="header-back-icon" size={30} />
            </div>
            <div className="col-10">
              <h3> Title </h3>
            </div>
          </Row>
        </div>
        <div className="col-6">
          <BsSearch size={30} id="icon" />
          <AiOutlineShoppingCart size={30} />
          <MdRestaurantMenu id="icon" size={30} />
        </div>
      </Row>
    </div>
  );
};

export default Header;
