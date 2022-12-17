import { useRef } from 'react';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Resume from '../Resume/Resume';
import './App.scss';
import './NavBar.scss';

export default function App() {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <header id='App-Header'>
        <div className='container'>

          <h1><a href='.'>Gaurav Agrawal.</a></h1>
          <h2>I'm a <span>software developer</span> from India.</h2>

          <nav className='navbar'>
            <ul>
              <li className='nav-link active' onClick={() => scrollToSection(home)}>Home</li>
              <li className='nav-link' onClick={() => scrollToSection(about)}>About</li>
              <li className='nav-link' onClick={() => scrollToSection(resume)}>Resume</li>
              <li className='nav-link' onClick={() => scrollToSection(portfolio)}>Portfolio</li>
              <li className='nav-link' onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
            <i className='bi bi-list' id='App-mobile-nav-toggle'></i>
          </nav>

          <div id='App-social-links'>
            <a target='_blank' rel='noreferrer' href='https://www.github.com/gauravagrwal'>
              <i className='bi bi-github'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gauravagrwal'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
      </header>

      <section ref={about} id='about' className='container'>
        <div className='section-title'>
          <h2>about</h2>
          <p>learn more about me</p>
        </div>
        <About />
      </section>

      <br />

      <section ref={resume} id='resume' className='container'>
        <div className='section-title'>
          <h2>resume</h2>
          <p>check my resume</p>
        </div>
        <Resume />
      </section>

      <br />

      <section ref={contact} id='contact' className='container'>
        <div className='section-title'>
          <h2>contact</h2>
          <p>contact me</p>
        </div>
        <Contact />
      </section>

      <Footer />
    </>
  );
}
