import PropTypes from 'prop-types';
import './_sectionArchives.scss';
// Tiny slider
import TinySlider from 'tiny-slider-react';
// Img for slider
import img1 from './img_slider/1.jpg';
import img2 from './img_slider/2.jpg';
import img3 from './img_slider/3.jpg';
import img4 from './img_slider/4.jpg';
import img5 from './img_slider/5.jpg';
// Svg
import splash from '../splash.svg';

const SectionArchives = ({ btnFunction }) => {
  const settings = {
    lazyload: true,
    nav: false,
    controls: false,
    autoplay: true,
    center: true,
    rewind: true,
    autoWidth: true,
    loop: true,
    autoplayButtonOutput: false,
    gutter: 20,
    items: 3,
    speed: 500,
    startIndex: 1,
  };
  const imgs = [img1, img2, img3, img4, img5];

  return (
    <section className="archives">
      <div className="archives-container">
        <div className="archives-content-left">
          <h2>
            <span>archives</span>
            <br />
            gustatives
          </h2>
          <p>
            Un menu de la Masion Salvi vous a séduit ? Vous refusez de croire
            qu&apos;il ne revidendra pas à la carte ? <br /> <br />
            Je vous propose de passer en revue les recettes, et donner votre
            avis. Choisissez votre favori !
          </p>
          <button type="button" className="btn-vote" onClick={btnFunction}>
            voter
          </button>
        </div>
        <div className="archives-content-right">
          <img className="img-perso" src="img/suri02.jpg" alt="Suri" />
          <img className="img-svg" src={splash} alt="Rond plein" />
        </div>
      </div>

      {/* carousel */}
      <section className="slider">
        <TinySlider settings={settings}>
          {imgs.map((el, index) => (
            <div key={index}>
              <img className="slider-img" src={el} data-src={el} alt="Entrée, plat ou dessert de la Maison Salvi" />
            </div>
          ))}
        </TinySlider>
      </section>

    </section>
  );
};

// Props type validation
SectionArchives.propTypes = {
  btnFunction: PropTypes.func.isRequired,
};

export default SectionArchives;
