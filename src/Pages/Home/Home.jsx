import Banner from '../../components/Banner/index';
import Cards from '../../components/Card';

const Home = () => {
  return (
    <main>
      <section className="banner__wrapper">
        <Banner />
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </section>
      <Cards />
    </main>
  );
};

export default Home;
