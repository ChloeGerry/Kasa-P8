import bannerImage from '../../assets/homepage-banner.jpg';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';

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
