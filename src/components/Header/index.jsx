import NavigationBar from '../NavigationBar';
import kasaLogo1 from '../../assets/kasa-logo-1.svg';
import kasaLogo2 from '../../assets/kasa-logo-2.svg';
import kasaLogo3 from '../../assets/kasa-logo-3.svg';
import kasaLogo4 from '../../assets/kasa-logo-4.svg';
import kasaLogo5 from '../../assets/kasa-logo-5.svg';
import './Header.css';
import '../../style/variables.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          src={kasaLogo1}
          alt="kasa logo"
          className="header__logo header__logo-part1"
        />
        <img
          src={kasaLogo2}
          alt="kasa logo"
          className="header__logo header__logo-part2"
        />
        <img
          src={kasaLogo3}
          alt="kasa logo"
          className="header__logo header__logo-part3"
        />
        <img
          src={kasaLogo4}
          alt="kasa logo"
          className="header__logo header__logo-part4"
        />
        <img
          src={kasaLogo5}
          alt="kasa logo"
          className="header__logo header__logo-part5"
        />
      </div>
      <NavigationBar />
    </header>
  );
};

export default Header;
