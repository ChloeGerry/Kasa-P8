import bannerImage from '../../assets/homepage-banner.jpg';
import './Banner.css';
import '../../style/variables.css';

const Banner = () => {
  return <img src={bannerImage} alt="banner" className="banner__image" />;
};

export default Banner;
