import './Resume.css';

export default function Resume() {
    return (
        <section id='resume' className='resume'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Resume</h2>
                    <p>Check My Resume</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3 className='resume-title'>Professional Experience</h3>
                        <div className='resume-item'>
                            <h4>Software Engineer/Analyst</h4>
                            <p><em>Capgemini, Hyderabad, IN</em></p>
                            <h5>Oct, 2020 - Present</h5>
                        </div>
                        <div className='resume-item'>
                            <h4>Subject Matter Expert - Computer Science</h4>
                            <p><em>Chegg, Remote</em></p>
                            <h5>Nov, 2019 - Present</h5>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h3 className='resume-title'>Education</h3>
                        <div className='resume-item'>
                            <h4>Bachelor of Engineering, Computer Science</h4>
                            <p> <em>RSR Rungta College of Engineering & Technology, Bhilai, Chhattisgarh, IN</em> </p>
                            <h5>2016 - 2020</h5>
                        </div>
                        <div className='resume-item'>
                            <h4>Senior Secondary</h4>
                            <p> <em>Shri Shankaracharya Vidyalaya, Bhilai, Chhattisgarh, IN</em> </p>
                            <h5>2014 - 2016</h5>
                        </div>
                        <div className='resume-item'>
                            <h4>Higher Secondary</h4>
                            <p><em>Ambuja Vidya Peeth, Rawan, Chhattisgarh, IN</em></p>
                            <h5>2012 - 2014</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
