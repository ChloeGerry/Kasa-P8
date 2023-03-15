import { NavLink } from 'react-router-dom';
import '../../../style/variables.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigationBar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        À propos
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
