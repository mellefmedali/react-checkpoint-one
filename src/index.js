import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown, Container, Card, CardGroup} from 'react-bootstrap';
import './index.css';
import {  MDBFooter,  MDBContainer,  MDBCol,  MDBRow, MDBBtn,  MDBInput} from 'mdb-react-ui-kit';
import Volcano from './images/volcano.jpg'
import Route from './images/route.jpg'
import Boat from './images/boat.jpg'
import Lac from './images/lac.jpg'



class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="https://github.com/mellefmedali/react-checkpoint-one.git">React First Checkpoint</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://learn.gomycode.co">Gomycode Learn</Nav.Link>
                <NavDropdown title="React Links" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://reactjs.org/">React.JS</NavDropdown.Item>
                  <NavDropdown.Item href="https://reactjs.org/docs/react-component.html">React Components</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://youtu.be/LgB3j2y1b-4?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW">Youtube Tutorial</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}


function Photoframe (props) {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.source} />
          <Card.Body>
          <Card.Title>{props.titre}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    )
}

class PageBody extends React.Component {
  constructor(){
    super();
    this.state={
      value : `Push this button!`,
      number : 1
    }
  }
  counter(){
    this.setState({number : this.state.number+1})
    this.setState({value : `already pushed ${this.state.number} times`})
  }

  reset(){
    this.setState({number : 0})
    this.setState({value : `Push this button!`})
  }
  render() {
    return (
      <div className='pagebody'>
        <h1>WELCOME TO MY FIRST REACT PAGE</h1>
        <Button variant='warning' onClick={()=>{this.reset()}} >Reset ------&gt; </Button>
        <Button variant='danger' onClick={()=>{this.counter()}}>{this.state.value}</Button> 
        <CardGroup className='photos'>
        <Photoframe titre = "titre 1" description = "description de la photo 1" source = {Route}/>
        <Photoframe titre = "titre 2" description = "description de la photo 2" source = {Volcano}/>
        <Photoframe titre = "titre 3" description = "description de la photo 3" source = {Boat}/>
        
        <Photoframe titre = "titre 3" description = "description de la photo 3" source = {Lac}/>
        </CardGroup>

        
      </div>
    )
  }
}

function FooterApp(){
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left bottom'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          Mellef Mohamed Ali
        </a>
      </div>
    </MDBFooter>
  );
}


class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <PageBody />
        <FooterApp />
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

