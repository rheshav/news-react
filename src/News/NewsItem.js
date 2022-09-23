import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './newsItem.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    // <div className="news-app">
    //   <div className="news-item">
    //     <img className="news-img" src={urlToImage} alt="New Image" />
    //     <h3>
    //       <a href={url}>{title}</a>
    //     </h3>
    //     <p>{description}</p>
    //   </div>
    // </div>

    <Col xs={3} style={{ marginBottom: 10 }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title href={url}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsItem;
