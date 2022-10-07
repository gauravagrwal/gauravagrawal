import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Resume from '../Resume/Resume';
import './App.scss';

export default function App() {
  return (
    <div>
      <Header />

      <section id='about' className='container'>
        <div className='section-title'>
          <h2>about</h2>
          <p>learn more about me</p>
        </div>
        <About />
      </section>

      <br />

      <section id='resume' className='container'>
        <div className='section-title'>
          <h2>resume</h2>
          <p>check my resume</p>
        </div>
        <Resume />
      </section>

      <br />

      <section id='contact' className='container'>
        <div className='section-title'>
          <h2>contact</h2>
          <p>contact me</p>
        </div>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
