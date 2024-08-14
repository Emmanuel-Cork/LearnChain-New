import "../styles/Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>&copy;{year} Emmanuel Muragijimana, <a href="https://www.cit.ie/" target="_blank" rel="noreferrer">MTU</a></p>
      <div className="links">
        <a href="https://linkedin.com/in/emmanuelmurag" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="tel:0851898362" target="_blank" rel="noreferrer">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:emmanuelmurag@gmail.com" target="_blank" rel="noreferrer">
          <i className="far fa-envelope"></i>
        </a>
        <a href="skype:live:.cid.b6afd292f20599a7?chat" target="_blank" rel="noreferrer">
          <i className="fab fa-skype"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

