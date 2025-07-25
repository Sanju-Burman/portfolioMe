import { useEffect, useState } from "react";
import "../educations/education.css";

const Education = () => {
const [educations,setEducations] = useState([
    {
        title: "Software Development",
        duration: "Present",
        institute: "Masai School, Bangalore",
        position: "left"
    },
    {
        title: "B.Tech",
        duration: "2020 - 2023",
        institute: "Shree Ram Institute of Science and Technology, Jabalpur",
        position: "right"
    },
    {
        title: "Polytechnic Diploma",
        duration: "2017 - 2020",
        institute: "Govt. Polytechnic College, Jabalpur",
        position: "left"
    }
]);

    // useEffect(() => {
    //     // Insert education data into backend
    //     fetch("http://localhost:5000/api/education", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ data: educationData })
    //     })
    //         .then(res => res.json())
    //         .then(response => console.log("Education inserted:", setEducations(response)))
    //         .catch(err => console.error("Error inserting education:", err));
    // }, []);

    return (
        <div className="education section" id="education">
            <h2 className="heading">Education</h2>
            <div className="educations-timeline">
                {educations.map((item, index) => (
                    <div key={index} className={`timeline-container ${item.position}`}>
                <div className="education text-box">
                    <h2>{item.title}</h2>
                    <small>{item.duration}</small>
                    <span>{item.institute}</span>
                </div>
            </div>
))}
        </div>
</div >
);
};

export default Education;