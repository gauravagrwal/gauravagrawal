import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Resume from '../Resume/Resume';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
