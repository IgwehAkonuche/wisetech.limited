import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-background-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

