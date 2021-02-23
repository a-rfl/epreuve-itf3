import PropTypes from 'prop-types';
import { useState } from 'react';
import Btn from '../Btn/Btn';
import './_header.scss';

const Header = ({
  imgName, imgAlt, musicName,
}) => {
  const [music, setMusic] = useState(true);

  // ** FIX ME **
  // Can not pause the audio yet
  const toggleMusic = () => {
    setMusic(!music);
    const audio = new Audio(`sounds/${musicName}.mp3`);
    if (music) {
      audio.play();
    } else if (audio) {
      audio.stop();
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
