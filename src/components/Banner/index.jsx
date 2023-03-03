import './Banner.css';
import '../../style/variables.css';

const Banner = ({ title, image }) => (
  <section className="banner__wrapper">
    <img src={image} alt="banner" className="banner__image" />
    {title && <h1 className="banner__title">{title}</h1>}
  </section>
);

export default Banner;
