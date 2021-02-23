import PropTypes from 'prop-types';
import './_sectionHome.scss';
// Svg
import fullRound from '../full_round.svg';
import strippedRound from '../stripped_round.svg';

const SectionHome = ({ children, btnFunction }) => (
  <section className="home">
    <img className="img-svg full-round" src={fullRound} alt="Rond plein" />
    <img className="img-svg stripped-round" src={strippedRound} alt="Rond strié" />
    <div className="home-container">
      <div className="home-content-left">
        <img src="img/curry_de_legume.jpg" alt="Curry de légumes" />
        <p>
          {children}
        </p>
        <button className="btn-menu" type="submit" onClick={btnFunction}>menu du jour</button>
      </div>
      <img
        className="home-content-right"
        src="img/cuistot1.jpg"
        alt="Chef Pablo tenant une salade."
      />
    </div>
  </section>
);

// Props type validation
SectionHome.propTypes = {
  children: PropTypes.string,
  btnFunction: PropTypes.func.isRequired,
};

SectionHome.defaultProps = {
  children: "Ceci est votre texte d'introduction.",
};

export default SectionHome;
