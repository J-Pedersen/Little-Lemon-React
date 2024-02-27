import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Reviews from '../components/Reviews';
import About from '../components/About';
import '../components/styles/normalize.css';

function Home() {
    return (
      <main>
            <Hero />
            <Specials />
            <Reviews />
            <About />
      </main>
    );
  }

export default Home;