import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function HeadNav() {
  // const IsLogin = ()=>{
  //   return(
  //     <Login></Login>
  //   )
  // }
  return (
    <div >
      <Navbar fixed="top" bg="primary" variant="dark"className="navbar navbar-default navbar-fixed-top" >
        <Container>
          <Navbar.Brand href="#home">CrazyBlogs.com</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">

         
          <Nav className="me-left">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
            <Nav.Link href="/sign-up">SignUP</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>

  );
}

export default HeadNav;

