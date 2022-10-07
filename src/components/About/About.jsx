import './About.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About() {
    return (
        <section id='about' className='about'>
            <div className='about-me container'>

                <div className='section-title'>
                    <h2>About</h2>
                    <p>Learn more about me</p>
                </div>

                <div className='row'>
                    <div className='col-lg-4' data-aos='fade-right'>
                        <img src='https://gauravagrwal.github.io/img/me.gif' className='img-fluid' alt='profile-img' />
                    </div>
                    <div className='col-lg-8 pt-4 pt-lg-0 content' data-aos='fade-left'>
                        <h3>Hi there!</h3>
                        <p>
                            I'm a Software Engineer with keen interest in anything related to
                            technologies. I also contribute to open-source projects. I enjoy
                            learning new things and sharing knowledge with others.
                        </p>
                        <p className='fst-italic'>
                            “When patterns are broken, new worlds emerge.” ― Tuli Kupferberg
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className='skills container'>
                <div className='section-title'>
                    <h2>Skills</h2>
                </div>
                <div className='row skills-content'>
                    <div className='col-lg-6'>
                        <div className='progress'>
                            <span className='skill'>HTML/CSS/JavaScript <i className='val'>60%</i></span>
                            <ProgressBar animated variant="success" now={60} />
                        </div>

                        <div className='progress'>
                            <span className='skill'>C# <i className='val'>70%</i></span>
                            <ProgressBar animated variant="success" now={70} />

                        </div>

                        <div className='progress'>
                            <span className='skill'>Python <i className='val'>55%</i></span>
                            <ProgressBar animated variant="success" now={55} />

                        </div>

                        <div className='progress'>
                            <span className='skill'>Microsoft Azure <i className='val'>60%</i></span>
                            <ProgressBar animated variant="success" now={60} />
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='progress'>
                            <span className='skill'>ReactJs <i className='val'>50%</i></span>
                            <ProgressBar animated variant="success" now={50} />
                        </div>

                        <div className='progress'>
                            <span className='skill'>ASP.NET Core <i className='val'>70%</i></span>
                            <ProgressBar animated variant="success" now={70} />
                        </div>

                        <div className='progress'>
                            <span className='skill'>MySQL/MS SQL Server <i className='val'>70%</i></span>
                            <ProgressBar animated variant="success" now={70} />
                        </div>

                        <div className='progress'>
                            <span className='skill'>Xamarin.Forms<i className='val'>50%</i></span>
                            <ProgressBar animated variant="success" now={50} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
