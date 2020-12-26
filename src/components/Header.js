import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="faded" light className="py-2">
        <Link to={"/"}>
          <NavbarBrand className="mr-auto text-white">
            <span className="text-warning">CGA</span> Automation
          </NavbarBrand>
        </Link>
        <Nav>
          <NavItem>
            <Button
              outline
              color="warning w-100"
              className="w-100 font-weight-bold"
            >
              Volver Al Inicio
            </Button>{" "}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
