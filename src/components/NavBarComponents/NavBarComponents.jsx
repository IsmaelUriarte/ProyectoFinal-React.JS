
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponents = () => {

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home" className='text-3xl font-semibold'>NABMW</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='text-lg font-semibold'>Home</Nav.Link>
            
            <Nav.Link href="#link" className='text-lg font-semibold'>Contact</Nav.Link>

            <Nav.Link href="#link" className='text-lg font-semibold'>About Us</Nav.Link>
            
            <NavDropdown className='text-lg font-semibold' title="Models" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coupé</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sedán</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">4X4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">De lujo</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent/>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavBarComponents;