import './Resume.scss';

const workExperience = [
    {
        title: "Software Engineer/Analyst",
        company: "Capgemini, Hyderabad, IN",
        duration: "Oct, 2020 - Present"
    },
    {
        title: "Subject Matter Expert - Computer Science",
        company: "Chegg, Remote",
        duration: "Nov, 2019 - Present"
    }
];

const educationHistory = [
    {
        class: "Bachelor of Technology, Computer Science",
        school: "RSR Rungta College of Engineering & Technology, Bhilai, Chhattisgarh, IN",
        duration: "2016 - 2020"
    },
    {
        class: "Senior Secondary, XII",
        school: "Shri Shankaracharya Vidyalaya, Bhilai, Chhattisgarh, IN",
        duration: "2016"
    },
    {
        class: "Higher Secondary, X",
        school: "Ambuja Vidya Peeth, Rawan, Chhattisgarh, IN",
        duration: "2014"
    }
];

export default function Resume() {
    return (
        <div className='row my-resume'>

            <div className='col-lg-6'>
                <h3 className='heading'>Work Experience</h3>
                {workExperience.map((item, i) => (
                    <div className='resume-items' key={i}>
                        <h4>{item.title}</h4>
                        <p><em>{item.company}</em></p>
                        <h5>{item.duration}</h5>
                    </div>
                ))}
            </div>

            <div className='col-lg-6'>
                <h3 className='heading'>Education</h3>
                {educationHistory.map((item, i) => (
                    <div className='resume-items' key={i}>
                        <h4>{item.class}</h4>
                        <p><em>{item.school}</em></p>
                        <h5>{item.duration}</h5>
                    </div>
                ))}
            </div>

        </div>
    );
}
