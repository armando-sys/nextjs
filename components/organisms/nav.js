import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
export default function nav() {
  return (<>
    <Navbar style={{ background: "#0086CF" }}>
      <Navbar.Brand href="#home">
        <img src="/beranda/logo.svg" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="text-light" href="#home">
          Tren
        </Nav.Link>
        <Nav.Link className="text-light" href="#features">
          Collection
        </Nav.Link>
        <Nav.Link className="text-light" href="#features">
          Explore
        </Nav.Link>
        <Nav.Link className="text-light" href="#pricing">
          About Us
        </Nav.Link>
      </Nav>
      <Form inline>
        <img className="mr-4" src="/beranda/logo_cart.svg" />
        <img className="mr-4" src="/beranda/logo_user.svg" />
      </Form>
    </Navbar>
    </>)
}
