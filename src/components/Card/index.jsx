import './Card.css';
import '../../style/variables.css';

const Card = ({ title, cover }) => {
  return (
    <>
      <img src={cover} alt="housing" className="card__image" />
      {title && <h2 className="card__title">{title}</h2>}
    </>
  );
};

export default Card;
