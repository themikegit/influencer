import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../Context";
import { Plus, Trash } from "react-bootstrap-icons";

export default function Navigation() {
 const { handleShow } = useContext(Context);
 return (
  <>
   <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">InstaTable</Navbar.Brand>
    <Nav className="mr-auto">
     <Nav.Link onClick={() => handleShow()}>
      {" "}
      <Plus /> Add new
     </Nav.Link>
     <Nav.Link>
      {" "}
      <Trash /> Deleted
     </Nav.Link>
    </Nav>
   </Navbar>
  </>
 );
}
