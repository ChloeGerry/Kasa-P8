import './Footer.css';
import '../../style/variables.css';
import FooterLogo from '../Logos/FooterLogo';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterLogo />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
