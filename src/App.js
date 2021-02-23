import { useRef, useState } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Modal from './components/Modal/Modal';
import SectionHome from './components/section1/SectionHome';
import SectionArchives from './components/section2/SectionArchives';
// Data
import menus from './data/menus';

function App() {
  // To get the date of the dat
  const date = new Date();
  // To get the month in french
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const actualDate = `${date.getDate()} ${months[date.getMonth()]}`;
  /* -- MODAL -- */
  // States Modal : Visibility & Content
  const [visibility, setVisibility] = useState(false);
  const [modalContent, setModalContent] = useState({
    date: '',
    entrees: [],
    plats: [],
    desserts: [],
  });
  // Click event function for show the menu of the day
  const toggleModal = (e) => {
    e.preventDefault();
    // Display the modal
    setVisibility(!visibility);
    if (!visibility) {
      // Find the menu depending on the actual date
      const findMenuOfTheDay = (item) => item.date === actualDate;
      const menuOfTheDay = menus.filter(findMenuOfTheDay);
      // Each part of the menu of the day
      const entreesOfTheDay = menuOfTheDay[0].entrees;
      const platsOfTheDay = menuOfTheDay[0].plats;
      const dessertsOfTheDay = menuOfTheDay[0].desserts;
      setModalContent({
        date: actualDate,
        entrees: entreesOfTheDay,
        plats: platsOfTheDay,
        desserts: dessertsOfTheDay,
      });
    }
  };

  return (
    <main className="App">
      <Header imgName="logo.png" imgAlt="Logo du restaurant Maison Salvi" musicName="Jean-Jacques Perrey - in a happy moog" />
      <SectionHome btnFunction={toggleModal}>
        La Maison Salvi vous offre chaque jour le choix entre un menu carné ou
        végé: 10&nbsp;&euro; livraison incluse (sur Rennes uniquement).
        <br /> <br />
        Des produits sains et simples, de saison, mis en musique et en couleur
        par le chef Pablo. <br />
        Qui d&apos;autre aurait pu réconcilier la famille autour d&apos;une
        idée aussi simple et chaleureuse&nbsp;?<br /> <br />
        Il est temps de passer commande !
      </SectionHome>
      <SectionArchives btnFunction={() => console.log('ok')} />
      <Footer />

      {/* Modals */}
      <Modal
        date={modalContent.date}
        btnFunction={toggleModal}
        visible={visibility}
      >
        <span>Entrées</span>
        <ul>
          {modalContent.entrees.map((item) => <li>{item}</li>)}
        </ul>
        <span>Plats</span>
        <ul>
          {modalContent.plats.map((item) => <li>{item}</li>)}
        </ul>
        <span>Desserts</span>
        <ul>
          {modalContent.desserts.map((item) => <li>{item}</li>)}
        </ul>
      </Modal>
    </main>
  );
}

export default App;
