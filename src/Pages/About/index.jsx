import bannerImage from '../../assets/about-banner.jpg';
import './About.css';
import Banner from '../../components/Banner';
import ScrollingBar from '../../components/Scrolling';

const About = () => {
  return (
    <main>
      <Banner image={bannerImage} />
      <section className="scrollings__wrapper">
        <ScrollingBar
          kasaValue="Fiabilité"
          valueText="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <ScrollingBar
          kasaValue="Respect"
          valueText="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <ScrollingBar
          kasaValue="Service"
          valueText="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <ScrollingBar
          kasaValue="Sécurité"
          valueText="La sécurité est la priorité de Kasa.
          Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards soient bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
};

export default About;
