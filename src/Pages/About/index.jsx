import bannerImage from '../../assets/about-banner.jpg';
import Banner from '../../components/Banner';
import Scrolling from '../../components/Scrolling';

const About = () => {
  return (
    <main>
      <Banner image={bannerImage} />
      <Scrolling />
    </main>
  );
};

export default About;
