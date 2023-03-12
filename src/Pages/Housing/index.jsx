import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const hostRating = housing.rating;
  const medium = 18;
  const minimim = 13;
  const extraMinimum = 12;
  const titleSize = window.innerWidth >= 767 ? medium : minimim;
  const textSize = window.innerWidth >= 767 ? medium : extraMinimum;
  const ratings = ['1', '2', '3', '4', '5'];
  const star =
    ratings.length < housing.rating ? (
      <Star color={'#FF6060'} />
    ) : (
      <Star color={'#E3E3E3'} />
    );

  console.log(
    'test',
    ratings.forEach((rate) => (rate === hostRating ? <Star /> : null))
  );
  console.log(
    'test 2',
    ratings.map((rate) =>
      rate >= hostRating ? <Star key={rate.toString()} /> : null
    )
  );

  return (
    <main>
      <Slideshow hostPictures={housingPictures} />
      <section className="housing__section">
        <div className="housing__informations">
          <div>
            <h1 className="housing__title">{housingTitle}</h1>
            <p className="housing__location">{housingLocation}</p>
            <div className="housing__tagsWrapper">
              {housingTags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} tag={tag} />
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
                rate >= hostRating ? (
                  <Star key={rate.toString()} color={'#FF6060'} />
                ) : null
              )}
              {ratings.map((rate) => (rate >= hostRating ? star : null))}
            </div>
          </div>
        </div>
        <div className="housing__collapseWrapper">
          <Collapse
            titleFontSize={titleSize}
            textFontSize={textSize}
            title="Description"
            text={housingDescription}
          />
          <Collapse
            titleFontSize={titleSize}
            textFontSize={textSize}
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
