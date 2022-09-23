import React from 'react';
import { Card } from 'react-bootstrap';
import Profile from '../assets/pp.png';

function AdminPage() {
  return (
    <div>
      <Card className="text-center bio" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Profile} />
        <Card.Body>
          <Card.Title>Rhesa Havilah Mondi</Card.Title>
          <Card.Text>Staff Admin</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminPage;
