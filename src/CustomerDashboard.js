import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function Customer() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dummydata 
  const websiteContent = [
    {
      title: 'Local 1',
      content: 'Welcome'
    },
    {
      title: 'Local 2',
      content: 'welcome2'
    },
    {
      title: 'local3',
      content: 'welcome3'
    },
    {
      title: 'lcoal4',
      content: 'welcome4'
    },
    {
      title: 'local5',
      content: 'welcome5'
    }
  ];

  // Filter content based on search query
  const filteredContent = websiteContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary topnav">
        <Container fluid>
          <Navbar.Brand href="#">Home Feast</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Regular</Nav.Link>
              <Nav.Link href="#action2">Mess</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="sidebar">
        <div className="left">
          <header id="header">
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <h4>veg</h4>
                <h4>nonveg</h4>
              </ul>
            </nav>
          </header>
        </div>
      </div>

      <div className="right">
        <br /><br />
        <div className="d-flex justify-content-around">
          {filteredContent.map(item => (
            <Card key={item.title} style={{ width: '18rem' }} className='card1'>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
                <Button variant="primary" className='button-31'>Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customer;

