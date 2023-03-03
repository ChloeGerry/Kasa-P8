import './Footer.css';
import '../../style/variables.css';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo width="122px" height="40px" fill="#fff" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
