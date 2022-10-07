import './Header.css';

export default function Header() {
    return (
        <header id='App-Header'>
            <div className='container'>

                <h1><a href='index.html'>Gaurav Agrawal.</a></h1>
                <h2>I'm a <span>software developer</span> from India.</h2>

                <nav className='navbar'>
                    <ul>
                        <li><a className='nav-link active' href='#header'>Home</a></li>
                        <li><a className='nav-link' href='#about'>About</a></li>
                        <li><a className='nav-link' href='#resume'>Resume</a></li>
                        <li><a className='nav-link' href='#portfolio'>Portfolio</a></li>
                        <li><a className='nav-link' href='#contact'>Contact</a></li>
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
    );
}
