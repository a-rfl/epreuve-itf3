import PropTypes from 'prop-types';
import './_sectionHome.scss';

const SectionHome = () => (
  <section className="home">
    <div className="home-container">
      <div className="home-content-left">
        <img src="img/curry_de_legume.jpg" alt="Curry de légumes" />
        <p>
          La Maison Salvie vous offre chaque jour le choix entre un menu carné
          ou végé: 10 &euro; livraison incluse (sur Rennes uniquement).
        </p>
        <p>
          Des produits sains et simples, de saison, mis en musique et en couleur
          par le chef Pablo. <br />
          Qui d'autre aurait pu réconcilier la famille autour d'une idée aussi
          simple et chaleureuse ?
        </p>
        <p>Il est temps de passer commande !</p>
        <button className="btn-menu">menu du jour</button>
      </div>
      <img className="home-content-right" src="img/cuistot1.jpg" alt="Chef Pablo tenant une salade." />
    </div>
  </section>
);

SectionHome.propTypes = {};

export default SectionHome;
