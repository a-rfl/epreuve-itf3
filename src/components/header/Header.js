import PropTypes from 'prop-types';
import './_header.scss';

const Header = ({ imgName, imgAlt }) => (
  <header>
    <img className="header-img" src={`img/${imgName}`} alt={imgAlt} />
  </header>
);

Header.propTypes = {
  imgName: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Header;
