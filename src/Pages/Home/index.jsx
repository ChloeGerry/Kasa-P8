import bannerImage from '../../assets/homepage-banner.jpg';
import Banner from '../../components/layout/Banner';
import Cards from '../../components/layout/Cards';

const Home = () => {
  return (
    <main>
      <Banner
        margin="large"
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <Cards />
    </main>
  );
};

export default Home;
