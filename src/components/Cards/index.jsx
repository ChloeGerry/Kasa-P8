import { useState, useEffect } from 'react';
import Card from '../Card';

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const housing = data;

  return (
    <section>
      {housing.map(({ id, title, cover }) => (
        <Card key={id} cover={cover} title={title} />
      ))}
    </section>
  );
};

export default Cards;
