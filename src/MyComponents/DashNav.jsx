import {  Container, Nav,Navbar, NavDropdown} from "react-bootstrap";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const DashNav= ()=>{
  const navigate = useNavigate()
  const gotohome = ()=>{
    navigate('/')
  }
   return(
  <div >
      <Navbar fixed="top" bg="primary" variant="dark"className="navbar navbar-default navbar-fixed-top" >
        <Container>
          <Navbar.Brand href="#home">CrazyBlogs.com</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav  className="justify-content-end flex-grow-1">
   <Navbar.Brand href="#home">
        {/* <img
          alt="soon"
          src="yuuu"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}

      </Navbar.Brand>
   <NavDropdown title="Hi JHON" className="p-10">
    <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3" onClick={gotohome}>LogOut</NavDropdown.Item>
  </NavDropdown>
   </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
   )

}
export default DashNav;