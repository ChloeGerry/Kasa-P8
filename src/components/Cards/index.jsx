import './Cards.css';
import '../../style/variables.css';
import { useState, useEffect } from 'react';
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
  console.log(housing);

  return (
    <section className="cards__wrapper">
      {housing.map(({ id, title, cover }) => (
        <Card key={id} cover={cover} title={title} />
      ))}
    </section>
  );
};

export default Cards;
