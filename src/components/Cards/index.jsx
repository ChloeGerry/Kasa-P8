import './Cards.css';
import '../../style/variables.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const housing = data;

  return (
    <section className="cards__wrapper">
      {housing.map(({ id, title, cover }) => (
        <Link to={`/housing/:${id}`}>
          <Card key={id} cover={cover} title={title} />
        </Link>
      ))}
    </section>
  );
};

export default Cards;
