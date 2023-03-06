import NavigationBar from '../NavigationBar';
import './Header.css';
import '../../style/variables.css';
import HeaderLogo from '../Logos/HeaderLogo';

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <NavigationBar />
    </header>
  );
};

export default Header;
