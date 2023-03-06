import { useEffect, useState } from 'react';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';

const Housing = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <Slideshow />
      <section>
        {/* {housings.map(({ description, equipments }) => (
          <>
            <Collapse
              key={description}
              title="Description"
              text={description}
            />
            <Collapse key={equipments} title="Équipements" text={equipments} />
          </>
        ))} */}
      </section>
    </main>
  );
};

export default Housing;
