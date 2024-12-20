import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MountainTechLogo from '../../Resources/MountainTechLogo.png'
import CreateEditBlog from '../../CreateEditPage/CreateBlog';
import '../../CreateEditPage/TextEditor/fontStyles.css'

function NavbarBootStrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={MountainTechLogo} className='logo-style' style={{width:'7vh',marginRight:'1vh'}}></img>
        <Navbar.Brand href="#home">MountainTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Blogs</Nav.Link>
            <Nav.Link href="/create">Create/Edit Blogs</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootStrap;