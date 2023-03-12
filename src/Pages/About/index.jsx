import bannerImage from '../../assets/about-banner.jpg';
import './About.css';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';

const About = () => {
  const large = 24;
  const minimim = 13;
  const extraMinimum = 12;
  const titleSize = window.innerWidth >= 767 ? large : minimim;
  const textSize = window.innerWidth >= 767 ? large : extraMinimum;

  return (
    <main>
      <Banner className="banner__image-aboutPage" image={bannerImage} />
      <section className="collapses__wrapper">
        <Collapse
          titleFontSize={titleSize}
          textFontSize={textSize}
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          titleFontSize={titleSize}
          textFontSize={textSize}
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          titleFontSize={titleSize}
          textFontSize={textSize}
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          titleFontSize={titleSize}
          textFontSize={textSize}
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
