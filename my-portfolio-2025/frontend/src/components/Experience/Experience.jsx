import "./Experience.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackExperience = [
    {
        title: "Associate Software Developer",
        company: "Reak Infotech LLP - Jabalpur, MP",
        duration: "August 2025 - Present",
        description: [
            "Resolved major issues with multi-gateway payment integration (Paytm, JioPay, BharatPe) through the implementation of strict payload schemas and resilient retry mechanisms in JavaScript code, solving major issues in API synchronization bugs and processing more than 50,000+ in daily transactions.",
            "Engineered robust state-guards in the QML/JavaScript dispensing logic, eliminating duplicate hardware signals and preventing false API sales reports during motor faults, effectively reducing incorrect manual refunds by 40%.",
            "Built an offline-first refund system utilizing local SQLite storage and a background sync engine to reliably queue and push failed transactions to the server upon network reconnection, recovering 95% of previously lost offline refunds.",
            "Refactored dispensing flows so that failed hardware items are isolated rather than canceling the entire transaction request, thus improving the reliability and overall success of the transaction process 15%."
        ]
    }
];

const ExperienceCard = ({ item, index }) => {
    const position = index % 2 === 0 ? "left" : "right";
    const revealRef = useScrollReveal(position);

    return (
        <div className={`timeline-container ${position}`} ref={revealRef}>
            <div className="experience text-box">
                <h2>{item.title}</h2>
                <small className="company">{item.company}</small>
                <small className="duration">{item.duration}</small>
                {Array.isArray(item.description) ? (
                    <ul className="experience-list">
                        {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                ) : (
                    <p>{item.description}</p>
                )}
            </div>
        </div>
    );
};

const Experience = () => {
    const ownerId = import.meta.env.VITE_OWNER_USER_ID;

    const { data: experiences, loading } = useFetch(
        () => ownerId ? portfolioApi.fetchExperience(ownerId) : Promise.reject('No VITE_OWNER_USER_ID configured'),
        {
            fallbackData: fallbackExperience,
            immediate: !!ownerId
        }
    );

    if (loading) return <div className="experience section" id="experience"><LoadingSpinner /></div>;

    const resolvedExperience = experiences || fallbackExperience;

    return (
        <div className="experience section" id="experience">
            <h2 className="heading">Experience</h2>
            <div className="experience-timeline">
                {resolvedExperience.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
