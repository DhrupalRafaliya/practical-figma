import './assets/scss/style.scss';
// import Header from './components/comman/header/Header';
import Footer from './components/comman/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './pages/hero/Hero';
import HeroFooter from './components/comman/heroFooter/HeroFooter';

function App() {
  return (
    <>
      <Hero />
      <HeroFooter />
      <Footer />
    </>
  );
}

export default App;
