import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dummy data representing different sections of the website
  const websiteContent = [
    {
      title: 'Home',
      content: 'Welcome to our website! This is the home page content.'
    },
    {
      title: 'About',
      content: 'Learn more about us and our mission.'
    },
    {
      title: 'Portfolio',
      content: 'Explore our portfolio showcasing our work.'
    },
    {
      title: 'Contact',
      content: 'Get in touch with us for inquiries or feedback.'
    },
    {
      title: 'Feedback',
      content: 'Leave us your feedback and suggestions.'
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
            <a href=''><box-icon name='user' type='solid' color='#111'></box-icon></a>
            </Container>
      </Navbar>

      <div className="sidebar">
        <div className="left">
          <header id="header">
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <a href=''>veg</a>
                <a href=''>nonveg</a>
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

export default CustomerDashboard;
