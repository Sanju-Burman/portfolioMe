import "./Education.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackEducation = [
    {
        title: "Full-Stack Software Development Program",
        duration: "2024 - 2025",
        institute: "Masai School, Bangalore, Karnataka"
    },
    {
        title: "B.Tech in Computer Science & Engineering",
        duration: "2020 - 2023",
        institute: "Shri Ram Institute of Science and Technology, Jabalpur, Madhya Pradesh"
    },
    {
        title: "Diploma in Computer Science & Engineering",
        duration: "2017 - 2020",
        institute: "Govt. Kalaniketan Polytechnic College, Jabalpur, Madhya Pradesh"
    }
];

const EducationCard = ({ item, index }) => {
    const position = index % 2 === 0 ? "left" : "right";
    const revealRef = useScrollReveal(position);

    return (
        <div className={`timeline-container ${position}`} ref={revealRef}>
            <div className="education text-box">
                <h2>{item.title}</h2>
                <small>{item.duration}</small>
                <span>{item.institute}</span>
            </div>
        </div>
    );
};

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
                {resolvedEducation.map((item, index) => (
                    <EducationCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Education;