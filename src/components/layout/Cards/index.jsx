import './Cards.css';
import '../../../style/variables.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

const Cards = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="cards__wrapper">
      {housings.map(({ id, title, cover }) => (
        <article key={id}>
          <Link to={`/housing/${id}`} className="card__wrapper">
            <Card cover={cover} title={title} />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Cards;
