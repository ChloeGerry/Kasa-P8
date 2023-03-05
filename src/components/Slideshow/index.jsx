import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const housing = data;

  return (
    <section>
      {housing.map(({ id, pictures }, index) => (
        <img key={`${id}-${index}`} src={pictures} alt="housing" />
      ))}
    </section>
  );
};

export default Slideshow;
