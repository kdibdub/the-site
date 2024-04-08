import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="custom-navbar"
    >
      <Link to="/">
        <Navbar.Brand>
          <img src="/better_coin.gif" style={{ marginLeft: "10px" }} />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-text">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-text">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-text">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-text">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
