import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Housing.css';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Star from '../../components/Rating';
import Tag from '../../components/Tag';

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

  const navigate = useNavigate();
  const isIdNotFound = housings.length > 0 && !housing;

  useEffect(() => {
    if (isIdNotFound) {
      navigate('/*');
    }
  }, [isIdNotFound, navigate]);

  if (!housing) {
    return <div className="loading">Loading</div>;
  }

  const housingPictures = housing.pictures;
  const housingDescription = housing.description;
  const housingEquipments = housing.equipments;
  const housingTitle = housing.title;
  const housingLocation = housing.location;
  const housingTags = housing.tags;
  const hostPicture = housing.host.picture;
  const hostName = housing.host.name;

  const hostRating = Number(housing.rating);
  let ratings = Array(5).fill(null);

  ratings.forEach((_, index) => {
    ratings[index] = index + 1;
  });

  return (
    <main>
      <Slideshow hostPictures={housingPictures} />
      <section className="housing__section">
        <div className="housing__informations">
          <div>
            <h1 className="housing__title">{housingTitle}</h1>
            <p className="housing__location">{housingLocation}</p>
            <div className="housing__tagsWrapper">
              {housingTags.map((tagLabel) => (
                <Tag key={tagLabel} tagLabel={tagLabel} />
              ))}
            </div>
          </div>
          <div className="housing__hostAndRatingWrapper">
            <div className="housing__host">
              <p className="housing__hostName">{hostName}</p>
              <img
                className="housing__hostPicture"
                src={hostPicture}
                alt="host"
              />
            </div>
            <div className="star__iconWrapper">
              {ratings.map((rate) =>
                rate <= hostRating ? (
                  <Star key={rate} color="#FF6060" />
                ) : (
                  <Star key={rate} color="#E3E3E3" />
                )
              )}
            </div>
          </div>
        </div>
        <div className="housing__collapseWrapper">
          <Collapse
            size="medium"
            title="Description"
            text={housingDescription}
          />
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
