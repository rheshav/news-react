import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';
import { Container, Row, Col } from 'react-bootstrap';

// fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=866b44a160714cb8ba8281d0e91f505c')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=b9684fd6400547ab90451de71895821e');
      console.log(res);
      setArticles(res.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {articles.map((value) => {
            return <NewsItem title={value.title} description={value.description} url={value.url} urlToImage={value.urlToImage} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default NewsList;
