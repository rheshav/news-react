import React from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';

const searchHandle = async (event) => {
  //   console.log(event.target.value);
  let key = event.target.value;
  if (key) {
    let result = await fetch(`https://newsapi.org/v2/everything?q=${key}&apiKey=b9684fd6400547ab90451de71895821e`);
    result = await result.json();
  } else {
    console.log('empty');
  }
};

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: 20 }}>
        <Container>
          <Navbar.Brand href="#home">News API</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success" onChange={{ searchHandle }}>
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
