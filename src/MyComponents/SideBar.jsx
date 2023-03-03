import { Button, Card, Col, Container, Nav,Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";

const Sidebar = () => {

    return(
        <Container fluid className="sidebar" style={{ width: "200px", height: "100vh", position: "fixed",top:"56px",left: "0", backgroundColor: "#333333", zIndex: "1"}}>
            <Button variant="light" className="nav-button" style={{width: "100%"}}>Home</Button>
            <Button variant="light" className="nav-button" style={{width: "100%"}}>Publish</Button>
            <Button variant="light" className="nav-button" style={{width: "100%"}}>Draft</Button>
            <Button variant="light" className="nav-button" style={{width: "100%"}}>Deleted</Button>
      </Container>
    )
}
export default Sidebar