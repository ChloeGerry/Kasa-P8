import './Banner.css';
import '../../../style/variables.css';

const Banner = ({ title, image, margin }) => (
  <section
    className={`${
      margin === 'large' ? 'banner__section--large' : 'banner__section--medium'
    }`}
  >
    <div className="banner__wrapper">
      <img src={image} alt="banner" className="banner__image" />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  </section>
);

export default Banner;
