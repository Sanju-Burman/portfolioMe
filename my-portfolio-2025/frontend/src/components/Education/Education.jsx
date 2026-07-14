import "./Education.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';

const fallbackEducation = [
    {
        title: "Software Development",
        duration: "Present",
        institute: "Masai School, Bangalore"
    },
    {
        title: "B.Tech",
        duration: "2020 - 2023",
        institute: "Shree Ram Institute of Science and Technology, Jabalpur"
    },
    {
        title: "Polytechnic Diploma",
        duration: "2017 - 2020",
        institute: "Govt. Polytechnic College, Jabalpur"
    }
];

const Education = () => {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    const { data: educations, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchEducation(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackEducation,
            immediate: !!ownerId
        }
    );

    if (loading) return <div className="education section" id="education"><LoadingSpinner /></div>;

    const resolvedEducation = educations || fallbackEducation;

    return (
        <div className="education section" id="education">
            <h2 className="heading">Education</h2>
            <div className="educations-timeline">
                {resolvedEducation.map((item, index) => {
                    const position = index % 2 === 0 ? "left" : "right";
                    return (
                        <div key={index} className={`timeline-container ${position}`}>
                            <div className="education text-box">
                                <h2>{item.title}</h2>
                                <small>{item.duration}</small>
                                <span>{item.institute}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;