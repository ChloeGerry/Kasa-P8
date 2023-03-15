import bannerImage from '../../assets/about-banner.jpg';
import './About.css';
import Banner from '../../components/layout/Banner';
import Collapse from '../../components/layout/Collapse';

const About = () => {
  return (
    <main>
      <Banner margin="medium" image={bannerImage} />
      <section className="collapses__wrapper">
        <Collapse
          size="large"
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          size="large"
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          size="large"
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          size="large"
          title="Sécurité"
          text="La sécurité est la priorité de Kasa.
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards soient bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
};

export default About;
