import { Link } from 'react-router-dom';
import '../../style/variables.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigationBar">
      <Link to="/" className="navigationBar__links navigationBar__homeLink">
        Accueil
      </Link>
      <Link to="/about" className="navigationBar__links">
        À propos
      </Link>
    </nav>
  );
};

export default NavigationBar;
