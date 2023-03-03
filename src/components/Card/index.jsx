import './Card.css';
import '../../style/variables.css';

const Card = ({ title, cover }) => {
  return (
    <article className="card__wrapper">
      <img src={cover} alt="housing" className="card__image" />
      {title && <h2 className="card__title">{title}</h2>}
    </article>
  );
};

export default Card;
