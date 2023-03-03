import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = ()=>{

    return (
        <Navbar fixed='bottom' bg='dark' variant='dark'>
          <Container>
            {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
            <Navbar.Text>Copyright @CrazyBlogs.com   2022-2023</Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              Follow us on  <a href="#login">facebook</a>
              </Navbar.Text>
              <Navbar.Text className='mx-4'>
              <a href="#login">twitter</a>
              </Navbar.Text>
              <Navbar.Text className='mx-4'>
              <a href="#login">Linkedien</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}
export default Footer;