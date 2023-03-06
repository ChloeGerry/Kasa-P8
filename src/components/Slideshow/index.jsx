import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Slideshow = () => {
  const [housings, setHousings] = useState([]);
  const hostId = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log(error));
  }, []);

  let housingsIds = [];

  const unfilteredHousingId = housings.map(({ id }) => id);

  unfilteredHousingId.forEach((id) => {
    if (!housingsIds.includes(id)) {
      housingsIds.push(id);
    }
  });

  const isIdMatching = housingsIds.includes(hostId.id);

  const findHostById = housingsIds.find((housingId) => housingId === hostId.id);
  console.log(findHostById);

  console.log(
    housings.map(({ pictures }) => (
      <img key={pictures} src={pictures} alt="housing" />
    ))
  );

  return isIdMatching ? (
    <section>
      <svg
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
          fill="white"
        />
      </svg>
      <p>Bienvenue</p>
      {/* {findHostById(housings).map(({ pictures }, index) => (
        <img key={`${pictures}-${index}`} src={pictures} alt="housing" />
      ))} */}
      <svg
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
    </section>
  ) : null;
};

export default Slideshow;
