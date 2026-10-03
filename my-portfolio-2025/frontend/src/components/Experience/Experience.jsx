import "./Experience.css";
import { useFetch } from '../../hooks/useFetch';
import { portfolioApi } from '../../api/portfolio';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const fallbackExperience = [
    {
        title: "Associate Software Developer",
        company: "Reak Infotech LLP — Jabalpur, MP",
        duration: "August 2025 – Present",
        description: [
            "Architected a unified payment abstraction layer integrating Paytm, JioPay, and BharatPe APIs, implementing strict JSON schema validation and resilient retry mechanisms that eliminated webhook race conditions across 50,000+ daily transactions.",
            "Engineered a Finite State Machine (FSM) in QML/JavaScript for electro-mechanical dispensing control, debouncing raw sensor inputs and trapping motor-stall interrupts to eliminate duplicate trigger signals, cutting erroneous manual refund tickets by 40%.",
            "Developed an offline-first transaction journal using local SQLite storage and an event-driven background sync worker; queued state transitions during connectivity dropouts and performed transactional batch reconciliation upon reconnect, recovering 95% of stranded refunds.",
            "Refactored multi-item dispensing transactions from an all-or-nothing rollback model to granular item-level fault isolation, enabling partial order fulfillment with automatic ledger adjustments and raising checkout completion rates by 15%."
        ],
        techStack: ["Paytm / JioPay / BharatPe", "QML / JavaScript", "SQLite (Offline Sync)", "REST APIs", "Hardware FSM", "Event-Driven Queues"]
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
                {item.techStack && (
                    <div className="experience-tech-grid">
                        {item.techStack.map((tech, i) => (
                            <span key={i} className="experience-tech-chip">{tech}</span>
                        ))}
                    </div>
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
