import './Contact.css';

export default function Contact() {
    return (
        <section id='contact' className='contact'>
            <div className='container'>

                <div className='section-title'>
                    <h2>Contact</h2>
                    <p>Contact Me</p>
                </div>

                <div className='row mt-2'>

                    <div className='col-md-6 d-flex align-items-stretch'>
                        <div className='info-box'>
                            <i className='bx bx-map'></i>
                            <h3>My Address</h3>
                            <p>Hyderabad, Telangana</p>
                        </div>
                    </div>

                    <div className='col-md-6 mt-4 mt-md-0 d-flex align-items-stretch'>
                        <div className='info-box'>
                            <i className='bx bx-share-alt'></i>
                            <h3>Social Profiles</h3>
                            <div className='social-links'>
                                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/gaurav.ag05' className='facebook'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/__gauravagrawal' className='instagram'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://www.reddit.com/user/__gauravagrawal' className='reddit'>
                                    <i className='bi bi-reddit'></i>
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://twitter.com/__gauravagrwal' className='twitter'>
                                    <i className='bi bi-twitter'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-4 d-flex align-items-stretch'>
                        <div className='info-box'>
                            <i className='bx bx-envelope'></i>
                            <h3>Email Me</h3>
                            <p> <a href='mailto:gauravag.1005@gmail.com'> gauravag.1005@gmail.com </a> </p>
                        </div>
                    </div>
                    <div className='col-md-6 mt-4 d-flex align-items-stretch'>
                        <div className='info-box'>
                            <i className='bx bx-phone-call'></i>
                            <h3>Call Me</h3>
                            <p> <a href='tel:+91700025524'>+91 70002-55524</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
