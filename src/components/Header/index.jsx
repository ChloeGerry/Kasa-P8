import NavigationBar from '../NavigationBar';
import './Header.css';
import '../../style/variables.css';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo width="210px" height="68px" fill="#FF6060" />
      <NavigationBar />
    </header>
  );
};

export default Header;
