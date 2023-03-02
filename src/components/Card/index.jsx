import './Card.css';

const Card = ({ title, cover }) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={cover} alt="housing" />
    </article>
  );
};

export default Card;
