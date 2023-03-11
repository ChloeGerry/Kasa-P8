import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Housing.css';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Star from '../../components/Star';

const Housing = () => {
  const [housings, setHousings] = useState([]);
  const hostId = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((result) => result.json())
      .then((housings) => setHousings(housings))
      .catch((error) => console.log(error));
  }, []);

  const housing = housings.find((host) => {
    return host.id === hostId.id;
  });

  if (!housing) {
    return <div>Loading</div>;
  }

  const housingPictures = housing.pictures;
  const housingDescription = housing.description;
  const housingEquipments = housing.equipments;
  const housingTitle = housing.title;
  const housingLocation = housing.location;
  const housingTags = housing.tags;
  const hostPicture = housing.host.picture;
  const hostName = housing.host.name;

  return (
    <main>
      <Slideshow hostPictures={housingPictures} />
      <section className="housing__section">
        <div className="housing__informations">
          <div>
            <h1 className="housing__title">{housingTitle}</h1>
            <p className="housing__location">{housingLocation}</p>
            <div className="housing__tagsWrapper">
              {housingTags.map((tag) => (
                <p className="housing__tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="housing__host">
              <p className="housing__hostName">{hostName}</p>
              <img
                className="housing__hostPicture"
                src={hostPicture}
                alt="host"
              />
            </div>
            <Star />
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse title="Description" text={housingDescription} />
          <Collapse
            size="medium"
            title="Équipements"
            text={housingEquipments.map((equipment, index) => (
              <p className="housing__equipments" key={`${index}-${equipment}`}>
                {equipment}
              </p>
            ))}
          />
        </div>
      </section>
    </main>
  );
};

export default Housing;
