import PropTypes from 'prop-types';
import Btn from '../Btn/Btn';
import './_header.scss';

const Header = ({ imgName, imgAlt, musicName }) => {
  const audio = new Audio();
  audio.src = `sounds/${musicName}.mp3`;

  const toggleMusic = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <header>
      <img className="header-img" src={`img/${imgName}`} alt={imgAlt} />

      <Btn label="Musique du jour" func={toggleMusic} classNames="btn-music" />
    </header>
  );
};

Header.propTypes = {
  imgName: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  musicName: PropTypes.string,
};

Header.defaultProps = {
  musicName: '',
};

export default Header;
