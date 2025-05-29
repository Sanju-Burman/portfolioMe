import "../educations/education.css";

const Education = () => {
    return (
        <div className="education section">
            <h2 className="heading">Educations</h2>
            <div className="educations-timeline">
                <div className="timeline-container left">
                    <div className="education text-box">
                        <h2>10th</h2>
                        <small>2013 - 2014</small>
                        <span>Takshshila Higher Secondary School</span>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="education text-box">
                        <h2>12th</h2>
                        <small>2015 - 2016</small>
                        <span>Takshshila Higher Secondary School</span>
                    </div>
                </div>
                <div className="timeline-container left">
                    <div className="education text-box">
                        <h2>Polytechnic Diploma</h2>
                        <small>2017 - 2020</small>
                        <span>Govt. Polytechnic colleg, jabalpur </span>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="education text-box">
                        <h2>B.Tech</h2>
                        <small>2020 - 2023</small>
                        <span>Shree Ram Insitute of Science and Technology, Jabalpur</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
