import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './../../src/customCSS.css';
import logo from "./../logos/logo.svg";


const customStyle={
    margin: "0 15%",
}



function Appbar() {
    return (
      <div className="App">
   <Navbar bg="light" variant="light"  expand="md" collapseOnSelect>
   <Navbar.Brand href="#home"><img src=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#" style={customStyle}><img src={logo}/></Nav.Link>
        <Nav.Link href="#home" style={customStyle}>Home</Nav.Link>
        <Nav.Link href="#features" style={customStyle}>Pricing</Nav.Link>
        <Nav.Link href="#pricing" style={customStyle}>More</Nav.Link>
      </Nav>
      <div className="appBarForm">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2 appBarForm" />
        <Button variant="outline-primary">Search</Button>
      </Form>
      </div>
      </Navbar.Collapse>
    </Navbar>    </div>
    );
  }
  
  export default Appbar;
  