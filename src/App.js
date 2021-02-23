import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SectionHome from './components/section1/SectionHome';
import SectionArchives from './components/section2/SectionArchives';

function App() {
  return (
    <main className="App">
      <Header imgName="logo.png" imgAlt="Logo du restaurant Maison Salvi" />
      <SectionHome btnFunction={() => console.log('ok')}>
        <p>
          La Maison Salvi vous offre chaque jour le choix entre un menu carné ou
          végé: 10&nbsp;&euro; livraison incluse (sur Rennes uniquement).
          <br /> <br />
          Des produits sains et simples, de saison, mis en musique et en couleur
          par le chef Pablo. <br />
          Qui d&apos;autre aurait pu réconcilier la famille autour d&apos;une
          idée aussi simple et chaleureuse&nbsp;?<br /> <br />
          Il est temps de passer commande !
        </p>
      </SectionHome>
      <SectionArchives btnFunction={() => console.log('ok')} />
      <Footer />
    </main>
  );
}

export default App;
